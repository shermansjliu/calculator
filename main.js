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
        if (operator == 'x || *' ) {
            result = multiply(firstNum, secondNum)

        }
        else if (operator == '÷' || '/') {
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
let pressedButton = "";
let display = document.querySelector('.display > p');

function clear () {
    if (display.textContent[display.textContent.length-1] == ' ') {
        display.textContent = display.textContent.slice(0, display.textContent.length-3);
    } else {
        display.textContent = display.textContent.slice(0, display.textContent.length-1);
    }

}

function calculate () {
    if (!operators.includes(display.textContent[display.textContent.length-2]) && display.textContent[display.textContent.length-1] != '.') {
        for (let i = 0; i < display.textContent.length; i++) {
            if (operators.includes(display.textContent[i])) {
                display.textContent = operate(display.textContent).slice(0, 16);
                decimal = false;
                result = true;
                break;
            }
        }
    }
}

function addOperator (operator) {
    if(!(operators.includes(display.textContent[display.textContent.length-2]) || display.textContent.length == 0)) {
        display.textContent +=  ` ${operator} `;
    }
}

function addDecimal () {
    let expression = display.textContent.split(' ');

    if (display.textContent.length < 1) {
        display.textContent += '.';
    }
    else {

        for (let i = 0; i < expression.length; i++) {
            if (parseFloat(expression[i])) {
                if(!expression[i].split('').includes('.') ) {
                    display.textContent += '.';
                }
            } else if (expression[i] == '') {
                display.textContent += '.';
            }
        }
    }


    decimal = true;
}
window.addEventListener('keydown', (e) => {

    if (e.code == "Backspace") {
        clear();
    }
    else if (operators.includes(e.key)) {
        addOperator (e.key);


    }
    else if (e.key == '=') {
        calculate();
    }
     else if (parseInt(e.key)) {
         display.textContent += e.key;
     }
     else if (e.key == '.') {
         addDecimal ();
     }

});
const calculatorBtns = [... document.querySelectorAll('.button')];
calculatorBtns.forEach((button) => {
    button.addEventListener('click', () => {


        let classes = button.className.split(' ');
        //If the last element is not operator append the displaytext

        if (classes.includes("operation-btn")){
            addOperator (button.textContent);

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
            calculate();
        }

        else if (classes.includes('clear')) {
            if (button.textContent == "C"){
                display.textContent = '';
            }
            else {
                display.textContent = '';
            }
        }

        else if (classes.includes('decimal')) {
            addDecimal ();

        }
        if (display.textContent.length > 16){
                     display.textContent = display.textContent.slice(0, 16);
        }

    })
})


//Key board functionality
