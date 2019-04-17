import React, { Component, Suspense } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { Timeline, Tabs, Card } from 'antd';
import { connect } from 'dva';
import style from './TimeAxle.less';
import PageLoading from '@/components/PageLoading';

const TabPane = Tabs.TabPane;
class TimeAxle extends Component {
    render() {
        return (
            <GridContent>
                <Card>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="往期文章" key="1">
                            <Timeline>
                                <Timeline.Item>遇见一个未知的你</Timeline.Item>
                                <Timeline.Item>【个人博客空间申请】金牛云服，免费领空间啦</Timeline.Item>
                                <Timeline.Item>双十一，阿里云特惠活动，快来领券啦</Timeline.Item>
                                <Timeline.Item>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</Timeline.Item>
                                <Timeline.Item>遇见一个未知的你</Timeline.Item>
                                <Timeline.Item>【个人博客空间申请】金牛云服，免费领空间啦</Timeline.Item>
                                <Timeline.Item>双十一，阿里云特惠活动，快来领券啦</Timeline.Item>
                                <Timeline.Item>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</Timeline.Item>
                                <Timeline.Item>遇见一个未知的你</Timeline.Item>
                                <Timeline.Item>【个人博客空间申请】金牛云服，免费领空间啦</Timeline.Item>
                                <Timeline.Item>双十一，阿里云特惠活动，快来领券啦</Timeline.Item>
                                <Timeline.Item>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</Timeline.Item>
                            </Timeline>
                        </TabPane>
                    </Tabs>
                </Card>
            </GridContent>
        );
    }
}

export default TimeAxle;
