import React, { Component, Suspense } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { Timeline, Tabs, Card, Avatar } from 'antd';
import { connect } from 'dva';
import style from './Guid.less';
import PageLoading from '@/components/PageLoading';

const { Meta } = Card;
const TabPane = Tabs.TabPane;

class Guid extends Component {
    render() {
        return (
            <GridContent>
                <Card>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="站长推荐" key="1">
                            
                        </TabPane>
                    </Tabs>
                </Card>
                <Card style={{marginTop: 10}}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="优秀个人博客" key="1">
                            
                        </TabPane>
                    </Tabs>
                </Card>
            </GridContent>
        );
    }
}

export default Guid;