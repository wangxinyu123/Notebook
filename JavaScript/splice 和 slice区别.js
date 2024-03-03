const arr = [1, 2, 3, 4, 5]


// 返回一个新的数组,不改变原数组
// [index,num] 参数一：开始删除的索引值  参数二：结束的索引值(不包括当前索引)
arr.slice(1, 3)  // [2,3]
console.log(arr);


// 改变原数组
// [index,num] 参数一：开始删除的索引值  参数二：删除几个  参数三：添加的新元素
arr.splice(1, 3) // [2,3,4]
console.log(arr)  // [1,5]