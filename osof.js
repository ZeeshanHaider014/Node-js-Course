console.log('RUNNING OSOF.JS');

const os = require('os');
const fs = require('fs');

const result = os.userInfo();
console.log(result);

// Use result.username instead of undefined user
fs.appendFile('txt.txt', 'HI ' + result.username + '!\n', () => {
    console.log('File is created');
});
