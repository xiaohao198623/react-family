import React, {Component} from 'react'
import './header.css'
//引用路由()
///withRouter是一个高级组件，使用它之后，可以多出来3个属性：history , match ,location。路由组件中无须使用它包裹组件；只有非路由组件，跳转的时候才需要使用它
import { withRouter } from 'react-router-dom'
//引用redux
import {connect} from 'react-redux'
import actions from "../store/actions/home";
@connect(state => ({...state.home}), actions)
    @withRouter
export default class Header extends Component {
    // constructor() {
    //     super()
    // }
    returnFun=()=>{
        this.props.history.go(-1)
        //this.props.history.goBack()
    }
    render() {
        return (
            <div className={'my-header'}>
                <i className={'iconfont icon-fanhui'} onClick={this.returnFun}></i>
                { this.props.children }
            </div>
        )
    }
}

//第二种写法
// export default withRouter(Header)