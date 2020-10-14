import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import CSS from './app.module.scss'
import { Layout } from 'antd';
import HeaderComponent from './layout/HeaderComponent'
import SiderComponent from './layout/SiderComponent'

import Home from './pages/Home'
import Log from './pages/System/Log'
import Config from './pages/System/Config'
import Status from './pages/System/Status'

const { Header, Sider, Content } = Layout


export default class App extends React.Component {
    render() {
        return (<HashRouter>

            <Layout className={CSS.layout}>
                <Header style={{ padding: 0 }}>
                    <HeaderComponent />
                </Header>
                <Layout>
                    <Sider>
                        <SiderComponent />
                    </Sider>
                    <Content>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/config/log" component={Log}></Route>
                            <Route exact path="/config/config" component={Config}></Route>
                            <Route exact path="/config/status" component={Status}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>

        </HashRouter>)
    }
}