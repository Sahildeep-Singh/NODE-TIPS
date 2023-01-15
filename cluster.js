console.log("START");
const app = require("express")();
const cluster = require("cluster");
const os = require("os");

const CPUs = os.cpus().length;

app.get("/:no", (req, res) => {
  let a;
  for (let i = 0; i <= req.params.no; i++) {
    // some long running task
    a = i;
  }
  res.send({ status: "SUCCESS...", no_of_iterations: a, CPUs });
  cluster.worker.kill();
});

if (cluster.isMaster) {
  for (let i = 0; i < CPUs; i++) cluster.fork();
  cluster.on("exit", (worker, code, signal) => {
    console.log(`WORKER ${worker.process.pid} DIED`);
    cluster.fork();
  });
} else {
  app.listen(8080, () => console.log(`SERVER RUNNING ON ${process.pid} `));
}

// const cluster = require("cluster"),
//   http = require("http"),
//   { cpus } = require("os"),
//   process = require("process");

// const numCPUs = cpus().length;

// debugger;

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     debugger;
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http
//     .createServer((req, res) => {
//       res.writeHead(200);
//       res.end("hello world\n");
//     })
//     .listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

// setTimeout(() => {
//   debugger;
//   console.log("world");
// }, 1000);
