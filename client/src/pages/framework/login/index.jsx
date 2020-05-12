import { Alert, Checkbox, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import styles from './style.less';
const { UserName, Password, Submit } = LoginComponents;

class Login extends Component {
  loginForm = undefined;
  state = {
    autoLogin: true,
  };
  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  /**
   * 提交登录
   */
  handleSubmit = (err, values) => {
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: { ...values },
      });
    }
  };

  /**
   * 渲染提示信息
   */
  renderMessage = content => (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );

  render() {
    const { userLogin = {}, submitting } = this.props;
    const { status, errmessage } = userLogin;
    const { autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <LoginComponents
          onSubmit={this.handleSubmit}
          onCreate={form => {
            this.loginForm = form;
          }}>
          {status === 'error' && this.renderMessage(errmessage)}
          <UserName name="loginid"/>
          <Password name="password"
            onPressEnter={e => {
              e.preventDefault();
              if (this.loginForm) {
                this.loginForm.validateFields(this.handleSubmit);
              }
            }}
          />
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              自动登录
            </Checkbox>
          </div>
          <Submit loading={submitting}>登录</Submit>
        </LoginComponents>
      </div>
    );
  }
}

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
