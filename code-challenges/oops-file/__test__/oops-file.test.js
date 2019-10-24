const readDir = require('../helper-functions/read-dir');

describe('oops-file', () => {

  it('gets file names from a directory', ()=> {
    const files = readDir('code-challenges/oops-file/data');
    expect(files.length).toBe(3);
    
  });

  it('gets last modified date for each file', () => {

  });

});
