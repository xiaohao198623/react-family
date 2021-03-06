// ;路由懒加载
import React,{Component} from 'react'
export default function (fn) {
    return class HighOrderComponent extends Component{
        constructor(){
            super()
            this.state={
                component:null
            }
        }
        async componentDidMount(){
            //让导入后的结果执行，返回一个加载的组件
            let { default:C }=await fn()
            this.setState({
                component:C
            })
        }

        render(){
            let C=this.state.component
            return C? <C></C> : null

        }
    }
}
