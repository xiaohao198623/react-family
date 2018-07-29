// import qs from 'qs'
let ajaxUrl=window.config.ajaxUrl
console.log(ajaxUrl)
//获取轮播图数据
function getSilders() {
    //最原始的fetch
    // fetch('api/loop', {method: "post"}).then(function (response) {
    //     // 转换为 JSON
    //     console.log("response")
    //     console.log(response)
    //     return response.json();
    // }).then(function (j) {
    //     console.log('获取到的数据是====');
    //     console.log(j);
    //     return j
    // });
    ////redux-promise的用法：可以将payload中的promise执行，执行后将内容放到action.payload中进行派发:{ type:SET_SLIDERS, patload:[{},{},{},{}] }
    return fetch('api/loop', {method: "post"})
}

//获取所有课程
function getLessons(offset, limit, type) {
    return fetch(`api/lesson/${offset}/${limit}/${type}`, {method: "get"})
}


//获取课程详情
function getDetail(id) {
    return fetch(`api/details/${id}`, {method: "get"})
}

//注册
function toReg(obj) {
    return fetch(`api/register`, {
        method: 'POST',
        dataType: 'json',
        //数据在form data
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // body: qs.stringify(obj)

        //数据在request payload
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}

//登录【请注意登录接口没有使用反向代理；为的是看服务器跟浏览器页面的ajax交互问题；（1）后台必须设置res.header('Access-Control-Allow-Origin', '*') 】
function toLogin(obj) {
    return fetch(ajaxUrl+`login`, {
    // return fetch(`api/login`, {
        method: 'POST',
        dataType: 'json',
        //数据在form data；后台不需要设置Access-Control-Allow-Headers
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // body: qs.stringify(obj)

        //数据在request payload；后台必须设置Access-Control-Allow-Headers；
        headers: {
            'Content-Type': 'application/json',
        },
        // fetch默认对服务端通过Set-Cookie头设置的cookie也会忽略，若想选择接受来自服务端的cookie信息，也必须要配置credentials选项；
        credentials:'include',
        //数据默认是在request payload中（如果没有设置上面2个的话）；后台不需要设置Access-Control-Allow-Headers
        body: JSON.stringify(obj)
    })
}

//检验是否已经登录的接口
function isLogin() {
    return fetch(ajaxUrl+`isLogin`, {
        method: 'POST',
        dataType: 'json',
        //数据在form data；后台不需要设置Access-Control-Allow-Headers
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // body: qs.stringify(obj)

        //数据在request payload；后台必须设置Access-Control-Allow-Headers；
        headers: {
            'Content-Type': 'application/json',
        },
        // fetch默认对服务端通过Set-Cookie头设置的cookie也会忽略，若想选择接受来自服务端的cookie信息，也必须要配置credentials选项；
        credentials:'include',
    })
}


export {getSilders, getLessons, getDetail ,toLogin ,toReg ,isLogin}