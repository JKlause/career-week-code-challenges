const { Set } = require('../Set');

describe('Set class', () => {

  it('instantiates an empty array', () => {
    const name = new Set;
    expect(name.set).toEqual([]);
  });

  it('adds a value using add method', ()=> {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    expect(name.set).toEqual(['billy', 'dawn']);
  });
  
  it('removes a value using remove method', ()=> {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    name.remove('billy');
    expect(name.set).toEqual(['dawn']);
  });

  it('returns true if value is in set using has method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    expect(name.has('billy')).toBe(true);
  });

  it('returns false if value is not in set using has method', () => {
    const name = new Set;
    name.add('billy');
    name.add('dawn');
    expect(name.has('george')).toBe(false);
  });
  
});