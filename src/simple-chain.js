const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

class Chain {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const chainMaker = {
  length: 0,
  head: null,
  getLength() {
    return this.length;
  },
  addLink(value) {
    newChain = new Chain(value);
    if (this.length === 0) this.head = newChain;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newChain;
    }
    this.length += 1;
    return this;
  },
  removeLink(position) {
    if (position > this.length || position < 1 || isNaN(position)) {
      this.length = 0;
      this.head = null;
      throw new Error("You can't remove incorrect link!");
    }
    let current = this.head;
    let currentIndex = 1;
    let previous = new Chain(999);
    while (currentIndex !== position) {
      currentIndex += 1;
      previous = current;
      current = current.next;
    }
    if (position === 1) this.head = current.next;
    else previous.next = current.next;
    current.next = null;
    return this;
  },
  reverseChain() {
    let current = this.head;
    let previous = null;
    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
    return this;
  },
  finishChain() {
    let result = "( " + this.head.value + " )";
    let current = this.head;
    while (current.next) {
      result += "~~( " + current.next.value + " )";
      current = current.next;
    }
    this.length = 0;
    this.head = null;
    return result;
  },
};

module.exports = {
  chainMaker,
};
