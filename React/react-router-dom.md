### 改变 

* component --> element
* useRoutes ：必须整体以组件的形式被Router包裹



```jsx
import { Suspense, lazy, useState, useMemo } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

// 处理路由
const changeRouter = (routes) => {
    return routes?.map((item) => {
        if (item.children) {
            item.children = changeRouter(item.children)
        }
        item.element = <Suspense fallback={<Spin spinning={true} />}>
            <item.component />
        </Suspense>
        return item
    })
}

// 必须这样写
const Routes = () => useRoutes(changeRouter(routes))

const AppWrapper = () => {
    return (
        <Router>
           <Routes/>
        </Router>
    )
}
```

