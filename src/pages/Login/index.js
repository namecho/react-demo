import React, { Component, createRef } from 'react';
import { Form, Input, Checkbox, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import CSS from './index.module.scss'
import auth from '../../utils/auth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.formRef = createRef()
  }
  render() {
    return (<div className={CSS['login']}>
      <div className={CSS['wrap']}>
        <h1>宇宙管理系统登录</h1>
        <Form ref={el => this.formRef = el} onFinish={(data) => { this.login(data) }}>
          <Form.Item
            rules={[{ required: true, message: '请输入用户名' }]}
            name="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "请输入密码" }]}
            name="password">
            <Input autoComplete="off" type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <div className={CSS['action']}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住账号</Checkbox>
              </Form.Item>
              <a href="/login">忘记密码</a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={this.state.loading}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>);
  }

  login(data) {
    this.setState({
      loading: true
    }, () => {
      this.timer = setTimeout(() => {
        if (data.username === 'admin' && data.password === 'admin') {
          message.success('登录成功')
          // 重置
          this.formRef.resetFields()
          auth.set(data.username)
          this.props.history.push('/index')
        } else {
          message.error('用户名或密码错误')
          this.formRef.resetFields(['password'])
          this.setState({ loading: false })
        }
      }, 500);
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }
}

export default Login;