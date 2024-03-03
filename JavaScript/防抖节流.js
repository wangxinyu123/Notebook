// 防抖

const handleDebounce = (fn, time) => {
    var timeout;
    return function () { // 不能让点击事件直接执行，所以返回函数
        const context = this;
        const args = arguments  // 箭头函数没有arguments
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(context, args) // 为了确保this指向, 
        }, time)
    }
}

//  节流

const handleThrottle = (fn, time) => {
    var pre;
    return function () {
        const context = this;
        const args = arguments
        let now = Date.now()
        if (!pre || now >= pre + time) {
            pre = now
            fn.apply(context, args)
        }
    }
}

const handleScroll = () => {
    console.log(Date.now())
}

const deboucetest = handleDebounce(handleScroll, 2000)
const throttletest = handleThrottle(handleScroll, 2000)
window.addEventListener('scroll', throttletest);