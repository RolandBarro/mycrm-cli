const { CONTROLLERS_PATH, CWD } = require('../utility/variable');
const { renderFile } = require('../utility/renderFile');
const { capitalize, removeSlash, firstLetterLowerCase } = require('../utility/helper');


/**
 * @description Generate a template for controller
 * @param {string} name
 */
const controllerTemplateJS = (name) => {
  return `
'use strict';

app.controller(${name}, ${name});

${name}.$inject = [];

function ${name}() {
    /* implementation details */
}`
}

/**
 * @description Generates a new controller file
 * @param {string} name
 */
const createNewController = (name, directory) => {
  let newControllerPath = `${CONTROLLERS_PATH}`;
  if(typeof directory !== 'undefined') {
    directory = removeSlash(directory); // remove slash in case of user typo
    newControllerPath = `/${directory}`;
  }
  name = firstLetterLowerCase(name); // converts first letter to lower case  
  const jsTemplate = controllerTemplateJS(name);
  renderFile(name, newControllerPath, jsTemplate, 'Controller');
}


module.exports = { createNewController };
