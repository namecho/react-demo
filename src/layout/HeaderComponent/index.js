import React from 'react'
import { withRouter } from 'react-router-dom';
import CSS from './index.module.scss'
import { message, Popconfirm } from 'antd';
import auth from '../../utils/auth';

class HeaderComponent extends React.Component {
    render() {
        return <div className={CSS['header-components']}>
            <h1>变电综合处理系统</h1>
            <div className={CSS['user-info']}>
                <span className={CSS['username']}>Admin</span>
                <Popconfirm
                    placement="bottomRight"
                    title="是否退出登录"
                    okText="是"
                    cancelText="否"
                    onConfirm={() => { this.confirmLogout() }}
                >
                    <span className={CSS['logout']}>退出</span>
                </Popconfirm>
                {/* <span onClick={() => this.logout()} className={CSS['logout']}>退出</span> */}
            </div>
        </div>
    }

    confirmLogout() {
        auth.remove()
        message.success('退出成功')
        this.props.history.push('/login')
    }
}

export default withRouter(HeaderComponent)