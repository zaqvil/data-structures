/*
 * @Author: your name
 * @Date: 2020-12-13 13:46:07
 * @LastEditTime: 2020-12-13 15:10:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-structures\linkedList\doublyLinkedList.js
 */
const LinkedList = require('./LinkedList')
const { DoublyNode } = require('./models')
class DoublyLinkedList extends LinkedList {
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      // unshift 插入头部
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head

          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return false
  }
}

modules.exports = DoublyLinkedList
