/**
 * 单向链表的实现
 * 
 * @class Node
 */
export class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export default class LikedList {

  length = 0;
  head = null;

  constructor(element) {
    if (element) {
      this.head = new Node(element);
      this.length++;
    }
  }

  /**
   * 尾部增加元素
   * 
   * @param {Node} element 
   * @memberof LikedList
   */
  append(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let cursor = this.head;
      while (cursor.next) {
        cursor = cursor.next;
      }
      cursor.next = node;
    }
    this.length++;
  }

  /**
   * 插入元素
   * 
   * @param {Node} element
   * @param {Number} pos
   * @returns 
   * @memberof LikedList
   */
  insert(element, pos) {
    if (pos >= 0 && pos <= this.length) {
      const node = new Node(element);
      this.length++;
      if (pos === 0) {
        node.next = this.head;
        this.head = node;
        return true;
      }
      let cur = 0;
      let target = this.head;
      while (pos > cur++) {
        target = target.next;
      }
      node.next = target.next;
      target.next = node;
      return true;
    } else {
      return false;
    }
  }

  /**
   * 删除指定位置的元素
   * 
   * @param {Number} pos 
   * @returns 
   * @memberof LikedList
   */
  removeAt(pos) {
    if (!this.length) return false;
    if (pos >= 0 && pos < this.length) {
      let cur = 0;
      if (pos === 0) {
        this.head = this.head.next;
        this.length--;
        return true;
      }
      let target = this.head;
      while (pos - 1 > cur++) {
        target = target.next;
      }
      target.next = target.next.next;
      this.length--;
      return true;
    } else {
      return false;
    }
  }

  /**
   * 查找一个元素的位置
   * 
   * @param {any} element 
   * @returns 
   * @memberof LikedList
   */
  indexOf(element) {
    let target = this.head;
    let count = 0;
    while(target.next) {
      if (target.element === element) {
        return count;
      }
      count++;
      target = target.next;
    }
    if (target.element === element) {
      return count;
    }
    return -1;
  }

  /**
   * remove one element
   * 
   * @param {any} element 
   * @memberof LikedList
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * 清空链表
   */
  clear() {
    this.length = 0;
    this.head = null;
  }
}
