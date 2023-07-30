console.log("Hello Rushikesh");

let x;
console.log(x); // undefined

let y = typeof "Rushikesh"; // typeof shows type of variable
console.log(y);

let NAME = "Rushikesh";
console.log(`hello ${NAME}`); //Template Literals(interpolation)

// Conditions and logical operator
let age = 18;
if (age >= 18) {
    console.log("you can apply for licence");
} else {
    console.log("you can not apply for licence");
}

//turnary operator
let isLoggedin = 1; // if  1 login fi 0 loggedout

let option = isLoggedin === 1 ? "login" : "loggedout";
//condition       true        false
console.log("turnary operator =", option);


// if input = 1, "Y", "yes" then output = CONTINUE...
// if input = 0, "N", "no"  then output = END...

// By using if else lader

// let input;
// input = "1";

// if (input === 1) {
//   document.write("CONTINUE...");
// } else if (input === "Y") {
//   document.write("CONTINUE...");
// } else if (input === "yes") {
//   document.write("CONTINUE...");
// } else if (input === 0) {
//   document.write("END...");
// } else if (input === "N") {
//   document.write("END...");
// } else if (input === "no") {
//   document.write("END...");
// } else {
//   document.write("wrong input");
// }


// By using switch
// let ip;
// ip = 1 ;   
// switch (ip) {
//     case 1:
//         document.write("CONTINE....")
//         break;

//     case "Y":
//         document.write("CONTINE....")
//         break;

//     case "yes":
//         document.write("CONTINE....")
//         break;

//     case 0:
//         document.write("END....")
//         break;

//     case "N":
//         document.write("END....")
//         break;

//     case "no":
//         document.write("END....")
//         break;

//     default:
//         document.write("WRONG INPUT")
// }