const fs = require('fs');
const { CONTROLLERS_PATH, CWD } = require('../utility/variable');
const { alert } = require('../utility/alert');
const { capitalize, removeSlash } = require('../utility/helper');


/**
 * @description Generate a template for controller
 * @param {string} name
 */
const controllerTemplateJS = (name) => {
  return `
"use strict";

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
  directory = removeSlash(directory); // remove slash in case of user typo
  const newControllerPath = `${CONTROLLERS_PATH}/${directory}`;
  const jsTemplate = controllerTemplateJS(name);

  if (!fs.existsSync(newControllerPath)) {
    fs.mkdir(newControllerPath, () => {
      // Generate a javascript file
      fs.writeFile(`${newControllerPath}/${name}.js`, jsTemplate, function (err) {
        if (err) throw err;
        alert('success', `${newControllerPath}/${name}.js`, 'File Created:');
      });
    });
  } else {
    // Generate a javascript file
    fs.writeFile(`${newControllerPath}/${name}.js`, jsTemplate, function (err) {
      if (err) throw err;
      alert('success', `${newControllerPath}/${name}.js`, 'File Created:');
    });
  }

}


module.exports = { createNewController };
