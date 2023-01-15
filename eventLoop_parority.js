const fs = require("fs");

function add(a, b) {
  console.log(a + b);
}

setTimeout(() => {
  // add(5, 5);
  console.log("SET TIMEOUT");
}, 0);

Promise.resolve(true).then(() => console.log("PROMISE"));

process.nextTick(() => {
  // add(10, 10);
  console.log("PROCESS NEXT TICK");
});

fs.readFile("text.js", (e, d) => {
  console.log("FILE SYSTEM");

  console.log("--------------");
  setTimeout(() => console.log("SET TIMEOUT"));
  setTimeout(() => console.log("SET TIMEOUT"), 1000);
  setImmediate(() => console.log("SET IMMEDIATE"));
});

setImmediate(() => {
  // add(2, 3);
  console.log("SET IMMEDIATE");
});
