console.log("Events");

function firstFunction() {
    console.log("Button click");
}

// By programatically we can do like this
let btn = document.querySelector('button')
btn.addEventListener("click",firstFunction)