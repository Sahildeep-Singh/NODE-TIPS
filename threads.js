const crypto = require("crypto"),
  start = Date.now();

crypto.pbkdf2("password", "salt", 1, 1024, "sha512", () => {
  console.log(`PASSWORD ENCRYPTED IN ${Date.now() - start} MILLISECONDS`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`PASSWORD ENCRYPTED IN ${Date.now() - start} MILLISECONDS`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`PASSWORD ENCRYPTED IN ${Date.now() - start} MILLISECONDS`);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(`PASSWORD ENCRYPTED IN ${Date.now() - start} MILLISECONDS`);
});

process.env.UV_THREADPOOL_SIZE = 4; //by default 4 threads

process.nextTick(() => console.log("PROCESS NEXT TICK"));

setImmediate(() => console.log("SET IMMEDIATE"));

setTimeout(() => console.log("SET TIME OUT"), 3000);

console.log("CONSOLE");

console.log("CONSOLE");

setTimeout(() => console.log("SET TIME OUT"));

setImmediate(() => console.log("SET IMMEDIATE"));

process.nextTick(() => console.log("PROCESS NEXT TICK"));
