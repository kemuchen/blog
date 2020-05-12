/**
 * 列表数据展示类-下拉框类组件样例
 * @author kl
 * @date 2020/05/07
 */

import React from 'react';
import { connect } from 'dva';
import { Card, Row, Col, Form, Alert } from 'antd';
import SimpleSelect from '@/components/common/SimpleSelect';
import CascaderSelect from '@/components/common/CascaderSelect';
import AntdIconSelect from '@/components/common/AntdIconSelect';
import { GridContent } from '@ant-design/pro-layout';


const { Item } = Form;

@connect(({ listShow }) => ({
    data: listShow.data,
    treeData: listShow.treeData,
}))
class SelectPage extends React.Component {

    state = {
        selectedName: [],
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'listShow/handleToTree',
        });
    }

    renderSelectMessage = () => {
        const { selectedName } = this.state;
        return `已选中：${selectedName.join(',')}`;
    }

    handleChangeSelect = (value, option) => {
        if (option.length > 0) {
            // 说明数据被选中
            const valueArr = option.map((item) => {
                return item.props.children;
            });
            this.setState({ selectedName: valueArr });
        } else {
            this.setState({ selectedName: [] });
        }
    }

    render() {
        const { selectedName } = this.state;
        const { data, treeData } = this.props;
        return (
            <GridContent>
                <Form layout='vertical'>
                    <Card>
                        <Row gutter={24} >
                            <Col span={8}>
                                <Card
                                    type='inner'
                                    title='Select 组件'
                                    style={{ borderTop: '1px solid #e8e8e8' }}
                                    size='small'
                                >
                                    {
                                        selectedName.length > 0 && <Alert message={this.renderSelectMessage()} type="success" showIcon />
                                    }
                                    <Item label='系统工具' style={{ marginTop: '1%' }}>
                                        <SimpleSelect
                                            dataList={data}
                                            idKey='id'
                                            nameKey='name'
                                            mode='multiple'
                                            onChange={this.handleChangeSelect}
                                        />
                                    </Item>
                                </Card>

                            </Col>

                            <Col span={8}>
                                <Card
                                    type='inner'
                                    title='Cascader 组件'
                                    style={{ borderTop: '1px solid #e8e8e8' }}
                                    size='small'
                                >
                                    <Item label='系统工具' style={{ marginTop: '1%' }}>
                                        <CascaderSelect
                                            dataList={treeData}
                                            idKey='id'
                                            nameKey='name'
                                        />
                                    </Item>
                                </Card>
                            </Col>
                            
                            <Col span={8}>
                                <Card
                                    type='inner'
                                    title='Icon 选择组件'
                                    style={{ borderTop: '1px solid #e8e8e8', marginTop: '2%' }}
                                    size='small'
                                >
                                    <Item label='图标' style={{ marginTop: '1%' }}>
                                        <AntdIconSelect />
                                    </Item>
                                </Card>
                            </Col>

                        </Row>
                    </Card>
                </Form>
            </GridContent>
        )
    }
}

export default SelectPage;