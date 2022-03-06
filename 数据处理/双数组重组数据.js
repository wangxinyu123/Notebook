/**
 * 提取两个数组中不同的字段重组数据
 */

const map = {};

const arr1 = [];
const arr2 = [];

arr1.forEach((item) => {
    const { name, age, id } = item?.dataValues;
    map[id] = item?.dataValues
})

return arr2?.map((item) => {
    const { job, content } = item;
    const { name, age } = map[item?.id]
    return {
        name,
        age,
        job,
        content
    }
})

