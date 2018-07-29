//一个页面一个reducer：存放初始状态，switch && case改变状态
import * as Types from '../action-types'
let initState={
    userInfo:{}
}
function session(state=initState, action) {
    switch (action.type){
        case Types.SET_USER_INFO:
            console.log('SET_USER_INFO')
            return {
                ...state,
                userInfo:action.payload
            }
        case Types.CLEAR_ERR:
            console.log('CLEAR_ERR')
            console.log(action.info)
            return{
                ...state,
                userInfo:action.info
            }
        default:{
            return state
        }


    }
}
export default session