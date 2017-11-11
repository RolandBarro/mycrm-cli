/**
 * Validation functions
 */

const fs = require('fs');
const {alert} = require('../utility/alert');
const {CWD} = require('../utility/variable');

/**
 * @name vaidateContext
 * @description Validates every command before executing
 * @param {*} callback // callback function after validation
 */
const validateContext = (callback) => {
  if (fs.existsSync(`${CWD}/dev/config.json`)) {
    callback();
  } else {
    alert('error', 'You must be in the root of myCRM to perform this action.\n\rPlease make sure that your are in the right directory.\n\r\n\rHappy Coding :)');
  }
}


module.exports = {validateContext};
