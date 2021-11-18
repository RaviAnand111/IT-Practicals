// var timer = 1;
// var intervalID = setInterval(function () {
//   timer += 1;
//   if (timer > 10) {
//     clearInterval(intervalID);
//   }
//   document.writeln("ravi" + "</br>");
// }, 2000);

const text = document.querySelector(".cl");
const colors = ["red", "blue", "green", "black", "purple", "grey", "aqua"];

function table(num) {
  let i = 1;
  // fsize = 16;
  const intervalID = setInterval(() => {
    if (i === 10) {
      clearInterval(intervalID);
    }
    if (num < 11 && i < 11) {
      var result = `${num} x ${i} = ${num * i}`;
      var random = Math.floor(Math.random() * colors.length);
      result = result.fontcolor(colors[random]);
      document.write(result + "</br>");
      i++;
      // fsize++;
    }
  }, 5000);
}

let count = 2;
table(count++);
var interval = setInterval(() => {
  if (count === 10) {
    clearInterval(interval);
  }
  table(count++);
}, 50000);
