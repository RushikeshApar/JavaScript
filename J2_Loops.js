//==========================================================================================
// console.log("----------  Aler,Prompt and Confirm -------------------------------");

// let age = prompt("Enter your age")

// if(age != null){
//    console.log(`Your age is ${age} `)
// }
// else{

//     console.log("you not enterd your age")
// }

// let response = confirm("Are you really want to delet this file?")
// if(response){                                          //  in true or false
//    console.log("file deleted successfully");
// }
// else{
//     console.log("file not deleted");
// }



console.log("====== LOOPS ======");

console.log("----------  while Loop  ----------------------------");
let counter = 1;
while (counter <= 10) {
    console.log("while loop", counter);
    counter++;
}

console.log("------------------------------------------------------");
console.log("Q.print the sum of all even numbers between 0 to 100");
let num = 0;
let sum = 0;

while (num <= 100) {
    if (num % 2 == 0) {
        sum = sum + num;
    }
    num++;
}
console.log("=> sum of all even numbers between 0 to 100:", sum);


//============================================================================================
console.log("---------- do while loop ----------------------------");

let counterA = 1;

do {
    console.log("do while loop", counterA);
    counterA++;
} while (counterA <= 10)

//================================================================================================

console.log("---------- For loop --------------------------------");

for (let counterB = 1; counterB <= 10; counterB++) {
    console.log("For Loop", counterB);
}

//=================================================================================================
console.log("---------- Continue and break in loops -------------------------------");
console.log("----------  break in loops -------------------------------");

for (let counterC = 1; counterC <= 10; counterC++) {
    if (counterC == 5) {
        break;                    // this will break loop when they get  the number 5
    }
    console.log("break in loops", counterC);
}


console.log("----------  Continue in loops -------------------------------");
for (let counterD = 1; counterD <= 10; counterD++) {

    if (counterD == 5) {              // this will skip the number 5
        continue;
    }
    console.log("break in loops", counterD);
}

//==========================================================================================
console.log("----------  nested loops  -------------------------------");

outer: for (let counterE = 1; counterE <= 10; counterE++) {
    console.log(counterE);

    for (let counterF = 1; counterF < 3; counterF++) {

        if (counterE == 3) {
            break;
        }

        //if we want to appply this chiled break on parent loop then for target parent loop we can lable it and target it like this
        //     if (counterE == 3) {
        //         break outer;
        //     }

            console.log("tech gun", counterF);

     }

    }

