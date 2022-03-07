const arr = [1, 2, 3, 4]

function getArr(arr) {
    console.log(...arr)
}

getArr(arr) // 1 2 3 4

// 在函数入参时，转换成数组
function getArrs(...arr) {
    console.log(...arr) // [1,2,3,4]
    console.log(arr) // [[1,2,3,4]]
}

getArrs(arr)