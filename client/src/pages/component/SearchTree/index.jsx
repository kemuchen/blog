/**
 * 搜索树组件样例
 * @author kl
 * @date 2020/05/06
 */
import React from 'react';
import { message, Card, Row, Col, List } from 'antd';
import moment from 'moment';
import SearchTree from '@/components/common/SearchTree';
import { GridContent } from '@ant-design/pro-layout';

class SearchTreePage extends React.Component {

    state = {
        dataList: [
            { title: '阿发的萨达', key: '23132', children: [{ title: '让他玩', key: '153421', children: [{ title: '从自行车v', key: '154421' }] }] },
            { title: '同仁堂如何预防和', key: '153321', isLeaf: false },
            { title: '班次把你发的格式', key: '152723', },
        ],
        descList: [
            '1、支持关键词定位搜索功能',
            '2、支持后端模拟加载效果功能',
            '3、支持异步加载数据功能',
            '4、支持搜索关键字显示指示箭头功能',
            '5、支持选中和展开双向绑定功能',
            '6、支持Ant Design tree的api传入',
            '7、更多功能后续添加...'
        ]
    }

    /**
     * 异步加载数据
     * @description -- 真实开发项目中,数据应该从对应model获取后端的数据,为了方便演示,故取随机数据
     */
    handleLoadData = (node, callback) => {
        message.success(`您调用了节点名称: ${node.props.title},节点ID: ${node.props.eventKey} 的异步加载函数`, 3);

        const key = `${moment().format('HHmmss')}`;
        const title = `时分秒文件夹${moment().format('HHmmss')}`;
        const isLeaf = false;

        node.props.data.children = [{ title, key, isLeaf }];  // 给树节点的子节点随机添加数据

        const { dataList } = this.state;
        this.setState({
            dataList: [...dataList]
        });

        callback(); // 执行回调函数,如果不执行回调函数,说明Promise异步加载函数没有完成,树节点前的loading会一直出于加载状态
    }

    render() {
        const { dataList, descList } = this.state;

        return (
            <GridContent>
                <Card>
                    <Row type='flex' justify='space-around' >
                        <Col span={6}>
                            <List
                                header={<div>搜索树组件功能介绍</div>}
                                footer={<div><a href='https://www.yuque.com/yuxuanbeishui/zog1rm/bps3dk#B0OsR' target='_blank'>使用文档</a></div>}
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
                            <SearchTree
                                dataList={dataList}
                                handleLoadData={this.handleLoadData}
                                // showSearchLoading={false}
                                // showSearchPoint={false}
                                defaultExpandedKeys={['152245']}
                            />
                        </Col>

                    </Row>
                </Card>
            </GridContent>
        );
    }

}

export default SearchTreePage;