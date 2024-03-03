//  创建一个空对象
//  把新的对象原型绑定到构造函数上
//  构造函数执行，执行过程中的this被绑定到新的对象上
//  返回新的对象
function Animal(type) {
    this.type = type
    console.log('=======执行')
}

function newOperator(constructor, args){
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  constructor.call(obj, args)
  return obj
}

// const Animals = new Animal('dog')
// console.log(Animals.type)

const newAnimal = newOperator(Animal, 'dog')
console.log(newAnimal.type)