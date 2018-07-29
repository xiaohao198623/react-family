import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//配置路由组件
import {HashRouter as Router,Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import './common/reset.css'
import ProtectedRoute from "./ProtectedRoute";
//下面的写法会直接打包，首页加载所有的页面
// import Home from './containers/Home/Home'
// import Profile from './containers/Profile/Profile'
// import Lesson from './containers/Lesson/Lesson'
// import Detail from './containers/Detail/Detail'
// import Register from './containers/Register/Register'
// import Login from './containers/Login/Login'
//代码分割，进入相应的路由时，才加载相应的JS文件;路由懒加载
import syncComponent from './SyncComponent'
let Home=syncComponent(()=> import('./containers/Home/Home'));
let Profile=syncComponent(()=> import('./containers/Profile/Profile'));
let Lesson=syncComponent(()=> import('./containers/Lesson/Lesson'));
let Detail=syncComponent(()=> import('./containers/Detail/Detail'));
let Register=syncComponent(()=> import('./containers/Register/Register'));
let Login=syncComponent(()=> import('./containers/Login/Login'));

//这里不能加大括号
// let Home=syncComponent(()=>{import('./containers/Home/Home')} );





ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact={true} component={Home}></Route>
                    {/*<Route path='/lesson' component={Lesson}></Route>*/}
                    {/*受保护的路由，*/}
                    <ProtectedRoute path='/lesson' component={Lesson}></ProtectedRoute>
                    <Route path={'/profile'} component={Profile}></Route>
                    <Route path={'/detail/:lessonid'} component={Detail}></Route>
                    <Route path={'/register'} component={Register}></Route>
                    <Route path={'/login'} component={Login}></Route>
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
