const arr = [{
    id: 2,
    name: '部门B',
    parentId: 0
},
{
    id: 3,
    name: '部门C',
    parentId: 1
},
{
    id: 1,
    name: '部门A',
    parentId: 2
},
{
    id: 4,
    name: '部门D',
    parentId: 1
},
{
    id: 5,
    name: '部门E',
    parentId: 2
},
{
    id: 6,
    name: '部门F',
    parentId: 3
},
{
    id: 7,
    name: '部门G',
    parentId: 2
},
{
    id: 8,
    name: '部门H',
    parentId: 4
}
]

function getChildren(data, result, pid) {
    for (let item of data) {
        if (item.parentId === pid) {
            const newItems = { children: [], ...item }
            result.push(newItems)
            getChildren(data, newItems.children, newItems.id)
        }
    }
}

function arrayToTree(data, pid) {
    let result = []
    getChildren(data, result, pid)
    return result
}

console.log(arrayToTree(arr, 0))