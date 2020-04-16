const path = require('path');
const fs = require('fs');
const {tmLanguage} = require('../src/cylc.tmLanguage');

const jsonDestination = path.resolve(`${__dirname}/../cylc.tmLanguage.json`);
const indentUnit = 4;
const encoding = 'utf8';

fs.writeFile(jsonDestination, JSON.stringify(tmLanguage, null, indentUnit), {'encoding': encoding}, (err) => {
    if (err) throw err;
    console.log(`Successfully built at ${jsonDestination}`);
});
