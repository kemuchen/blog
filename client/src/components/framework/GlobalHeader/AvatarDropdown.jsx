import { Avatar, Icon, Menu, Spin } from 'antd';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class AvatarDropdown extends React.Component {
  onMenuClick = event => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    router.push(`/account/${key}`);
  };

  render() {
    const { currentUser } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {
          <Menu.Item key="center">
            <Icon type="user" />
            个人中心
          </Menu.Item>
        }
        {<Menu.Divider />}

        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.loginid ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avator} alt="avatar" />
          <span className={styles.name}>{currentUser.username}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

export default connect(({ login }) => ({
  currentUser: login.currentUser,
}))(AvatarDropdown);
