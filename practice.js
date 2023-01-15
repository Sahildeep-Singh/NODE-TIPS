// (function aa() {})();

// // aa();

const hello = function (e) {
  console.log(this.name);
  console.log(this.age);
  console.log(e);
};

hello.bind({ name: "bb", age: 20 }, ["hello", "hh"])();

function printEvenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
    i++;
  }
}

printEvenNumbers(10);

const months = [
  "jan",
  "feb",
  "mar",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

console.log(months[new Date().getMonth()]);

console.log("RUNNING");
