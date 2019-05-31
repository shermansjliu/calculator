// TODO: add display variable

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

function operate(exp) {
    exp = exp.split(' ');

    let result = '';
    let i = 0;

    while (i < exp.length -1 ) {
        let firstNum = parseFloat(exp[i]);
        let operator = exp[i + 1]
        let secondNum = parseFloat(exp[i + 2]);
        let result = 0
        if (operator == 'x' ) {
            result = multiply(firstNum, secondNum)

        }
        else if (operator == '÷') {
            result = divide (firstNum, secondNum);
        }
        else if (operator == '+') {
            result = add(firstNum, secondNum);
        }

        else if (operator == '-') {
            result = subtract(firstNum, secondNum);
        }
        i += 2;
        exp[i] = result + '';

    }
    return exp[exp.length-1];
}


const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', 'x', '/', '÷'];
let result = false;
let decimal = false;
calculatorBtns.forEach((button) => {
    button.addEventListener('click', () => {

        let classes = button.className.split(' ');
        //If the last element is not operator append the displaytext

        if (classes.includes("operation-btn")){
            if(operators.includes(display.textContent[display.textContent.length-2]) || display.textContent.length == 0) {
            }
            else{
                    display.textContent +=  ` ${button.textContent} `;
            }
            result = false;
        } else if (!classes.includes('equals') && !classes.includes('decimal')){
            if (result){
                display.textContent =  `${button.textContent}`
                result = false;
            }
            else{display.textContent +=  `${button.textContent}`;}
        }
        //Order of operation handled here
        if (classes.includes('equals')) {

            if (!operators.includes(display.textContent[display.textContent.length-2])) {

                for (let i = 0; i < display.textContent.length; i++) {
                    if (operators.includes(display.textContent[i])) {
                        display.textContent = operate(display.textContent);
                        decimal = false;
                        result = true;
                        break;
                    }
                }
            }
        }

        else if (classes.includes('clear')) {
            if (button.textContent == "C"){
                display.textContent = display.textContent.slice(0, display.textContent.length-2);
            }
            else {
                display.textContent = '';
            }
        }

        else if (classes.includes('decimal')) {
            if (!decimal) {
                display.textContent += button.textContent;
            }
            decimal = true;

        }
        if (display.textContent.length > 16){
                     display.textContent = display.textContent.slice(0, 16);
        }

    })
})
