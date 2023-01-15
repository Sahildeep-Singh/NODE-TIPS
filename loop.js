process.on("message", (message) => {
  const data = worstFun(message.num);
  process.send(data);
  process.exit();
});

const worstFun = (num) => {
  let data = 0;
  for (var i = 0; i < num; i++) {
    data += i;
    console.log(i);
  }
  return data;
};
