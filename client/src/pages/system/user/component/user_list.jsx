import React from 'react'
import {Button, Divider, Dropdown, Icon, Menu, message, Modal, Table} from 'antd'
import UserSearchPage from './user_serach'
import {connect} from 'dva'
import Constants from '@/utils/global/constants'

@connect(({user, loading }) => ({
    loading: loading.effects['user/handleListData'],
    listData: user.listData,
    pagination: user.pagination,
    message: user.message,
    searchAdvanceStatus: user.searchAdvanceStatus,
    searchStatus: user.searchStatus,
    dealStatus: user.dealStatus,
    searchParams: user.searchParams
}))
class UserListPage extends React.Component {
    state = {
        selectedCount: 0,//被选中的条数
        selectedRowKeys: [],//被选中的表格数据id集合
    };

    componentDidMount() {
        //初始化拉取表格数据
        this.handleGetListData();
    }
    
    //获取基本数据列表
    handleGetListData = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'user/handleListData',
            payload: {pageSize: Constants.PAGE_SIZE, current: Constants.CURRENT, valid: Constants.VALID}, //page、current都表示当前页，但是laravel框架需要用page
        });
    };

    //分页改变
    handlePaginationChange = (pagination) => {
        const {dispatch, searchParams} = this.props;
        const params = {
            current: pagination.current,
            pageSize: pagination.pageSize,
            ...searchParams,
        };
        dispatch({
            type: 'user/handleListData',
            payload: {
                valid: Constants.VALID,
                ...params,
            }
        });
    };

    //编辑
    handleTableRecordData = (record) => {
        const {dispatch} = this.props;
        dispatch({
            type: 'user/show',
            payload: {
                tabActiveKey: '3',
                tableRecordData: record,
            },
        });
    };

    //删除
    handleDelTableRecord = (id, username) => {
        const {dispatch} = this.props;
        const userNameHtml = <span>您确定要删除 <span style={{color: 'blue'}}>{username} </span>吗？</span>;
        Modal.confirm({
            title: userNameHtml,
            content: '一旦删除，数据将无法恢复，请慎重操作',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                dispatch({
                    type: 'user/handleDelData',
                    payload: [id],
                    callback: () => {
                        //重新加载数据
                        this.handleGetListData();
                    }
                });
            },
            onCancel() {
            }
        })
    };

    //批量删除
    handleDelsTableRecord = () => {
        const {dispatch} = this.props;
        const ids = this.state.selectedRowKeys;//数组
        if (ids.length == 0) {
            message.info("请选择要删除的用户", 3);
            return;
        }
        Modal.confirm({
            title: '您确定要删除被选中的用户吗？',
            content: '一旦删除，数据将无法恢复，请慎重操作',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                dispatch({
                    type: 'user/handleDelData',
                    payload: ids,
                    callback: () => {
                        // 重新加载数据
                        this.handleGetListData();
                        //将被选中重置为0
                        this.setState({selectedCount: 0});
                    }
                });
            },
            onCancel() {
            }
        })
    };

    //操作
    handleTableOperation = ({key}, record) => {
        //key=1 删除 ，key=2 分配角色 ，key=3 分配权限
        if (key === '1') this.handleDelTableRecord(record.id, record.username);
    };

    menu = (record) => (
        <Menu onClick={(key) => {
            this.handleTableOperation(key, record)
        }}>
            <Menu.Item key="1">
                <a href="#">删 除</a>
            </Menu.Item>

            <Menu.Item key="2">
                <a href="#">分配角色</a>
            </Menu.Item>

            <Menu.Item key="3">
                <a href="#">分配权限</a>
            </Menu.Item>
        </Menu>
    );
    
    //表头
    columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        render: (e) => (
            <a href="#">{e}</a>
        ),
    }, {
        title: '用户类型',
        dataIndex: 'user_type',
    }, {
        title: '手机号码',
        dataIndex: 'phone',
    }, {
        title: '邮箱',
        dataIndex: 'email',
    }, {
        title: '创建时间',
        dataIndex: 'create_time',
    }, {
        title: '用户状态',
        dataIndex: 'status',
    },  {
        title: '是否有效',
        dataIndex: 'valid',
    }, {
        title: '操作',
        render: (e, record) => (
            <div>
                <a onClick={() => this.handleTableRecordData(record)}>编辑</a>
                <Divider type='vertical'/>
                <Dropdown overlay={() => this.menu(record)}>
                    <a href="#">
                        更多<Icon type="down"/>
                    </a>
                </Dropdown>
            </div>
        )
    }];

    //多选
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            this.setState({
                selectedCount: selectedRowKeys.length,
                selectedRowKeys: selectedRowKeys,
            });
            //注：selectedRow只能拿到当前页所选择的数据，selectedRowKeys可以同时拿到多页的id
        },
    };

    render() {
        const {loading, pagination, listData} = this.props;
        const {selectedCount} = this.state;

        //分页配置
        const paginationParams = {
            pageSize: pagination.pageSize,
            total: pagination.total,
            current: pagination.current,
        };

        return (
            <div style={{paddingRight: '1%', paddingLeft: '1%'}}>
                {
                    <UserSearchPage/>
                }
                {
                    <div style={{marginBottom: '1%'}}>
                        <Button style={{fontWeight: '700'}} type='danger'
                                onClick={this.handleDelsTableRecord}>批量删除({selectedCount})</Button>
                        <Button style={{marginRight: '1%', marginLeft: '1%', fontWeight: '700'}}
                                type='dashed'>分配角色({selectedCount})</Button>
                    </div>
                }
                <Table
                    dataSource={listData}
                    columns={this.columns}
                    rowSelection={this.rowSelection}
                    rowKey="id"
                    loading={loading}
                    pagination={paginationParams}
                    onChange={this.handlePaginationChange}
                />
            </div>
        );
    }
}

export default UserListPage;