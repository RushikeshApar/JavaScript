console.log("Math object and Random number generator ");

// // ( Math.floor)remove decimal (+ 1) and start from 1
// let x = Math.floor(Math.random() * 10 + 1);
// console.log(x);

function getRandom(min, max) {
  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

console.log(getRandom(10, 20));
