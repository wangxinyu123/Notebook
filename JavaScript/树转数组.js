let tree = [
    {
        "id": 1,
        "name": "1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "3",
                "pid": 1,
                "children": [
                    {
                        "id": 4,
                        "name": "4",
                        "pid": 3,
                        "children": []
                    }
                ]
            }
        ]
    }
]


function treeToArray(tree) {
    let res = []
    for (let item of tree) {
        const { children, ...i } = item
        if (children.length) {
            res = res.concat(treeToArray(children))
        }
        res.push(i)
    }
    return res
}

console.log(treeToArray(tree))