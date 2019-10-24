const fs = require('fs');

module.exports = (path) => {
  return fs.readdirSync(path)
    .map(file => {
      return `${fs.readFileSync(`${path}/${file}`, { encoding: 'utf8' })}-${`${file}`}-${fs.statSync(`${path}/${file}`).mtime.toISOString()}`;
    });

};