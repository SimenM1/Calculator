//math
let ans = 0
let a = 3
let b = 1
let operator = "+"


function add() {
    ans = a + b
    return ans
}

 function subtract() {
    ans = a - b
    return ans
}

function multiply() {
    ans = a*b
    return ans
}

function divide() {
    ans = a/b
    return ans
}

function operate(operator, firstNr, secondNr) {
    a = firstNr
    b = secondNr
    switch(operator) {
        case "+":
            return add()

        case "-":
            return subtract()

        case "*":
            return multiply()

        case "/":
            return divide()
   }
}


operate("+", 2, 6)
console.log(ans)

//gui

function input(txt) {
    let inputDiv = document.querySelector(".display");
    inputDiv.textContent = txt
}

postDisplay = 0

// input
let nrBtns = document.querySelectorAll(".nrs")
console.table(nrBtns)
for(i = 0; i < nrBtns.length; i++) {
    let nr = nrBtns[i].textContent
    nrBtns[i].addEventListener("click", () => {
        preDisplay = document.querySelector(".display").textContent;
        input(preDisplay + "" + nr);
        postDisplay = document.querySelector(".display").textContent;
        console.log(postDisplay)
        return postDisplay
    })
}


