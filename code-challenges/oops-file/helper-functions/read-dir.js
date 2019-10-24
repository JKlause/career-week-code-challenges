const fs = require('fs');

module.exports = (path) => {
  return fs.readdirSync(path)
    .map(file => {
      return file.match(/^[^.]*/)[0];
    });
};

