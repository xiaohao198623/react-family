import React,{Component} from 'react'
import './loading.css'

export default class Loading extends Component{
    // constructor(){
    //     super()
    // }
    componentWillMount(){
        // console.log('loading')
        // console.log(this.props)
    }
    render(){
        return (
            <div className={'loading-wrap'}>
                <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034917143.gif" alt=""/>
            </div>
        )
    }
}