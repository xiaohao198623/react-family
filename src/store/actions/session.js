import * as Types from '../action-types'
//在action中调用api中封装的ajax方法
import { toReg , toLogin } from '../../api/home'
let actions={
    //注册：异步（ajax）
    regiserFun(obj,history){
        // redux-thunk
        return function (dispatch,getState) {
            //redux-promise的用法：可以将payload中的promise执行，执行后将内容放到action.payload中进行派发:{ type:SET_SLIDERS, patload:[{},{},{},{}] }
            dispatch({type:Types.SET_USER_INFO ,payload:toReg(obj,history).then(function (response) {
                    // 转换为 JSON
                    // console.log("response")
                    // console.log(response)
                    if(response.status===200){
                        return response.json();
                    }else{
                        alert('服务器挂掉了')
                    }
                }).then(function (j) {
                    // console.log('获取到的数据是====');
                    // console.log(j);
                    if(j.err===0){
                        setTimeout(()=>{
                            //清空redux的状态；
                            // dispatch(actions.clearErr())
                            history.push('./login')
                        },3000)
                    }
                    return j
                })})
        }
    },
    //登录：异步（ajax）
    loginFun(obj,history){
        // redux-thunk
        return function (dispatch,getState) {
            //redux-promise的用法：可以将payload中的promise执行，执行后将内容放到action.payload中进行派发:{ type:SET_SLIDERS, patload:[{},{},{},{}] }
            dispatch({type:Types.SET_USER_INFO ,payload:toLogin(obj,history).then(function (response) {
                    // 转换为 JSON
                    // console.log("response")
                    // console.log(response)
                    if(response.status===200){
                        return response.json();
                    }else{
                        alert('服务器挂掉了')
                    }
                }).then(function (j) {
                    if(j.err===0){
                        setTimeout(()=>{
                            //清空redux的状态；
                            // dispatch(actions.clearErr())
                            history.push('./profile')
                        },3000)
                    }
                    else{
                        alert(j.msg)
                    }
                    return j
                })})
        }
    },
    //同步
    clearErr(){
           return {
               type:Types.CLEAR_ERR,
               info:{}
           }

    }
}
export default  actions