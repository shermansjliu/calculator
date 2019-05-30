// TODO: add display variable
let inputDisplay = ""
let display = document.querySelector('.display > p')
let currentOperator = "";
let numX = 0;
let numY = 0;
function add (numX, numY) {
    return numX + numY;
}

function subtract (numX, numY) {
    return numX - numY;
}

function multiply (numX, numY) {
    return numX * numY;

}

function divide (numX, numY) {
    if (numY == 0) {
        alert("Don't be a smart ass");
        return 0
    }
    return numX / numY;
}

function operator (currentOperator, numX, numY) {
    switch (currentOperator) {

        case '+':

            return add(numX, numY)
            break;
        case '-':
            return subtract(numX, numY)
            break;
        case '÷':
            return divide(numX, numY)
            break;
        case 'x':

            return multiply(numX, numY)
            break;
    }
}
// TODO: Calculator operation
/*
1. When the user starts typing a number, display 'inputNum'
2. If the user clicks on an operation, change the value of 'operator'
2.1. Update an icon to show what operation the user is performing
2.2 Allow the user to continue play with the input number
3. If the user hits equals, isolate the input number, check the value of 'operator' and perform the corresponding
operation on the 'inputNum' and the 'displayNum.''
3.1 if 'operator' is an empty string do nothing
4. After the operation has been performed, set 'operator' to an empty string
*/

let calculatorBtns = document.querySelectorAll('.button');
let equalsBtn = document.querySelector('.equals');
calculatorBtns = [...calculatorBtns]
let inputNum = 0;
let calculating = false;
let result = false;
calculatorBtns.forEach((button) => {
    let classes = button.className.split(" ")
    button.addEventListener('click', () => {
        let operatorDisplay = document.querySelector('.operator')


        if (classes.includes('operation-btn')){

            operatorDisplay.textContent = button.textContent;
            currentOperator = operatorDisplay.textContent

            if (calculating == true) {
                numY = parseInt(display.textContent)
                inputDisplay = `${operator(currentOperator, numX, numY)}`;
                result = true;
                calculating = false;
                numX = parseInt(inputDisplay);
            }
            else {
                numX = parseInt(display.textContent)
                inputDisplay = `0`;
                calculating = true
            }

        }
        else if (classes.includes('equals')) {
               if (currentOperator == ''){
                   alert("Please choose an operator")
               } else{
                   numY = parseInt(display.textContent)
                   inputDisplay = `${operator(currentOperator, numX, numY)}`;
                   operatorDisplay.textContent = '';
                   currentOperator = '';
                   calculating = false;
                   result = true;
               }

           }
           else if (classes.includes('clear')){
               if (button.textContent == 'AC') {
                   inputNum = 0;
                   calculating = false;
                   numX = 0;
                   numY = 0;
                   currentOperator = '';
                   operatorDisplay.textContent = '';
                   inputDisplay = 0;
               }
               else {
                   if (operatorDisplay.textContent){
                       numY = 0;
                       inputNum = 0;
                       inputDisplay = 0;
                   }
                   else {
                       numX = 0
                       inputNum = 0;
                       inputDisplay = 0;
                   }
               }
           }
             else {
                if (parseInt(inputDisplay) == 0){
                    inputDisplay = button.textContent;
                }
                else{
                    if (result) {
                        result = false;
                         inputDisplay = button.textContent;
                    }
                    else {
                        inputDisplay += button.textContent
                    }
                }
        }

        display.textContent = inputDisplay;
        if (display.textContent.length > 10){
            display.textContent = display.textContent.substr(0, 13)
        }
    });
});

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', 'x'];
