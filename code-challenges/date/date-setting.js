module.exports = (date, diff) => {
  console.log('date', date);
  const dateNum = Number(date);
  console.log(dateNum);

  const diffNum = Number(diff.match(/[0-9]/gi));
  const diffLetter = diff.match(/([a-z, A-Z]|[^0-9, |])/gi)[0];
 
  const getMonth = date.getMonth();
  const getYear = 1900 + date.getYear();
  

  const conversion = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    w: 604800000,
    M: date.setMonth(getMonth + diffNum),
    y: date.setYear(getYear + diffNum)
  };

  if(typeof diffNum !== 'number') return null;
  if(conversion[diffLetter] === undefined) return null;

  if(diffLetter === 'M' || diffLetter === 'y') {
    console.log(diffLetter, getYear, diffNum);
    console.log(conversion[diffLetter]);
    const newTimestamp = conversion[diffLetter];
    console.log(new Date(newTimestamp))
    return new Date(newTimestamp);
  } 
console.log(dateNum, diffNum, conversion[diffLetter])
  return new Date(dateNum + (diffNum * conversion[diffLetter]));
};


const softwareDeveloper = () => {
  J
}