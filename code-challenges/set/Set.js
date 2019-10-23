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

  intersection(set) {
    return set.set.reduce((acc, item) => {
      if(this.has(item)) acc.push(item);
      return acc;
    }, []);
  }

  union(set) {
    const newSet = this.set.reduce((acc, item) => {
      acc.push(item);
      return acc;
    }, []);
    return set.set.reduce((acc, item) => {
      if(!this.has(item)) acc.push(item);
      return acc;
    }, newSet);

  }

  difference(set) {

  }

  static intersection(set1, set2) {

  }

  static union(set1, set2) {

  }

  static difference(set1, set2) {

  }
}

module.exports = {
  Set
};