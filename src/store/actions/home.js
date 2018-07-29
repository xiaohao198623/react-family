import * as Types from '../action-types'
//在action中调用api中封装的ajax方法
import { getSilders ,getLessons } from '../../api/home'


let actions={
    //更新当前选择的课程（同步的时候）
    updateCurrentLessonApi(lesson){
        // return {
        //     type:Types.SET_CURRENT_LESSON,
        //     lesson
        // }
        return function (dispatch,getState) {
            dispatch({type:Types.INIT_LESSON_STATE})
            //还可以这么写（action中调用其他action）
            actions.initLessonApi()(dispatch,getState)
        }
    },
    //异步的时候
    getSliderApi(){
        // redux-thunk
        return function (dispatch,getState) {
            //redux-promise的用法：可以将payload中的promise执行，执行后将内容放到action.payload中进行派发:{ type:SET_SLIDERS, patload:[{},{},{},{}] }
            dispatch({type:Types.SET_SLIDERS ,payload:getSilders().then(function (response) {
                    // 转换为 JSON
                    // console.log("response")
                    // console.log(response)
                    if(response.status===200){
                        return response.json();
                    }else{
                        alert('服务器挂掉了')
                    }
                }).then(function (j) {
                    return j
                })})
        }
    },
    //获取课程
    getLessonApi(){
        // redux-thunk
        return function (dispatch,getState) {
            //请求时需要判断是否已经到了尾页;或者正在进行请求
            let {currentLesson,lessonList:{hasmore,offset,limit,isLoading}}=getState().home
            if(hasmore && !isLoading){
                //设置loading
                dispatch({type:Types.CHANGE_LOADING_STATE, state:true})
                //发送ajax
                dispatch({type:Types.GET_LESSON ,payload:getLessons(offset,limit,currentLesson.type).then(function (response) {
                        // 转换为 JSON
                        return  response.json();
                    }).then(function (j) {
                        // console.log('获取到的数据是====');
                        // console.log(j);
                        j.offset=offset+limit
                        return j
                    })})
            }
        }
    },
    //更改分页状态为0；重新获取当前课程的列表数据
    initLessonApi(){
        return function (dispatch,getState) {
            dispatch({type:Types.INIT_LESSON_STATE})
            //还可以这么写（action中调用其他action）
            actions.getLessonApi()(dispatch,getState)
        }

    }
}
export default  actions