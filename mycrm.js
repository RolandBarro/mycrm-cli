#!/usr/bin/env node
const program = require('commander');
const {generate} = require('./command/generate');
program
  .version('1.0.0')
  .description('A Command Line Utility for myCRM');


program
  .command('generate <type> <name> [directory]')
  .description('Generate a specific file in myCRM')
  .action((type, name, directory) => {
    generate(type,name, directory);
  })

program.parse(process.argv);