# 栈
栈是一种遵从后进先出（LIFO）原则的有序集合
 * push(element(s)) 添加一个或多个新元素到栈顶
 * pop() 移除栈顶的元素，同时返回被移除的元素
 * peek() 返回栈顶的元素，不对栈做任何修改
 * isEmpty() 栈没有元素返回true，否则返回false
 * clear() 移除栈里的所有元素
 * size() 返回栈里的元素个数

### 用栈解决问题 page79
栈实际应用非常广泛。在回溯问题中，它可以存储访问过的任务或路径、撤销的操作。Java和C#用栈来存储变量和方法调用，特别是处理递归算法时，有可能抛出一个栈溢出异常。