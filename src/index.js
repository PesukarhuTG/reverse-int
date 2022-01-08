module.exports = function reverse(num) {
  let str = Math.abs(num).toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = `${str[i]}${result}`;
  }

  return +result;
}