const { SERVICES_PATH, CWD } = require('../utility/variable');
const { renderFile } = require('../utility/renderFile');
const { capitalize, removeSlash, firstLetterLowerCase } = require('../utility/helper');


/**
 * @description Generate a template for factory service
 * @param {string} name
 */
const serviceFactoryTemplateJS = (name) => {
    return `
'use strict';

app.factory(${name}, ${name});

${name}.$inject = [];

function ${name}() {
    /* implementation details */
}`
}

/**
 * @description Generates a new factory service file
 * @param {string} name
 */
const createNewService = (name,directory) => {
    name = firstLetterLowerCase(name); // converts first letter to lower case
    // if the name doesn't contain Service e.g. SampleCreateService
    if(name.indexOf('Service') === -1 || (name.length - name.lastIndexOf('Service')) !== 7) {
        name += 'Service';
    }

    let newServicePath = `${SERVICES_PATH}`;

    // will append if there is a specific directory the service will be added
    if (typeof directory !== 'undefined') {
        newServicePath += `/${directory}`;
    }

    const jsTemplate = serviceFactoryTemplateJS(name);
    renderFile(name, newServicePath, jsTemplate, 'Service');
}


module.exports = {createNewService};
