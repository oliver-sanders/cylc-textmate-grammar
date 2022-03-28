/* THIS FILE IS PART OF THE CYLC WORKFLOW ENGINE.
   Copyright (C) NIWA & British Crown (Met Office) & Contributors.

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>. */


// Build script for "compiling" cylc.tmLanguage.js into JSON

const path = require('path');
const fs = require('fs');
const {tmLanguage} = require('../src/cylc.tmLanguage');

const jsonDestination = path.resolve(`${__dirname}/../cylc.tmLanguage.json`);
const indentUnit = 4;
const encoding = 'utf8';

fs.writeFile(jsonDestination, toJSON(tmLanguage), {'encoding': encoding}, (err) => {
    if (err) throw err;
    console.log(`Successfully built at ${jsonDestination}`);
});

function toJSON(obj) {
    return `${JSON.stringify(obj, null, indentUnit)}\n`;
}
