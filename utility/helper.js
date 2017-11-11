/**
 * @name capitalize
 * @description Converts the first letter of string to uppercase
 * @param {string} string
 */
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const removeSlash = (string)=> {
  // ending slash
  if (string.charAt(string.length - 1) === '/') {
    string = string.substr(0, string.length - 1);
  }

  // start slash
  if (string.charAt(0) === '/') {
    string = string.substr(1, string.length - 1);
  }

  return string;
}

module.exports = { capitalize, removeSlash};
