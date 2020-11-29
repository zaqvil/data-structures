/**
 * 栈
 * push(element(s)) 添加一个或多个新元素到栈顶
 * pop() 移除栈顶的元素，同时返回被移除的元素
 * peek() 返回栈顶的元素，不对栈做任何修改
 * isEmpty() 栈没有元素返回true，否则返回false
 * clear() 移除栈里的所有元素
 * size() 返回栈里的元素个数
 */
// const Stack = require('./array-stack')
// const Stack = require('./#private')
const Stack = require('./WeakMap-private')

const stack = new Stack()

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)


console.log('isEmpty: ', stack.isEmpty())

stack.push(5)
stack.push(8)

console.log('peek: ', stack.peek())

stack.push(11)
console.log('size: ', stack.size())
console.log('isEmpty: ', stack.isEmpty())

stack.push(15)
console.log('pop: ', stack.pop())
console.log('pop: ', stack.pop())
console.log('size: ', stack.size())