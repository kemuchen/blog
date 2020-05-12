/**
 * Ant Design Icon
 * @author kl
 * @description 网址:https://ant.design/components/icon-cn/
 * @date 2020/05/07
 */

import React from 'react';
import { Icon, Select } from 'antd';
import data from './antdIconList';

const { Option } = Select;


class AntDIconSelect extends React.Component {

  render() {
    const { ...restProps } = this.props;
    return (
      <Select
        placeholder='请选择图标'
        style={{ width: '100%', textAlign: 'center' }}
        showSearch
        allowClear
        {...restProps}
      >
        {
          data.map((value, key) => (
            <Option key={key} value={value}>
              <Icon type={value} key={key} /> {value}
            </Option>
          ))
        }
      </Select>
    )
  }
}

export default AntDIconSelect;