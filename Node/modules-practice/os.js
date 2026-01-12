const operatingSys = require('os');

// info about current user
const user = operatingSys.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`System uptime: ${operatingSys.uptime()}`);

const currentOS = {
    name: operatingSys.type(),
    freeMem: operatingSys.freemem(),
    release: operatingSys.release(),
    totalMem: operatingSys.totalmem()
}
console.log(currentOS);