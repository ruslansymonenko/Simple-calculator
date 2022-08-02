const operationsList = document.querySelector('#operationsList');
const displayResult = document.querySelector('#displayResult');
const btns = document.querySelector('.btns');

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ['C', 'CE', '/', 'X', '-', '+'];

let firstNumber = '';
let secondNumber = '';
let operation = '';

let operationsChecker = false;

function checkNumber (element) {
    if (numbers.includes(element)) {
        return true
    } else {
        return false
    }
}

function checkOperation (element) {
    if (operations.includes(element)) {
        operationsChecker = true;
        return true
    } else if (numbers.includes(element)) {
        return false
    }
}

function showOnDisplay () {
    
}

btns.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        let checkNum = checkNumber(e.target.textContent);
        let checkOper = checkOperation(e.target.textContent);

        if (checkNum == true && operationsChecker == false) {
            firstNumber += e.target.textContent;
        }

        if (checkOper == true && secondNumber.length == 0) {
            operation += e.target.textContent;
            checkOper = false;
        }

        if (checkNum == true && operation.length >= 1) {
            secondNumber += e.target.textContent;
        }

        console.log(firstNumber, operation, secondNumber);
    }
})

