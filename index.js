let a = 10;
let b = 20;
console.log(a+b);

const myHeading = document.querySelector("h1");
console.log(myHeading)
console.log(myHeading)
myHeading.textContent = "Hello world!";

let myVariable = "bob";
console.log(myVariable)
myVariable = "steve";
console.log(myVariable)

let my = "3";

console.log(my == 3)

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  console.log(multiply(2,3))

  document.querySelector("h1").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
  
  document.querySelector("h1").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });  