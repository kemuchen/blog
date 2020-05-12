/**
 * 超级实用树形组件
 * @author kl
 * @description 用于文件夹、组织架构、生物分类、国家地区等等
 * @date 2020/05/06
 */

import React from 'react';
import { Tree, Card, Input, Spin } from 'antd';
import PropTypes from 'prop-types';
import treeUtils from '@/utils/common/treeUtils';
import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

// 页面级定义变量
const { TreeNode } = Tree;
const { Search } = Input;

class SuperTree extends React.Component {

  // 定义传入属性
  static propTypes = {
    idKey: PropTypes.string,  // 树节点对应的id名称,默认为:key
    nameKey: PropTypes.string,  // 树节点对应的name名称,默认为:title
    hasChildKey: PropTypes.string,   // 树节点是否有子级的id名称,即判断树节点是否为叶子节点,默认为:isLeaf
    childListKey: PropTypes.string,  // 树节点的子集列表的id名称,默认为:children

    handleLoadData: PropTypes.func,  // 展开树节点异步加载其子节点的回调函数
    handLeOnSelect: PropTypes.func,  // 选中树节点执行的回调函数
    isBindSelectAndExpand: PropTypes.bool,  // 是否将"选中"、"展开"绑定,--展开即绑定,绑定即展开

    rightClick: PropTypes.bool,  // 是否支持右键操作
    rightClickMenu: PropTypes.func,   // 右键展示菜单,配合rightClick使用

    showSearch: PropTypes.bool,   // 是否支持搜索
    searchPlaceholder: PropTypes.string,   // 搜索的placeholder提示语
    searchMatcher: PropTypes.func,     // 搜索的匹配条件
    showSearchLoading: PropTypes.bool,     // 是否显示loading加载效果
    showSearchPoint: PropTypes.bool,       // 是否显示"<="指向

    title: PropTypes.string,     // 标题

    dataList: PropTypes.array,  // 要展示的数据列表,格式为:[{ title: '河南', key: 'A100', children: [{ title: '郑州', key: 'A1001' }] }]
  }

  // 定义传入属性的默认值
  static defaultProps = {
    idKey: 'key',
    nameKey: 'title',

    hasChildKey: 'isLeaf',  // 作用:是否能进行展开操作,即树节点前是否有“▶️”图标;它是也是触发异步加载的入口
    childListKey: 'children',
    isBindSelectAndExpand: true,

    rightClick: false,
    rightClickMenu: null,

    title: '部门组织架构',

    showSearch: true,
    searchPlaceholder: '请输入搜索关键字',
    searchMatcher: (searchValue, node, props) => {
      const { nameKey } = props;
      return node[nameKey].indexOf(searchValue) >= 0;
    },
    showSearchLoading: true,
    showSearchPoint: true,

    dataList: [],
    // dataList: [{ title: '河南', key: 'A100', children: [{ title: '郑州', key: 'A1001' }] }, { title: '上海', key: 'B1001', isLeaf: true }]
  }

  state = {
    expandedKeys: [],   // 展开的树节点idKey
    selectedKeys: [],   // 选中的树节点idKey

    searchValue: null,   // 搜索的关键字
    searchLoading: false,  // 由于是前端搜索,不存在服务器请求接口时间,只存在render渲染时间。为了优化体验,故模拟loading加载

    autoExpandParent: true,
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
      this.setState({ expandedKeys, selectedKeys: [expandedKey], autoExpandParent: false, });
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
          autoExpandParent: false,
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
   * 实时搜索功能函数
   * @param value -- 输入框的关键字 
   */
  onChange = (value) => {
    const { dataList, searchMatcher, childListKey, idKey, showSearchLoading } = this.props;
    const expandedKeys = [];
    treeUtils.forEach(dataList, childListKey, (node, parentNode) => {
      if (value && searchMatcher(value, node, this.props)) {
        expandedKeys.push(node[idKey]);
      }
    });

    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,  // 搜索时autoExpandParent设置为true,手动展开时autoExpandParent设置为false
    });

    // 是否显示loading加载效果
    showSearchLoading && this.setState({ searchLoading: true }, () => {
      setTimeout(() => { this.setState({ searchLoading: false }); }, 150);
    });
  }


  /**
   * 渲染树节点NodeName函数
   * @param key -- 树节点的idKey对应的值
   * @param title -- 树节点的nameKey对应的值
   * @param currentNodeData -- 当前选中的树节点的数据信息
   */
  renderTitle = (key, title, currentNodeData) => {
    const { rightClick, rightClickMenu, showSearch, showSearchPoint } = this.props;
    const { searchValue } = this.state;

    // 添加搜索条件
    let index;
    if (searchValue) {
      index = title.indexOf(searchValue);
    }

    return (
      <div>
        {
          rightClick && typeof rightClickMenu === 'function' ? (
            <>
              <MenuProvider id={key}>
                {
                  showSearch && typeof index !== 'undefined' && index >= 0 ? (
                    <>
                      {title.substr(0, index)}
                      <span style={{ color: 'red' }}>{searchValue}</span>
                      {title.substr(index + searchValue.length)}
                      {showSearchPoint && <span style={{ color: 'blue' }}>{' <='}</span>}
                    </>
                  ) : <span>{title}</span>
                }
              </MenuProvider>
              {rightClickMenu(key, title, currentNodeData)}
            </>
          ) : (
              <>
                {
                  showSearch && typeof index !== 'undefined' && index >= 0 ? (
                    <>
                      {title.substr(0, index)}
                      <span style={{ color: 'red' }}>{searchValue}</span>
                      {title.substr(index + searchValue.length)}
                      {showSearchPoint && <span style={{ color: 'blue' }}>{' <='}</span>}
                    </>
                  ) : <span>{title}</span>
                }
              </>
            )
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
    const { dataList, showSearch, searchPlaceholder, title, ...restProps} = this.props;
    const { expandedKeys, selectedKeys, autoExpandParent, searchLoading } = this.state;

    return (

      <Card
        title={title}
        style={{ maxWidth: 300 }}
        size='small'
      >
        <Spin spinning={searchLoading}>
          {
            showSearch ? <Search placeholder={searchPlaceholder} onChange={e => this.onChange(e.target.value)} allowClear /> : null
          }
          <Tree
            loadData={this.loadData}
            onSelect={this.onSelect}
            onExpand={this.onExpand}
            autoExpandParent={autoExpandParent}
            selectedKeys={selectedKeys}
            expandedKeys={expandedKeys}
            {...restProps}
          >
            {this.renderTreeNodes(dataList)}
          </Tree>
        </Spin>
      </Card>

    );
  }
}

export default SuperTree;