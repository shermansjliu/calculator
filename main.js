// TODO: add display variable
let inputNum = ""
let display = document.querySelector('.display > p')
let currentOperator = "";

function add (numX, numY) {
    return numX + numY;
}

function subtract (numX, numY) {
    return numX - numY;
}

function multiply (numX, numY) {

}

function divide (numX, numY) {

}

function operator (opeartion, displayNum, inputNum) {

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
calculatorBtns = [...calculatorBtns]

calculatorBtns.forEach((button) => {
    let classes = button.className.split(" ")
    button.addEventListener('click', () => {
        let value = button.textContent
        
        if (classes.includes('operation-btn')){
            if (value == 'x'){
                inputNum += '*';
            }
        } else {
                inputNum += button.textContent

        }

        display.textContent = inputNum;
    });
});
