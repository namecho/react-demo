import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
const { SubMenu, Item } = Menu

class SiderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys: [this.props.location.pathname],
            openKeys: this.props.location.pathname.split('/').map(val => '/' + val),
        }
    }

    componentDidMount() {
        this.historyListen = this.props.history.listen(route => {
            this.setState({
                selectedKeys: [route.pathname],
                openKeys: route.pathname.split('/').map(val => '/' + val),
            })
        })
    }

    render() {
        return <Menu
            mode="inline"
            theme="dark"
            selectedKeys={this.state.selectedKeys}
            openKeys={this.state.openKeys}
            onSelect={e => this.menuSelect(e)}
            onOpenChange={(e) => this.onOpenChange(e)}
        >
            <Item key="/index">信息总览</Item>
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

    onOpenChange(type) {
        this.setState({
            openKeys: type
        })
    }

    componentWillUnmount() {
        this.historyListen()
    }
}

export default withRouter(SiderComponent)
