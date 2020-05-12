import React from 'react'
import {Tabs, Card, Button } from 'antd'
import {connect} from 'dva'
import { GridContent } from '@ant-design/pro-layout';
import UserAddPage from './component/user_add'       
import UserListPage from './component/user_list'

const TabPane = Tabs.TabPane;
@connect(({user}) => ({
  tabActiveKey: user.tabActiveKey,
}))
class UserPage extends React.Component {

  handleTabsChange = (key) => {
    const {dispatch, tabActiveKey} = this.props;
    //改变tabs状态和清除tableRecordData
    dispatch({
        type: 'user/show',
        payload: {
            tabActiveKey: key,
            tableRecordData: [],
        },
    });
  };

  render() {
    const {tabActiveKey} = this.props;
    
    return (
      <GridContent>
        <Card style={{ marginTop: '10px' }}>
            <Tabs
                activeKey={tabActiveKey}
                onChange={this.handleTabsChange}
                tabBarGutter={-10}>
                <TabPane
                    tab={<Button type='primary' style={{fontWeight: '700'}}>用户列表</Button>}
                    key="1">
                    <UserListPage/>
                </TabPane>
                <TabPane
                    tab={<Button style={{fontWeight: '700'}}>新增用户</Button>}
                    key="2">
                    <UserAddPage/>
                </TabPane>
                {
                    tabActiveKey === '3' ? (
                        <TabPane
                            tab={
                                <Button type='dashed' style={{fontWeight: '700'}}>
                                    用户编辑
                                </Button>
                            }
                            key="3"
                            disabled>
                            <UserAddPage/>
                        </TabPane>
                    ) : null
                }
            </Tabs>
        </Card>
      </GridContent>
    );
  }
}
export default UserPage;
