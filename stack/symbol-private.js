const _items = Symbol('stackItems')
class Stack {
    /**
     * 使用数组时大部分方法的时间复杂度是O(n)
     */
    constructor() {
        this[_items] = []
    }

    push(element) {
        this[_items].push(element)
    }

    pop() {
        return this[_items].pop()
    }

    peek() {
        return this[_items][this[_items].length - 1]
    }

    isEmpty() {
        return this[_items].length === 0
    }

    size() {
        return this[_items].length
    }
    clear() {
        this[_items] = []
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this[_items][0]}`
        for (let i = 1; i < this.size(); i++) {
            objString = `${objString},${this[_items][i]}`
        }
        return objString
    }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
let objectSymbols = Object.getOwnPropertySymbols(stack)
console.log(objectSymbols.length)
console.log(objectSymbols)
console.log(objectSymbols[0])
stack[objectSymbols[0]].push(1)
console.log(stack.toString())

module.exports = Stack