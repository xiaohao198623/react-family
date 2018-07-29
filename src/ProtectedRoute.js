//受保护的路由
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { isLogin  } from './api/home'
//引用路由()
///withRouter是一个高级组件，使用它之后，可以多出来3个属性：history , match ,location。路由组件中无须使用它包裹组件；只有非路由组件，跳转的时候才需要使用它
import { withRouter } from  'react-router-dom'
@withRouter
export default class ProtectedRoute extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        // console.log(this.props)
    }
    //页面路径为‘/lesson’时，会调用这个组件；
    async componentDidMount(){
        //发送ajax请求是否登录
        let {islogin}= await isLogin().then(function (response) {
            if(response.status===200){
                return response.json();
            }else{
                alert('服务器挂掉了')
            }
        })
        //如果没有登录，跳转到登录页面
        if(!islogin){
            this.props.history.push('/login')
        }
    }
    render(){
        //组件名称必须大写；否则报错
        let Comp=this.props.component
        return (

            <div>
                <Comp></Comp>
            </div>
        )
    }
}
