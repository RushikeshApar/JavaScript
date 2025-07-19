// console.log("=======Type Conversion in Js=========");

// let age = 25;
// console.log(typeof age);

// console.log("type of conversion");
// // =========== type of conversion =============
// // ------- Number(), String(), Boolean()

// let a = 15;
// console.log(typeof a); //old
// // converting type number to string
// let b = String(a);
// console.log(typeof b); //new

// //===========Array===============
// console.log("========= Array =================");

// let Books = ["C", "C++", "Java", "Js"];

// // let Books = "Bio";
// console.log("For checking is Array or Not :", Array.isArray(Books));

// Books.unshift("HTML"); // to ADD element at the STARTING of the Array

// Books.shift(); // to REMOVE element at the STARTING of the Array

// Books.push("Python"); // to ADD element at the ENDING of the Array

// Books.pop(); // to REMOVE elelement from ENDING of the Array

// Books.splice(1, 1); //to remove elelmnt from spesific point

// console.log(Books);

// let text = "this is a random text";

// console.log("Convertoing Text into Array :", text.split(" ")); // this convert text in to array from where you want to split pass as parameter

// console.log("Joining Arrays element:", Books.join("  ")); // join Array

// //---------------------concatination of Array ----------------------
// console.log("concatination of Array");

// let Alphabet1 = ["A", "B", "C", "D"];

// let Alphabet2 = ["E", "F", "G", "H"];

// let Alphabet3 = Alphabet1.concat(Alphabet2);

// console.log(Alphabet3);

// //------------- Matrix or 2D Array -----------
// // like k-map
// console.log("---------Matrix or 2D Array--------------------");

// let BooksPages = [
//   ["C", "200"],
//   ["Js", "350"],
//   ["Java", "100"],
//   ["Python", "50"],
// ];

// console.log(BooksPages[1][0]);

// //------------- Array accessing by loops -----------
// console.log("--------- Array accessing by loops --------------------");

// for (i = 0; i < Books.length; i++) {
//   console.log(`Elemment ${i} is ${Books[i]} `);
// }

// console.log("--------- Array accessing by forEach loop --------------------");

// Books.forEach(myfu);

// function myfu(value) {

//   console.log("eelement",value);

// }
