const cp = require("child_process");

// cp.exec("start chrome");

const practice = cp.execSync("node practice.js");

const convertJson = Buffer.from(practice);

console.log("PRACTICE", practice);
console.log("BUFFER TO JSON", Buffer.from(convertJson).toString());
