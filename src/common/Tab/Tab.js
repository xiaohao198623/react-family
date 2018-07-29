import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import  './index.css'

export default class Tab extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <ul className={'tab'}>
                <li><Link to={'/'}> 首页</Link></li>
                <li><Link to={'/lesson'} >课程 </Link></li>
                <li><Link to={'/profile'} > 用户中心</Link></li>

                {/*第二种写法如下：*/}
                {/*<li> <NavLink to={'/'}>首页</NavLink> </li>*/}
                {/*<li> <NavLink to={'/lesson'}>课程</NavLink> </li>*/}
                {/*<li> <NavLink to={'/profile'}>用户中心</NavLink> </li>*/}
            </ul>
        )
    }
}
