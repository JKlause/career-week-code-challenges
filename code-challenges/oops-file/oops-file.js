const fs = require('fs');

module.exports = (path) => {
  return fs.readdirSync(path)
    .map(file => {
      const fileName = file.match(/^[^.]*/)[0];
      return fs.writeFileSync(`${path}-new/${fs.readFileSync(`${path}/${file}`, { encoding: 'utf8' })}-${`${fileName}`}-${fs.statSync(`${path}/${file}`).mtime.toISOString()}`);
    });
};