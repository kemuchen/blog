/**
 * 简单下拉框组件
 * @author kl
 * @description -- 用于基本的表单查询、编辑场景
 * @date -- 2020/05/07
 */

import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

// 页面级定义变量
const { Option } = Select;

class SimpleSelect extends React.Component {

    // 定义传入属性
    static propTypes = {
        idKey: PropTypes.string,  // 下拉框节点对应的id名称,默认为:selectCode
        nameKey: PropTypes.string,  // 下拉框节点对应的name名称,默认为:selectName
        placeholder: PropTypes.string,  // 下拉框的提示信息,默认为:"请选择"
        dataList: PropTypes.array,  // 下拉框要展示的数据列表,格式为:[{selectCode:'A100',selectName:'小米手机'}]
    }

    // 定义传入属性的默认值
    static defaultProps = {
        idKey: 'selectCode',
        nameKey: 'selectName',
        placeholder: '请选择',
        dataList: [],
    }

    render() {
        const {
            idKey,
            nameKey,
            dataList,
            placeholder,
            ...restProps
        } = this.props;
        return (
            <Select
                placeholder={placeholder}
                width='100%'
                {...restProps}
            >
                {
                    Array.isArray(dataList) && dataList.length !== 0 && dataList.map((item) => {
                        return <Option key={item[idKey]} value={item[idKey]}>{item[nameKey]}</Option>;
                    })
                }
            </Select>
        );
    }
}
export default SimpleSelect;