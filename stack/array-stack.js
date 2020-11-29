class Stack {
    /**
     * 使用数组时大部分方法的时间复杂度是O(n)
     */
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
    clear() {
        this.items = []
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.size(); i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

module.exports = Stack
