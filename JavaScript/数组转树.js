let arr = [
    { id: 1, name: '1', pid: 0 },
    { id: 2, name: '2', pid: 1 },
    { id: 3, name: '3', pid: 1 },
    { id: 4, name: '4', pid: 3 },
    { id: 5, name: '5', pid: 3 },
]

function arrayToTree(array) {
    const res = []
    const map = {}

    for (let item of array) {
        map[item.id] = { ...item, children: [] }
    }

    for (let item of array) {
        const newItem = map[item.id]
        if (item.pid === 0) {
            res.push(newItem)
        } else {
            if (Object.prototype.hasOwnProperty.call(map, item.pid)) {
                map[item.pid].children.push(newItem)
            }
        }
    }
    return res
}

console.log(JSON.stringify(arrayToTree(arr)))