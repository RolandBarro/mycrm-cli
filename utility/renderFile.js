const fs = require('fs');
const { alert } = require('../utility/alert');
/**
 * @name renderFile
 * @description Utility function in generating file
 * @param {string} name 
 * @param {string} path 
 * @param {string} template 
 * @param {string} type 
 */
const renderFile = (name, path, template, type) => {
    if (!fs.existsSync(path)) {
        fs.mkdir(path, () => {
            if (type === 'Directive') { 
                // Generate a javascript file
                fs.writeFile(`${path}/${name}.directive.js`, template, function (err) {
                    if (err) throw err;
                    alert('success', `${path}/${name}.directive.js`, `${type} Created:`);
                });

                // Generate an html file
                fs.writeFile(`${path}/${name}.tpl.html`, '<!-- insert your template here -->', function (err) {
                    if (err) throw err;
                    alert('success', `${path}/${name}.tpl.html`, `${type} Template Created:`);
                });
            } else {
                // Generate a javascript file
                fs.writeFile(`${path}/${name}.js`, template, function (err) {
                    if (err) throw err;
                    alert('success', `${path}/${name}.js`, `${type} Created:`);
                });
            }
        });
    } else {
        if( type !== 'Directive') {
            // Generate a javascript file
            fs.writeFile(`${path}/${name}.js`, template, function (err) {
                if (err) throw err;
                alert('success', `${path}/${name}.js`, `${type} Created:`);
            });
        } else {
            alert('error', 'File already exist please rename or check the file');
        }
    }
}

module.exports = {renderFile};