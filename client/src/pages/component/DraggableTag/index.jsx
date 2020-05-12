/**
 * Tag组件用法展示及api介绍
 * @author kl
 * @description -- 进行标记和分类的小标签展示及排序
 * @date -- 2020/05/06
 */

import React from 'react';
import { connect } from 'dva';
import { message, Card, Row, Col, Button, List, } from 'antd';
import DraggableTag from '@/components/common/DraggableTag';
import { GridContent } from '@ant-design/pro-layout';

@connect(({ draggable }) => ({
    items: draggable.items,
    backupItems: draggable.backupItems,
}))
class DraggableTagPage extends React.Component {

    state = {
        draggable: false,  // 默认不排序
        descList: [
            '1、支持排序、非排序两种状态切换',
            '2、支持还原排序功能',
            '3、支持保存排序功能',
            '4、更多功能后续添加...'
        ]
    }

    // 排序状态
    handleSortStatus = () => {
        const { draggable } = this.state;
        this.setState({
            draggable: !draggable,
        }, () => {
            const { draggable } = this.state;
            const { items } = this.props;
            if (!draggable) {
                // 保存
                message.success(items.map(item => `${item.name} `), 3);
            }
        });

    }

    // 排序函数
    handleSortTags = ({ newIndex, oldIndex }) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'draggable/fetchSortTags',
            payload: {
                newIndex,
                oldIndex,
            },
        });
    }

    // 还原
    handleResetTags = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'draggable/fetchResetTags',
        });
    }

    // 渲染extra
    renderExtra = () => {
        const { draggable } = this.state;
        return draggable ? (
            <span>
                <Button size='small' style={{ marginRight: 4 }} onClick={this.handleResetTags}>还原</Button>
                <Button size='small' type='primary' onClick={this.handleSortStatus}>保存</Button>
            </span>
        ) : (
                <span>
                    <Button size='small' type='primary' onClick={this.handleSortStatus}>排序</Button>
                </span>
            );
    }

    render() {
        const { draggable, descList } = this.state;
        const { items } = this.props;
        return (
            <GridContent>
                <Card>
                    <Row type='flex' justify='space-around'>
                        <Col span={6}>
                            <List
                                header={<div>Tag拖动组件功能介绍</div>}
                                footer={<div><a href='https://www.yuque.com/yuxuanbeishui/zog1rm/ah2fsa' target='_blank'>使用文档</a></div>}
                                bordered
                                dataSource={descList}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={10}>
                            <Card
                                title='公司部门'
                                type='inner'
                                size='small'
                                style={{ overflowY: 'auto', borderTop: '1px solid #e8e8e8' }}
                                extra={this.renderExtra()}
                            >
                                <DraggableTag
                                    items={items}
                                    draggable={draggable}
                                    axis='xy'
                                    onSortEnd={this.handleSortTags}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </GridContent>
        );
    }
}
export default DraggableTagPage;