console.log("====== LOOPS ======");

let counter = 1;
while (counter <= 10) {
    console.log("while loop");
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



console.log("---------- do while loop ----------------------------");

let counter1 = 1;

do {
    console.log("do while loop");
    counter1++;
} while (counter1 <= 10)



console.log("---------- For loop --------------------------------");

let counter2 = 2;
for (counter2 = 1; counter2 <= 10; counter2++) {
    console.log("For Loop");
}