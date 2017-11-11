const fs = require('fs');
const { DIRECTIVES_PATH, CWD } = require('../utility/variable');
const { alert } = require('../utility/alert');
const { capitalize } = require('../utility/helper');


/**
 * @description Generate a template for directive
 * @param {string} name
 */
const directiveTemplateJS = (name) => {
  const titleCapitalize = capitalize(name);
  return `
"use strict";

app.directive(mycrm${titleCapitalize}, ${name});

${name}.$inject = [];

function ${name}() {
    /* implementation details */
}`
}

/**
 * @description Generates a new directive directory that contains .js and .html file
 * @param {string} name
 */
const createNewDirective = (name) => {
  const newDirectivePath = `${DIRECTIVES_PATH}/${name}`;
  const jsTemplate = directiveTemplateJS(name);

  if (!fs.existsSync(newDirectivePath)) {
    fs.mkdir(newDirectivePath, () => {
      // Generate a javascript file
      fs.writeFile(`${newDirectivePath}/${name}.directive.js`, jsTemplate, function(err){
        if (err) throw err;
        alert('success', `${newDirectivePath}/${name}.directive.js`, 'File Created:');
      })

      // Generate an html file
      fs.writeFile(`${newDirectivePath}/${name}.tpl.html`, '<!-- insert your template here -->', function (err) {
        if (err) throw err;
        alert('success', `${newDirectivePath}/${name}.tpl.html`, 'File Created:');
      })
    });

  } else {
    alert('error', 'File already exist please rename or check the file');
  }

}


module.exports = {createNewDirective};
