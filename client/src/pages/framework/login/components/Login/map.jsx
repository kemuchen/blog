import { Icon } from 'antd';
import React from 'react';
import styles from './index.less';
export default {
  UserName: {
    props: {
      size: 'large',
      id: 'userName',
      prefix: <Icon type="user" className={styles.prefixIcon} />,
      placeholder: 'admin',
    },
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  Password: {
    props: {
      size: 'large',
      prefix: <Icon type="lock" className={styles.prefixIcon} />,
      type: 'password',
      id: 'password',
      placeholder: 'a',
    },
    rules: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
  }
};
