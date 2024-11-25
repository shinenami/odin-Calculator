function sum(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return b == 0 ? 'bruh' : a / b
}

const inputA = document.getElementById("inputA")
const inputB = document.getElementById("inputB")
const inputOperator = document.getElementById("operator")
const buttons = document.getElementById("buttons")

inputA.textContent = "123456"

function operate(A, operator, B) {

    return operator == '+' ? sum(A, B) :
    operator == '-' ? sub(A, B) :
    operator == '*' ? multiply(A, B) :
    operator == '/' ? divide(A, B) :
    sum(A, A)
}

function changeDisplay(button) {

}

function clear() {
    inputA.textContent = '0'
    inputOperator.textContent = ''
    inputB.textContent = ''
}

function backspace() {
    if (inputB.textContent != '') {
        inputB.textContent = inputB.textContent.slice(0, -1)
        return
    }
    if (inputOperator.textContent != '') {
        inputOperator.textContent = inputOperator.textContent.slice(0, -1)
        return
    }
    if (inputA.textContent != '') {
        inputA.textContent = inputA.textContent.slice(0, -1)
    }

    if (inputA.textContent.length == 0) {
        inputA.textContent = '0'
    }
}


function addNum (num) {
    if (inputOperator.textContent != '') {
        inputB.textContent += num
    } else {
        inputA.textContent = (inputA.textContent == 0 ? num : inputA.textContent + num)
    }
}

function addOperator (opr) {
    
    if (inputOperator.textContent != '' && inputB.textContent != '') {
        equal()
        inputOperator.textContent = opr
    } else {
        inputOperator.textContent = opr
    }
}
function equal() {
    inputA.textContent = operate(+inputA.textContent, inputOperator.textContent, +inputB.textContent)
    inputB.textContent = ''
    inputOperator.textContent =  ''
}

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains('number')) {
        addNum(e.target.id.slice(4))
        return
    }
    if (e.target.classList.contains('operator')) {
        addOperator(e.target.textContent)
        return
    }
    if (e.target.classList.contains('utility')) {
        switch (e.target.id) {
            case 'clear':
                clear()
                break;
            case 'backspace':
                backspace()
                break;
            case 'equal':
                equal()
                break;
        }
    }
})