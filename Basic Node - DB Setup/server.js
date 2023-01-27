const http = require("http");
const app = require("express")();
require("./db_conn");
const Model = require("./model");

// Making api's with express
app.get("/add/api", async (req, res) => {
  try {
    res.send({
      code: 201,
      data: await Model.create({
        name: "Sahil",
        class: "10th",
        Roll_no: 25,
        isPresent: true,
        gender: "male",
      }),
    });
  } catch (error) {
    res.send({ code: 400, error });
  }
});

app.get("/get/api", async (req, res) => {
  try {
    res.send({
      code: 200,
      data: await Model.find({}),
    });
  } catch (err) {
    res.send({ code: 400, err });
  }
});

app.listen(8000, () => {
  console.log("CONNECTED ON PORT-->", 8000);
});

// Making api's without express
const server = http.createServer(async (req, res) => {
  if (req.url === "/get/api" && req.method === "GET") {
    try {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      const data = await Model.find({});

      res.write(JSON.stringify(data));

      //   res.end();
    } catch (error) {
      res.end({ code: 400, error });
    }
  } else {
    res.end({ message: "Route not found" });
  }
});

server.listen(8080, () => {
  console.log(`server started on port: ${8080}`);
});
