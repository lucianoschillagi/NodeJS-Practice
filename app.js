
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

os.totalmem();
os.freemem();

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total memory ${totalMem}`);
console.log(`Free memory ${freeMem}`);