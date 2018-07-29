import React, {Component} from 'react'
import './index.css'
import bg from '../../common/img/bg.png'
import userbg from '../../common/img/user.png'
import Header from "../../components/Header";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


@connect(state => ({...state.session}),)
export default class Profile extends Component {
    // constructor(){
    //     super()
    // }
    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Header>用户界面</Header>
                <img src={bg} className={'bg'} alt=""/>
                <img src={userbg} className={'user-bg'} alt=""/>
                <p className={'login-text'}>
                    {
                        this.props.userInfo.user ? this.props.userInfo.user :
                            <Link to={'/login'}> 登录</Link>
                    }
                </p>
                <ul>
                    <li>我的课程</li>
                    <li>我的课程</li>
                    <li>我的课程</li>
                    <li>我的课程</li>
                </ul>
            </div>
        )
    }
}
