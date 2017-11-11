/**
 * Generate command for the cli
 */

const fs = require('fs');
const path = require('path');
const {validateContext} = require('../utility/validation');
const {createNewDirective} = require('../module/directive');
const {createNewController} = require('../module/controller');
const {createNewService} = require('../module/service');

/**
 * @name generate
 * @description Generate files for specific type
 * @param {string} type
 * @param {string} name
 * @param {string} directory
 */
const generate = (type, name, directory) => {
  switch(type) {
    case 'directive':
      validateContext( () => {
        createNewDirective(name);
      } );
      break;
    case 'controller':
      validateContext(() => {
        createNewController(name, directory);
      });
      break;
    case 'service':
      validateContext(() => {
        createNewService(name, directory);
      });
      break;
  }
}

module.exports = { generate };
