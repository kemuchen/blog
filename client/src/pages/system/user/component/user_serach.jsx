import React from 'react'
import {Button, Card, Form, Input, Select, Row, Col} from 'antd'
import {connect} from 'dva'

const Option = Select.Option;

@connect(({user, global}) => ({
    pagination: user.pagination,
    validate: global.validate
}))
@Form.create()
class UserSearchPage extends React.Component {

    comcomponentDidMount() {
        const {dispatch} = this.props;
        dispatch({
            type: 'global/fetchDict',
            payload: {
                dicttype: 'validate'
            }
        });
    }
    
    //日期相关
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    //多条件查询
    handleSearchBtn = () => {
        const {form, dispatch} = this.props;
        const paginationParams = {
            page: 1, //pagination.current,
            pageSize: 10,
        };
        form.validateFields((err, fv) => {
            if (err) return false;
            //保存查询条件
            dispatch({
                type: 'user/handleSearchParams',
                payload: {searchParams: fv},
            });

            dispatch({
                type: 'user/handleListData',
                payload: {
                    ...fv,
                    ...paginationParams,
                },
            });
        });
    };

    //重置表单
    handleReSetForm = () => {
        const {form} = this.props;
        form.resetFields();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const validate = this.props.validate || []; // 设置默认为空，如果不设置默认，第一次render时会报错
        const formItemLayout = {
            labelCol: {
              xs: { span: 12 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 12 },
              sm: { span: 18 },
            },
        };

        const simpleSearch = (
            <Form {...formItemLayout}>
                <Row style={{ marginTop: '-15px' }}>
                    <Col span={8}>
                        <Form.Item label="用户名">
                            {getFieldDecorator('username')(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="手机号">
                            {getFieldDecorator('phone')(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="有效">
                            {getFieldDecorator('valid')( 
                            <Select placeholder="请选择">
                                {validate.map(valid => (
                                    <Option value={valid.id} key={valid.id}>
                                      {valid.description}
                                    </Option>
                                ))}
                            </Select>)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row type='flex' justify='center' style={{marginBottom: '15px'}}>
                    <Col xs={{span: 6}} sm={{span: 3}}>
                    <Button style={{marginLeft: '10px'}} type="primary" onClick={this.handleSearchBtn}>查询</Button>
                    </Col>
                    <Col xs={{span: 6}} sm={{span: 3}}>
                    <Button style={{marginLeft: '10px'}} onClick={() => { this.handleReSetForm }}>重置</Button>
                    </Col>
                </Row>
            </Form>
        );
        return (
            <Card
                style={{marginBottom: '1%'}}
                bodyStyle={{paddingBottom: 0, paddingTop: '3%'}}>
                {
                    simpleSearch
                }
            </Card>
        );
    }
}

export default UserSearchPage;