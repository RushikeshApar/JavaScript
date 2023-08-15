console.log("Date Bobject");

let x = new Date(); // it will show your browser todays date and time
console.log(x);

console.log(
  "------------------------------------------------------------------"
);

let y = new Date("sep 25, 2023 9:9:45:81");

console.log(y);

console.log("Time : ", y.getTime()); // give time in milisecond

console.log("Year : ", y.getFullYear());

console.log("Month  : ", y.getMonth()); //(Month start from 0 (jan = 0))

console.log("Date : ", y.getDate());

console.log("Month  : ", y.getDay()); //(Day start from 0 (sun = 0))

console.log("Hours : ", y.getHours());

console.log("Minuts : ", y.getMinutes());

console.log("Second : ", y.getSeconds());

console.log("MilliSecond : ", y.getMilliseconds());
