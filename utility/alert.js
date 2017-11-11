/**
 * Alert function that utilizes cli-color
 */

const clc = require('cli-color');

/**
 * @name error
 * @description Error alert that outputs red text
 * @param {string} message
 */
const error = (message) => {
  console.log(clc.red.bold(message));
}

/**
 * @name warning
 * @description Warning alert that outputs yellow text
 * @param {string} message
 */
const warning = (message) => {
  console.log(clc.yellow(message));
}

/**
 * @name info
 * @description Info alert that outputs blue text
 * @param {string} message
 */
const info = (message) => {
  console.log(clc.blue(message));
}

/**
 * @name success
 * @description Success alert that outputs message for success like file generation
 * @param {string} title
 * @param {string} message
 */
const success = (title, message) => {
  console.log(clc.black.bgGreen(title) + ' ' + clc.white.bgBlue(message));
}

/**
 * @name alert
 * @description Public function that exposes all the alerts
 * @param {string} type
 * @param {string} message
 * @param {string} title
 */
const alert = (type, message, title) => {
  switch(type) {
    case 'error':
      error(message);
      break;
    case 'warning':
      warning(message);
      break;
    case 'info':
      info(message);
      break;
    case 'success':
      success(title, message);
      break;
  }
}

module.exports = {alert};
