const { DIRECTIVES_PATH, CWD } = require('../utility/variable');
const { capitalize } = require('../utility/helper');
const { renderFile } = require('../utility/renderFile');


/**
 * @description Generate a template for directive
 * @param {string} name
 */
const directiveTemplateJS = (name) => {
  const titleCapitalize = capitalize(name);
  return `
'use strict';

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
  renderFile(name, newDirectivePath, jsTemplate, 'Directive');
}


module.exports = {createNewDirective};
