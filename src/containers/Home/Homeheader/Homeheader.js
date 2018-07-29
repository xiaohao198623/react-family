import React, {Component} from 'react'
import logo from '../../../common/img/logo.png'
import './index.css'
import Transition from 'react-transition-group/Transition';

const duration = 10;
//默认样式
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display:'none'
}

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
};

export default class Homeheader extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }

    changeShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    selectLesson=(e)=>{
        //li元素，当前点击的元素是谁就是谁
        // console.log(e.target)
        // //整个ul元素。事件在谁身上绑着就是谁
        // console.log(e.currentTarget)
        // //获取h5 data属性
        // console.log(e.target.dataset.type)
        //隐藏元素
        this.changeShow()
        this.props.selectCurrentLesson({type:e.target.dataset.type , name:e.target.dataset.name})
    }

    render() {
        return (
            <div className={'home-header'}>
                <p>
                    <i onClick={this.changeShow} className={'iconfont icon-menu menu'}></i>
                    <img className={'logo'} src={logo} alt=""/>
                </p>
                <Transition in={this.state.isShow} timeout={duration} onEnter={(node)=>{
                    node.style.display='block'
                }}  onExited={(node)=>{
                    node.style.display='none'
                }}>
                    {(state) => (
                        <ul className={'menu-ul'} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                            onClick={(e)=>{
                                this.selectLesson(e)
                            }}
                        >
                            <li data-type="all" data-name="全部课程">全部课程</li>
                            <li data-type="react" data-name="react课程">react课程</li>
                            <li data-type="vue" data-name="vue课程">vue课程</li>
                        </ul>
                    )}
                </Transition>

            </div>
        )
    }
}
