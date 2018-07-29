import React, {Component} from 'react'
import './index.css'
import Homeheader from './Homeheader/Homeheader'
import {connect} from 'react-redux'
import HomeSlider from './HomeSlider'
import HomeLesson from './HomeLesson'
import Loading from '../../components/Loading'
import actions from '../../store/actions/home'
import {loadMore, pullRefresh} from '../../common/util'
//修饰符的用法待研究
@connect(state => ({...state.home}), actions)
export default class Home extends Component {
    // constructor(){
    //     super()
    // }
    componentWillMount() {
        if (this.props.slider.length === 0) {
            this.props.getSliderApi()
        }
        if (this.props.lessonList.list.length === 0) {
            this.props.getLessonApi()
        }
    }

    componentDidMount() {
        loadMore(this.ele, this.props.getLessonApi)
        pullRefresh(this.ele, this.refresh)
    }

    refresh = () => {
        this.props.initLessonApi()
    }


    //获取更多
    loadMoreFun = () => {
        this.props.getLessonApi()
    }


    render() {

        return (
            <div>
                <Homeheader selectCurrentLesson={this.props.updateCurrentLessonApi} initLessonFun={this.props.initLessonApi}  getLessonFun={this.props.getLessonApi}></Homeheader>
                <div ref={(x) => {
                    this.ele = x
                }} className={'wrap'}>

                    {/*//解决轮播图不出现的BUG*/}
                    {
                        this.props.slider.length > 0 ? <HomeSlider lists={this.props.slider}></HomeSlider> :
                            <Loading></Loading>
                    }
                    <p className={'show-lesson'} onClick={this.props.getLessonApi}>
                        <i className={'iconfont icon-leibieguanli'}></i>
                        <span>{this.props.currentLesson.name}(点击可以获取下一页数据) </span>
                    </p>


                    <div className={'scroll-wrap'}>
                        <HomeLesson lists={this.props.lessonList.list}></HomeLesson>
                        {
                            this.props.lessonList.isLoading ? <Loading></Loading> : null
                        }
                        {
                            this.props.lessonList.hasmore ? null : <p>加载完毕</p>
                        }
                    </div>



                </div>
            </div>

        )
    }
}
