const items = new WeakMap()

class Stack {
    constructor() {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    pop() {
        const s = items.get(this)
        const r = s.pop()
        return r
    }


    peek() {
        const s = items.get(this)
        return s[s.length - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        const s = items.get(this)
        return s.length
    }
    clear() {
        items.set(this, [])
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        const s = items.get(this)
        let objString = `${s[0]}`
        for (let i = 1; i < this.size(); i++) {
            objString = `${objString},${s[i]}`
        }
        return objString
    }
}

module.exports = Stack
