class Set {
  constructor() {
    this.set = [];
  }
  add(value) {
    this.set.push(value);
  }
  remove(value) {
    for(let i = 0; i < this.set.length; i++) {
      if(this.set[i] === value) {
        this.set.splice(i, 1);
      }
    }
  }
  has(value) {
    return this.set.includes(value);
  }

}

module.exports = {
  Set
};