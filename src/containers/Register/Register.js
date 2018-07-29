import React, {Component} from 'react'
import './index.css'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import actions from '../../store/actions/session'



@connect(state => ({...state.session}), actions)
export default class Register extends Component {
    // constructor() {
    //     super()
    // }
    // componentWillMount(){
    //     console.log('this.props')
    //     console.log(this.props)
    // }
    //组件销毁的生命周期钩子
    componentWillUnmount(){
        this.props.clearErr()
    }
    regiserFun=()=>{
        let username=this.sername.value
        let password=this.sername.value
        if(username==='' || password===''){
            alert('用户名或者密码不能为空')
        }
        else{
            this.props.regiserFun({username ,password},this.props.history )
        }

    }
    render() {
        return (
            <div>
                <Header>注册</Header>
                <ul className={'login'}>
                    <li>
                        <label htmlFor="userName">用户名</label>
                        <input type="text" id={'username'} ref={(x)=>{ this.sername=x }}/>
                    </li>
                    <li>
                        <label htmlFor="password">密码</label>
                        <input type="text" id={'password'}  ref={(x)=>{ this.password=x }}/>
                    </li>
                    <li  className={'forget'}> <p className='error'>{ this.props.userInfo.msg }  </p></li>
                    <li><input type="button"  onClick={this.regiserFun} value={'注册'}/></li>
                </ul>
            </div>
        )
    }
}
