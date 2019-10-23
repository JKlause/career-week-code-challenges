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
    return Set.intersection(this, set);
  }

  union(set) {
    return Set.union(this, set);
  }

  difference(set) {
    return Set.difference(this, set);
  }

  static intersection(set1, set2) {
    return set1.set.reduce((acc, item) => {
      if(set2.has(item)) acc.push(item);
      return acc;
    }, []);
  }

  static union(set1, set2) {
    const newSet = set1.set.reduce((acc, item) => {
      acc.push(item);
      return acc;
    }, []);
    return set2.set.reduce((acc, item) => {
      if(!set1.has(item)) acc.push(item);
      return acc;
    }, newSet);
  }

  static difference(set1, set2) {
    const newSet = set2.set.reduce((acc, item) => {
      if(!set1.has(item)) acc.push(item);
      return acc;
    }, []);
    return set1.set.reduce((acc, item) => {
      if(!set2.has(item)) acc.push(item);
      return acc;
    }, newSet);
  }
}

module.exports = {
  Set
};