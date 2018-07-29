import React, {Component} from 'react'
import './index.css'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
@connect(state => ({...state.session}), actions)
export default class Login extends Component {
    componentWillMount(){
        //this.props中包含action中的方法
        console.log('this.props')
        console.log(this.props)
    }
    login = () => {
        let username=this.username.value
        let password=this.password.value
        if(username==='' || password===''){
            alert('用户名或者密码不能为空')
        }
        else{
            this.props.loginFun({username ,password},this.props.history )
        }
    }

    render() {
        return (
            <div>
                <Header>登录</Header>
                <ul className={'login'}>
                    <li>
                        <label htmlFor="userName">用户名</label>
                        <input type="text" id={'username'} ref={(x)=>{ this.username=x }}/>
                    </li>
                    <li>
                        <label htmlFor="password">密码</label>
                        <input type="text" id={'password'} ref={(x)=>{ this.password=x }}/>
                    </li>
                    <li  className={'forget'}> <p><Link to={'/register'}>注册</Link> </p></li>
                    <li><input type="button"  onClick={this.login} value={'登录'}/></li>
                </ul>
                {/*<input type="text" value={this.state.account}/>*/}
                {/*<input type="text" value={this.state.password}/>*/}
                {/*<input type="button" value={'按钮'} onClick={this.login}/>*/}
            </div>
        )
    }
}
