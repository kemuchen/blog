/**
 * 联级下拉框组件
 * @author kl
 * @description -- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等
 * @date -- 2020/05/07
 */

import React from 'react';
import { Cascader } from 'antd';
import PropTypes from 'prop-types';


class CascaderSelect extends React.Component {

    // 定义传入属性
    static propTypes = {
        idKey: PropTypes.string,  // 下拉框节点对应的id名称,默认为:selectCode
        nameKey: PropTypes.string,  // 下拉框节点对应的name名称,默认为:selectName
        childListKey: PropTypes.string,  // 下拉框节点的子集的id名称,默认为:subList
        placeholder: PropTypes.string,  // 下拉框的提示信息,默认为:"请选择"
        dataList: PropTypes.array, // 下拉框要展示的数据列表,格式为:
        // [{selectCode:'A100',selectName:'河南',subList:[{selectCode:'A1001',selectName:'郑州'}]},{selectCode:'A101',selectName:'上海'}] 
    }

    // 定义传入属性的默认值
    static defaultProps = {
        idKey: 'selectCode',
        nameKey: 'selectName',
        childListKey: 'subList',
        placeholder: '请选择',
        dataList: [],
        // dataList: [
        //     { selectCode: 'A100', selectName: '河南', subList: [{ selectCode: 'A1001', selectName: '郑州' }] },
        //     { selectCode: 'A101', selectName: '上海' },
        // ]
    }

    render() {
        const {
            idKey,
            nameKey,
            childListKey,
            dataList,
            placeholder,
            ...restProps  // 放到最后一个位置,且其后不能加','
        } = this.props;
        return (
            <Cascader
                placeholder={placeholder}
                options={dataList}
                fieldNames={{ value: idKey, label: nameKey, children: childListKey }}  // 替换字段
                displayRender={label => label.join('-')} // 名称之间的连接符
                changeOnSelect  // 点选每级菜单选项值都会发生变化
                showSearch  // 在选择框中显示搜索框
                width='100%'
                {...restProps}
            />

        );
    }
}

export default CascaderSelect;