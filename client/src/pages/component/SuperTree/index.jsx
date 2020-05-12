/**
 * 超级实用树形组件引用页
 * @author kl
 * @date 2020/05/06
 */
import React from 'react';
import { message, Icon } from 'antd';
import moment from 'moment';
import { Menu, Item, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import SuperTree from '@/components/common/SuperTree';
import { GridContent } from '@ant-design/pro-layout';
// import RightClickTree from '@/component/TreeComponent/RightClickTree';
// import SearchTree from '@/component/TreeComponent/SearchTree';

class SuperTreePage extends React.Component {

    state = {
        dataList: [
            { title: '集团1', key: 'hotel_group1', children: [{ title: '酒店1', key: 'hotel1'}, { title: '酒店2', key: 'hotel2'}, { title: '酒店3', key: 'hotel3'}]},
            { title: '集团2', key: 'hotel_group2', children: [{ title: '酒店4', key: 'hotel4'}]},
            { title: '文件夹152723', key: '152723', },
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


    /**
     * 右键点击Message提示函数
     * @param key -- 树节点的idKey对应的值
     * @param title -- 树节点的nameKey对应的值
     * @param operaName -- 当前右键操作的功能名称
     */
    rigthClickMessage = (key, title, operaName) => {
        message.success(`您右键选择了名称：${title}，ID：${key}，右键操作名称：${operaName}`, 4);
    }


    /**
     * 右键菜单组装函数
     * @param key -- 树节点的idKey对应的值
     * @param title -- 树节点的nameKey对应的值
     * @param currentNodeData -- 当前选中的树节点的数据信息
     */
    rightClickMenu = (key, title, currentNodeData) => {
        return (
            <Menu id={key} animation='flip'>
                <Item disabled>已选中:<span style={{ color: 'blue', fontWeight: 'bold' }}>{title}</span></Item>
                <Separator />

                <Item onClick={() => this.rigthClickMessage(key, title, '添加部门')}>
                    <span><Icon type="plus-circle" theme="twoTone" /> 添加部门</span>
                </Item>
                <Separator />

                <Item onClick={() => this.rigthClickMessage(key, title, '编辑部门')}>
                    <span><Icon type="edit" theme="twoTone" /> 编辑部门</span>
                </Item>
                <Separator />

                <Item onClick={() => this.rigthClickMessage(key, title, '删除部门')}>
                    <span><Icon type="delete" theme="twoTone" /> 删除部门</span>
                </Item>
                <Separator />

                <Item onClick={() => this.rigthClickMessage(key, title, '权限分配')}>
                    <span><Icon type="safety-certificate" theme="twoTone" /> 权限分配</span>
                </Item>
                <Separator />
            </Menu>
        );
    }


    render() {
        const { dataList } = this.state;

        return (
            <GridContent>
                <div style={{marginLeft:'20%'}}>
                    <SuperTree
                        title={'酒店集团信息'}
                        searchPlaceholder='请输入'
                        dataList={dataList}
                        handleLoadData={this.handleLoadData}
                        rightClick
                        rightClickMenu={this.rightClickMenu}
                    />
                </div>
            </GridContent>
        );
    }
}

export default SuperTreePage;