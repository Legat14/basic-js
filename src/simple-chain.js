const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.linksArr.length;
  },

  addLink(value) {
    if (!this.hasOwnProperty('linksArr')) {
      this.linksArr = [];
    }
    if (value === 'undefined') {
      value = '';
    }
    this.linksArr.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if (!position || typeof position !== 'number' || position <= 0 || position >= this.linksArr.length) {
      this.linksArr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.linksArr.forEach((value, i) => {
      if (i === position - 1) {
        this.linksArr.splice(i, 1);
      }
    });
    return this;
  },

  reverseChain() {
    this.linksArr = this.linksArr.reverse();
    return this;
  },

  finishChain() {
    let chain = '';
    this.linksArr.forEach((value, i) => {
      if (i !== 0) {
        chain += '~~';
      }
      chain += `( ${value} )`;
    });
    this.linksArr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};