var numberButtons = document.querySelectorAll(".numbers");
var operatorButtons = document.querySelectorAll(".operators");
var clearButton = document.querySelector(".clear");
var resultButton = document.querySelector(".result");
var inp = document.querySelector("input");

var op = null;
var firstNumber = null;
var secondNumber = null;
var firstNumEntered = false;

function clear() {
    inp.setAttribute("value", "");
    firstNumEntered = false;
}

//Click Numbers
for(var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function(){
        if(!firstNumEntered) {
            inp.setAttribute("value", Number(inp.value + this.textContent));
        }
        else {
            clear();
            inp.setAttribute("value", Number(inp.value + this.textContent));
        }
    });
} 

//clear
clearButton.addEventListener("click", function(){
    clear();
});

//Click Operators for operation
for(var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function(){
        op = this.textContent;
        firstNumber = Number(inp.value);
        firstNumEntered = true;
    });
}

//Click '=' button
resultButton.addEventListener("click", function(){
    if(op === "+") {
        var secondNumber = Number(inp.value);
        inp.setAttribute("value", Number(firstNumber + secondNumber));
    }
    else if(op === "X") {
        var secondNumber = Number(inp.value);
        inp.setAttribute("value", Number(firstNumber * secondNumber));
    }
    else if(op === "-") {
        var secondNumber = Number(inp.value);
        inp.setAttribute("value", Number(firstNumber - secondNumber));
    }
    else if(op === "/") {
        var secondNumber = Number(inp.value);
        inp.setAttribute("value", Number(firstNumber / secondNumber));
    }
});

