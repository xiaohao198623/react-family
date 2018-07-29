//加载更多；滑到地步的方法；ele表示需要加载更多的元素；cb表示加载到底部时执行的方法
function loadMore(ele, cb) {
    let canRun = true;
    //false表示是否捕获；
    ele.addEventListener('scroll', () => {
        if (!canRun) {
            // 判断是否已空闲，如果在执行中，则直接return
            return;
        }
        canRun = false;
        setTimeout(function () {
            // console.log("函数节流");
            canRun = true;
            //offsetHeight(元素的真实高度)  scrollTop（卷取的高度）  scrollHeight（元素的内容高度；内容高度大于元素高度时才会触发滚动事件）
            let { offsetHeight, scrollTop , scrollHeight}=ele
            //上拉加载
            if(offsetHeight+scrollTop+20>scrollHeight){
                // console.log('===========================')
                cb()
            }
        }, 300);
    })
}
//下拉刷新
function pullRefresh(ele, cb) {
    // let canRun = true;
    //false表示是否捕获；
    //touchstart //手指刚接触屏幕时触发
    // touchmove //手指在屏幕上移动时触发
    // touchend //手指从屏幕上移开时触发
    // 下面这个比较少用：
    // touchcancel //触摸过程被系统取消时触发
    let startY, distance=ele.offsetTop
    let touchStart=(e)=>{
        // console.log('===========================touchstart')
        //记录开始的位置
        startY=e.touches[0].pageY
        let { scrollTop , offsetTop }=ele
        if(scrollTop===0 &&  offsetTop===distance){
            ele.addEventListener('touchmove',touchMove)
            ele.addEventListener('touchend',touchEnd)
        }
    }
    let move
    let touchMove=(e)=>{
        // console.log('===========================touchMove')
        //移动的距离
        move=e.touches[0].pageY-startY
        if(move>0){
            //向下拉;最大可以拉80
            if(move>80){
                move=80
            }
            ele.style.top=move+distance+'px'
        }
        else{
            //向上拉；移除事件
            ele.addEventListener('touchmove',touchMove)
            ele.addEventListener('touchend',touchEnd)
        }
    }
    //抬起时清空事件
    let touchEnd=(e)=>{
        // console.log('===========================touchEnd')
        ele.removeEventListener('touchmove',touchMove)
        ele.removeEventListener('touchend',touchEnd)
        //让move再变成0
        if(move<80){
            return
        }
        else{
            let timer=setInterval(()=>{
                move-=2
                if(move<=0){
                    clearInterval(timer)
                }
                ele.style.top=move+distance+'px'
            },0)
            cb()
        }
    }
    ele.addEventListener('touchstart',touchStart, false)
}
export {loadMore ,pullRefresh}