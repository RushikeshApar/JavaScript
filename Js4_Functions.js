console.log("========== FUNCTIONS ==========");

for (i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${i * 9}`);
}

console.log("---------- by using fuction -----------");

function mulTable(num) {
  for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

mulTable(9);
console.log("we used function for repeted task");
//---------------------------------------------------------------------------------------------

console.log("---------- by using multiple parameter -----------");

function add(num1, num2) {
  console.log("Adition of numbers is =", num1 + num2);
}
add(5, 4);

//---------------- Anonymous Fuction --------------------------------------------
  console.log("---------------- Anonymous Fuction --------------------------------------------")

function greet(){
    console.log("GOOD MORNING WARRIOR...");
}
setTimeout(greet,3000)   // first parameter is function and second is time

// function without(Anonymous) name
setTimeout(function(){
    console.log("GOOD MORNING WARRIOR");
},3000)                                     // pass anonymous function

//---------------- Immediately invoked function --------------------------------------------
console.log("Immediately invoked function ");

(function () {
  console.log("***** Immediately invoked functio *******");
})();
