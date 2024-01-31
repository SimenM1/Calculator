//math
let ans = 0;
let a = 3;
let b = 1;
let operator = "+";


function add() {
    ans = a + b;
    return ans;
}

 function subtract() {
    ans = a - b;
    return ans;
}

function multiply() {
    ans = a*b;
    return ans;
}

function divide() {
    ans = a/b;
    return ans;
}

function operate(operator, firstNr, secondNr) {
    a = firstNr;
    b = secondNr;
    switch(operator) {
        case "+":
            return add();

        case "-":
            return subtract();

        case "*":
            return multiply();

        case "/":
            return divide();
   }
}


operate("+", 2, 6);
console.log(ans);

//gui

function input(txt) {
    let inputDiv = document.querySelector(".display");
    inputDiv.textContent = txt;
}

postDisplay = 0;

// input
firstNr = 0
let nrBtns = document.querySelectorAll(".nrs");
console.table(nrBtns);
for(i = 0; i < nrBtns.length; i++) {
    let nr = nrBtns[i].textContent;
    nrBtns[i].addEventListener("click", () => {
        if (firstNr === ans) {
            preDisplay = document.querySelector(".display").textContent;
            input(nr);
            postDisplay = document.querySelector(".display").textContent;
            console.log(postDisplay);
            ans = ""
            return postDisplay;
        }
        else {
            preDisplay = document.querySelector(".display").textContent;
            input(preDisplay + "" + nr);
            postDisplay = document.querySelector(".display").textContent;
            console.log(postDisplay);
            return postDisplay;
        }
    })
}

clearBtn = document.querySelector("#clear")
clearBtn.addEventListener('click', (event) => {
    document.querySelector(".display").textContent = "";
    postDisplay = 0
    preDisplay = 0
    firstNr = 0
    secondNr = 0
})

let operatorBtn = document.querySelector("#left")
operatorBtn.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        if (typeof firstNr !== "undefined" && firstNr !== 0) {
            secondNr = +document.querySelector(".display").textContent;
            operateFn()
            document.querySelector(".display").textContent = ans;
            operator = event.target.textContent;
            firstNr = +ans
            return firstNr, ans, operator
        }
        else {
            firstNr = +postDisplay;
            operator = event.target.textContent;
            document.querySelector(".display").textContent = "";
            return firstNr, operator;
        }
    }
})


operateBtn = document.querySelector("#operate")
console.log(operateBtn)
operateBtn.addEventListener("click", () => operateFn())

function operateFn() {
secondNr = +postDisplay
ans = operate(operator, firstNr, secondNr)
ansDisp = Math.floor((ans + 0.05)*10)/10
document.querySelector(".display").textContent = ansDisp
postDisplay = ans
firstNr = ans
return ans, firstNr, secondNr
}