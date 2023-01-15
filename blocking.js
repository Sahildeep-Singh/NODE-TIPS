const app = require("express")();
const { fork } = require("child_process");

app.get("/num/:num", (req, res) => {
  const start = Date.now();
  const childProcess = fork("./loop.js");
  childProcess.send({ num: +req.params.num });
  childProcess.on("message", (message) =>
    res.send({
      timeTaken: Date.now() - start,
      message,
    })
  );
});

app.get("/number/:num", async (req, res) => {
  const start = Date.now();
  const data = await worstFun(+req.params.num);
  res.send({ data, timeTaken: Date.now() - start });
});

app.get("/gagan/:num", async (req, res) => {
  const start = Date.now();
  const data = await worstFun(+req.params.num);
  res.send({ data, timeTaken: Date.now() - start });
});

app.get("/normal", (req, res) => {
  res.send("FETCHING...");
});

const worstFun = async (num) => {
  let data = 0;
  for await (let i of num) {
    data = i;
    console.log(i);
  }
  return data;
};

app.listen(5000);
