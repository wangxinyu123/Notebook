> keyof 类似instanceof


```jsx
// 获取入参对象中的value

const obj = {
  name:'wysoka',
  age:23
}

// 普通函数
function getValue<T extends Object,K extends keyof T>(o:T,key:k):T[K]{
  return o[key]
}

// 箭头函数
const getValue = <T extends Object,K extends keyof T>(o:T,key:k):T[K]=>{
  return o[key]
}
```

