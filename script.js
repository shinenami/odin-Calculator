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

let inputA = null
let inputB = null
let inputOperator = null

function operate(A, operator = '+', B = A) {
    return operator == '+' ? sum(A, B) :
    operator == '-' ? sub(A, B) :
    operator == '*' ? multiply(A, B) :
    operator == '/' ? divide(A, B) :
    sum(A, A)
}

