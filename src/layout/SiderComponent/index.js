import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom';

const { SubMenu, Item } = Menu
class SiderComponent extends React.Component {
    render() {
        return <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys="/"
            onSelect={e => this.menuSelect(e)}
        >
            <Item key="/">信息总览</Item>
            <SubMenu key="/system" title="系统信息">
                <Item key="/system/log">系统日志</Item>
                <Item key="/system/config">系统配置</Item>
                <Item key="/system/status">运行状态</Item>
            </SubMenu>
        </Menu >
    }

    menuSelect(data) {
        this.props.history.push(data.key)
    }
}

export default withRouter(SiderComponent)
