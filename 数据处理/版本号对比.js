/**
 * case：每个产品录入的版本号要进行对比
 */
const compareVersion = (v1, v2) => {
    const arr1 = v1.split('.')
    const arr2 = v2.split('.')

    while (arr1.length && arr2.length) {
        const n1 = Number(arr1.shift()) // 从前到后
        const n2 = Number(arr2.shift())

        if (n1 > n2) return 1;
        if (n1 < n2) return -1;
    }

    if (arr1.length) {
        return arr1.every((item) => Number(item) === 0) ? 0 : 1
    }

    if(arr2.length){
        return arr2.every((item) => Number(item) === 0) ? 0 : -1  
    }

    return 0
}