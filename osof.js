console.log('RUNNING OSOF.JS');

const os = require('os');
const fs = require('fs');

const result = os.userInfo();
console.log(result);