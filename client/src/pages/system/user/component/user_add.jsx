import React from 'react'
import {Input, Form, Row, Col, Select, Button, message} from 'antd'
import {connect} from 'dva'
import Constants from '@/utils/global/constants'

const Item = Form.Item;
const Option = Select.Option;

@connect(({user, loading, global}) => ({
    submitting: loading.effects['user/handleListData'],
    tabActiveKey: user.tabActiveKey,
    message: user.message,
    tableRecordData: user.tableRecordData,
    searchParams: user.searchParams,
    user_status: global.user_status,
    user_type: global.user_type
}))
@Form.create()
class UserAddPage extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({
            type: 'global/fetchDict',
            payload: {
                dicttype: 'user_status'
            }
        });
        dispatch({
            type: 'global/fetchDict',
            payload: {
                dicttype: 'user_type'
            }
        });
    }

    handleTabsChange = (key) => {
        const {dispatch} = this.props;
        // 改变tabs状态和清除tableRecordData
        dispatch({
            type: 'user/show',
            payload: {
                tabActiveKey: key,
                tableRecordData: [],
            },
        });
    };

    //重置表单
    handleReSetForm = () => {
        const {form} = this.props;
        form.resetFields();
    };

    //获取基本数据列表
    handleGetListData = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'user/handleListData',
            payload: {
                pageSize: Constants.PAGE_SIZE, current: Constants.CURRENT, valid: Constants.VALID
            }, //page、current都表示当前页，但是laravel框架需要用page
        });
    };

    //提交数据
    handleSubmitBtn = () => {
        const {form, dispatch, tableRecordData} = this.props;
        form.validateFields((err, fv) => {
            if (err) return;

            //如果是编辑
            if (tableRecordData && tableRecordData.id) fv.id = tableRecordData.id;
            dispatch({
                type: 'user/handleSubmitBtn',
                payload: fv,
                callback: () => {
                    //添加后重新拉取数据
                    this.handleGetListData();
                    //切换Tabs，到userList列表页
                    this.handleTabsChange('1');
                    //重置表单
                    this.handleReSetForm();
                    //提 示
                    tableRecordData && tableRecordData.id ? message.success('修改用户成功', 3) : message.success('新增用户成功', 3);
                }
            });
        });
    };
    
    render() {
        const {submitting, tableRecordData} = this.props;
        const user_status = this.props.user_status || []; // 设置默认为空，如果不设置默认，第一次render时会报错
        const user_type = this.props.user_type || []; // 设置默认为空，如果不设置默认，第一次render时会报错

        const { getFieldDecorator } = this.props.form;

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
        return (
            <Form {...formItemLayout}>
                <Row gutter={24}>
                    <Col xs={24} sm={8}>
                        <Form.Item label="用户名">
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名' }],
                                initialValue: tableRecordData.username
                            })(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Form.Item label="登录id">
                            {getFieldDecorator('loginid', {
                                rules: [{ required: true, message: '请输入登录id' }],
                                initialValue: tableRecordData.loginid
                            })(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Form.Item label="手机号">
                            {getFieldDecorator('phone', {
                                rules: [
                                    { required: true, message: '请输入手机号' },
                                    { pattern: /^1\d{10}$/, message: '手机号格式不正确', }],
                                    initialValue: tableRecordData.phone
                            })(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col xs={24} sm={8}>
                        <Form.Item label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [
                                    { required: true, message: '请输入邮箱' }],
                                    initialValue: tableRecordData.email
                            })(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Form.Item label="用户类型">
                            {getFieldDecorator('user_type', {
                                rules: [
                                    { required: true, message: '请选择用户类型' }],
                                    initialValue: tableRecordData.user_type
                            })(<Select placeholder="请选择">
                                {user_type.map(type => (
                                    <Option value={type.id} key={type.id}>
                                      {type.description}
                                    </Option>
                                ))}
                            </Select>)}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Form.Item label="用户状态">
                            {getFieldDecorator('status', {
                                rules: [
                                    { required: true, message: '请选择用户状态' }],
                                    initialValue: tableRecordData.status
                            })(<Select placeholder="请选择">
                                {user_status.map(status => (
                                    <Option value={status.id} key={status.id}>
                                      {status.description}
                                    </Option>
                                ))}
                            </Select>)}
                        </Form.Item>
                    </Col>
                </Row>

                <Row type='flex' justify='center'>
                    <Col xs={{span: 6}} sm={{span: 3}}>
                        <Button type='danger' onClick={this.handleReSetForm}>重置</Button>
                    </Col>
                    <Col xs={{span: 6}} sm={{span: 3}}>
                        <Button type='primary' onClick={this.handleSubmitBtn} loading={submitting}>提交</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
export default UserAddPage;