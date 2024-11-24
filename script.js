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
    return a / b
}

const inputA = document.getElementById("inputA")
const inputB = document.getElementById("inputB")
const inputOperator = document.getElementById("operator")
const buttons = document.getElementById("buttons")

inputA.textContent = "1234"

function operate(A, operator = '+', B = A) {
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
    }
    if (inputOperator.textContent != '') {
        inputOperator.textContent = inputOperator.textContent.slice(0, -1)
    }
    if (inputA.textContent != '') {
        inputA.textContent = inputA.textContent.slice(0, -1)
    }
    
    if (inputA.textContent.length == 0) {
        inputA.textContent = '0'
    }
}

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains('number')) {
        
    }
    if (e.target.classList.contains('operator')) {
        
    }
    if (e.target.classList.contains('utility')) {
        switch (e.target.id) {
            case 'clear':
                clear()
                break;
            case 'backspace':
                backspace()
                console.log('back')
                break;

        }
    }
})