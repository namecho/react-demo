import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import SiderComponent from './SiderComponent'
import Home from '../pages/Home'

import Log from '../pages/System/Log'
import Config from '../pages/System/Config'
import Status from '../pages/System/Status'
import CSS from './index.module.scss'

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout

class LayoutComponent extends Component {
  render() {
    return (
      <Layout className={CSS.layout}>
        <Header style={{ padding: 0 }}>
          <HeaderComponent />
        </Header>
        <Layout>
          <Sider>
            <SiderComponent></SiderComponent>
          </Sider>
          <Content>
            <Switch>
              <Route exact path="/index" component={Home}></Route>
              <Route path="/system">
                <Route exact path="/system/log" component={Log}></Route>
                <Route exact path="/system/config" component={Config}></Route>
                <Route exact path="/system/status" component={Status}></Route>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;
