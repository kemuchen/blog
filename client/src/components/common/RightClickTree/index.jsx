/**
 * 右键操作树形组件
 * @author kl
 * @description 用于文件夹、组织架构、生物分类、国家地区等等
 * @date 2020/05/06
 */

import React from 'react';
import { Tree, Card} from 'antd';
import PropTypes from 'prop-types';
import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

// 页面级定义变量
const { TreeNode } = Tree;

class RightClickTree extends React.Component {

  // 定义传入属性
  static propTypes = {
    idKey: PropTypes.string,  // 树节点对应的id名称,默认为:key
    nameKey: PropTypes.string,  // 树节点对应的name名称,默认为:title
    hasChildKey: PropTypes.string,   // 树节点是否有子级的id名称,即判断树节点是否为叶子节点,默认为:isLeaf
    childListKey: PropTypes.string,  // 树节点的子集列表的id名称,默认为:children

    handleLoadData: PropTypes.func,  // 展开树节点异步加载其子节点的回调函数
    handLeOnSelect: PropTypes.func,  // 选中树节点执行的回调函数
    isBindSelectAndExpand: PropTypes.bool,  // 是否将"选中"、"展开"绑定,--展开即绑定,绑定即展开

    title:PropTypes.string,  // 标题

    rightClick: PropTypes.bool,  // 是否支持右键操作
    rightClickMenu: PropTypes.func,   // 右键展示菜单,配合rightClick使用

    dataList: PropTypes.array,  // 要展示的数据列表,格式为:[{ title: '河南', key: 'A100', children: [{ title: '郑州', key: 'A1001' }] }]
  }

  // 定义传入属性的默认值
  static defaultProps = {
    idKey: 'key',
    nameKey: 'title',

    hasChildKey: 'isLeaf',  // 作用:是否能进行展开操作,即树节点前是否有“▶️”图标;它是也是触发异步加载的入口
    childListKey: 'children',
    isBindSelectAndExpand: true,

    title:'部门组织架构',

    rightClick: false,
    rightClickMenu: null,

    dataList: [],
    // dataList: [{ title: '河南', key: 'A100', children: [{ title: '郑州', key: 'A1001' }] }, { title: '上海', key: 'B1001', isLeaf: true }]
  }

  state = {
    expandedKeys: [],   // 展开的树节点idKey
    selectedKeys: [],   // 选中的树节点idKey
  }


  /**
   * 异步加载数据函数
   * @param node -- 当前根节点的数据信息
   * @description -- 每个树节点只会触发一次
   */
  loadData = node => {
    return new Promise(resolve => {
      if (node.props.children) {
        // 说明该树节点下有子节点,无需异步加载数据
        resolve();
        return;
      }
      // 需要异步加载该树节点的子节点
      const { handleLoadData } = this.props;
      if (typeof handleLoadData === 'function') {
        // 调用父组件的函数,异步加载数据
        handleLoadData(node, resolve);
      } else {
        resolve();
      }
    });
  }


  /**
   * 展开树节点执行函数
   * @param expandedKeys -- 展开的树节点的idKey,格式:['xxx','yyy']
   * @param expanded -- 是否展开,格式:bool
   * @param node -- 当前选中的【唯一】节点信息,可以通过node.props.data取值
   */
  onExpand = (expandedKeys, { expanded, node }) => {
    const { handLeOnSelect, idKey, isBindSelectAndExpand } = this.props;
    const nodeData = node.props.data;
    const expandedKey = nodeData[idKey];

    // 如果有handleOnSelect回调函数传入,则执行它
    if (typeof handLeOnSelect === 'function') {
      handLeOnSelect(nodeData);
    }

    //是否绑定"选中"和"展开"
    if (isBindSelectAndExpand) {
      this.setState({ expandedKeys, selectedKeys: [expandedKey] });
    } else {
      this.setState({ expandedKeys });
    }
  }


  /**
   * 选中树节点执行函数
   * @param selectedKeys -- 选中的树节点的idKey,格式:['xxx','yyy']
   * @param selected  -- 是否选中,格式:bool
   * @param selectedNodes  -- 选中的节点的node,格式:['xxx','yyy'],可以通过selectedNodes[0].props.data取值
   * @param node -- 当前选中的【唯一】节点信息,可以通过node.props.data取值
   */
  onSelect = (selectedKeys, { selected, selectedNodes, node }) => {
    const { idKey, handLeOnSelect, isBindSelectAndExpand } = this.props;
    const nodeData = node.props.data;

    // 如果有handleOnSelect回调函数传入,则执行它
    if (typeof handLeOnSelect === 'function') {
      handLeOnSelect(nodeData);
    }

    // 是否绑定"选中"和"展开"
    if (isBindSelectAndExpand) {
      const { expandedKeys } = this.state;
      const selectedKey = nodeData[idKey];
      if (expandedKeys.indexOf(selectedKey) === -1) {
        // 已经展开的expandedKeys中,如果没有该节点,则插入selectedKeys、expandedKeys
        this.setState({
          selectedKeys,
          expandedKeys: [...selectedKeys, ...expandedKeys],
        });
      } else {
        // 已经展开的expandedKeys中,如果有该节点,则只插入selectedKeys
        this.setState({ selectedKeys });
      }
    } else {
      this.setState({ selectedKeys });
    }
  }


  /**
   * 右键操作
   * @param key -- 树节点的idKey对应的值
   * @param title -- 树节点的nameKey对应的值
   * @param currentNodeData -- 当前选中的树节点的数据信息
   */
  renderTitle = (key, title, currentNodeData) => {
    const { rightClick, rightClickMenu } = this.props;
    return (
      <div>
        {
          rightClick && typeof rightClickMenu === 'function' ? (
            <>
              <MenuProvider id={key}>
                {
                  <span>{title}</span>
                }
              </MenuProvider>
              {rightClickMenu(key, title, currentNodeData)}
            </>
          ) : <span>{title}</span>
        }
      </div>
    );
  }


  /**
   * 逐级渲染树节点函数
   * @param data -- 树节点要展示的数据
   * @description -- 当前树节点中如果有“children”字段,会调用自身函数,直到仅有叶子结束
   */
  renderTreeNodes = data => {
    const {
      idKey,
      nameKey,
      hasChildKey,
      childListKey,
    } = this.props;
    return data.map(item => {
      if (item[childListKey]) {
        return (
          <TreeNode title={this.renderTitle(item[idKey], item[nameKey], item)} key={item[idKey]} data={item}>
            {this.renderTreeNodes(item[childListKey])}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          title={this.renderTitle(item[idKey], item[nameKey], item)}
          key={item[idKey]}
          data={item}
          isLeaf={item[hasChildKey] !== undefined ? item[hasChildKey] : true}  // 是否为可以展开,是否是叶子节点
        />
      );
    });
  }

  render() {
    const { dataList, title, ...restProps } = this.props;
    const { expandedKeys, selectedKeys} = this.state;

    return (
      <Card
        title={title}
        style={{ maxWidth: 300 }}
        size='small'
      >
        <Tree
          loadData={this.loadData}
          onSelect={this.onSelect}
          onExpand={this.onExpand}
          selectedKeys={selectedKeys}
          expandedKeys={expandedKeys}
          {...restProps}
        >
          {this.renderTreeNodes(dataList)}
        </Tree>
      </Card>
    );
  }
}

export default RightClickTree;