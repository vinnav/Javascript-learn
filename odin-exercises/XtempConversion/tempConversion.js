const ftoc = function(a) {
  let temp = a;
  let convertedTemp = ((temp-32)/9)*5;
  let finalTemp = Math.round( convertedTemp * 10 ) / 10;
  return finalTemp;
}

const ctof = function(a) {
  let temp = a;
  let convertedTemp = (temp*9/5)+32;
  let finalTemp = Math.round( convertedTemp * 10 ) / 10;
  return finalTemp;
}

module.exports = {
  ftoc,
  ctof
}

