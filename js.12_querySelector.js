console.log("qurySelector");

let element = document.querySelector("div");
console.log(element);
//element.style.color="white";

let allElements = document.querySelectorAll("div");
console.log(allElements);
Array.from(allElements).map((item) => {
    item.style.color="white"
});
