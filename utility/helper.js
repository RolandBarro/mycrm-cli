/**
 * @name capitalize
 * @description Converts the first letter of string to uppercase
 * @param {string} string
 */
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * @name removeSlash
 * @description Removes slash appended to string from start or end
 * @param {string} string 
 */
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

/**
 * @name firstLetterLowerCase
 * @description Convert first letter to lower case in scenario the user type in uppercase first
 * @param {string} string 
 * @param {string} checkString 
 */
const firstLetterLowerCase = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

module.exports = { capitalize, removeSlash, firstLetterLowerCase};
