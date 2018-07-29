//一个页面一个reducer：存放初始状态，switch && case改变状态
import * as Types from '../action-types'
let initState={
    currentLesson:{
        type:'all',
        name:'全部课程'
    },
    currentLessonName:'全部课程',
    slider:[],
    lessonList:{
        list:[],
        hasmore:true,
        //偏移量
        offset:0,
        //每次获取条数
        limit:5,
        //当前是否正在加载中
        isLoading:false,
    }
}
function home(state=initState, action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {
                ...state,
                currentLesson:action.lesson
            }
        case Types.SET_SLIDERS:
            return {
                ...state,
                slider:action.payload
            }
        case Types.GET_LESSON:
            return {
                ...state,
                lessonList:{
                    ...state.lessonList,
                    //第一种写法：concat连接
                    // list: state.lessonList.list.concat(action.payload.list) ,
                    //第2种写法：...展开运算符
                    list: [...state.lessonList.list,...action.payload.list] ,
                    offset:action.payload.offset,
                    hasmore:action.payload.hasmore,
                    isLoading:false,
                }
            }
        case Types.CHANGE_LOADING_STATE:
            return {
                ...state,
                lessonList:{
                    ...state.lessonList,
                    isLoading:action.state
                }
            }
        case Types.INIT_LESSON_STATE:
            return {
                ...state,
                lessonList:{
                    ...state.lessonList,
                    offset:0,
                    list:[],
                    hasmore:true
                }
            }
        default:{
            return state
        }


    }
}
export default home