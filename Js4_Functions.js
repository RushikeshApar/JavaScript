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
//   console.log("---------------- Anonymous Fuction --------------------------------------------")

// function greet(){
//     console.log("GOOD MORNING WARRIOR...");
// }
// setTimeout(greet,3000)   // first parameter is function and second is time

// // function without(Anonymous) name
// setTimeout(function(){
//     console.log("GOOD MORNING WARRIOR");
// },3000)                                     // pass anonymous function

//---------------- Immediately invoked function --------------------------------------------
console.log("Immediately invoked function ");

(function () {
  console.log("***** Immediately invoked functio *******");
})();


//=============================================================================================
function addTwoNumber(number1,number2){
   return number1 * number2
}

const result = addTwoNumber(5,4) // by storing function in variable 
console.log(result);              

console.log(addTwoNumber(5,4)); // direcrtly log

// Function for adding unpredict parameter or item ex - shoping cart rest and spared operaror

// this is called (...)rest operator this provide array of parameters
function claculateCartPrice(...item){ 

return item;

} 

console.log("claculateCartPrice : ",claculateCartPrice(5,3,2,5,8));

"+++++++++ Arrow Function +++++++++++++++++++++++"
console.log("+++++++++ Arrow Function +++++++++++++++++++++++");

const addNum = (numm1,numm2) => {
       return numm1 + numm2;     // explicit return
}
console.log("Arrow Function : " , addNum(5,4));


// single line Arrow function
const mulNum = (num3,num4) => ( num3 * num4 ) // implicit return

console.log("single line Arrow function : ",mulNum(3,3));
 
  
// ---------- Immidiate invoked function -------------------

(function chai (){
  console.log("chaiii");
})();    // if you not write a semicolon this will give you error

((name) => {
  console.log(`chaiii aur code with ${name}`);
})("Rushi")