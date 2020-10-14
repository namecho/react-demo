import React from 'react'
import CSS from './index.module.scss'
export default class HeaderComponent extends React.Component {
    render() {
        return <div className={CSS['header-components']}>
            <h1>变电综合处理系统</h1>
            <div className={CSS['user-info']}>
                <span className={CSS['username']}>Admin</span>
                <span className={CSS['logout']}>退出</span>
            </div>
        </div>
    }
}