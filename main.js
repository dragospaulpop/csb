/*
Logic:
 - whenever the "#compute" button is pressed
 - retrieve the operands ("#operand1", "#operand2")
 - compute the operation ("#operator")
 - output the result ("#result")
*/

const operand1 = document.querySelector('#operand1')
const operand2 = document.querySelector('#operand2')
const operator = document.querySelector('#operator')
const compute = document.querySelector('#compute')
const result = document.querySelector('#result')

compute.addEventListener('click', (e) => {
  e.preventDefault()
  const value1 = +operand1.value
  const value2 = +operand2.value
  const valueOp = operator.value

  if (value1 !== "" && value2 !== "") {
    switch (valueOp) {
      case '+': result.innerHTML = 'Result: ' + (value1 + value2); break
      case '*': result.innerHTML = 'Result: ' + (value1 * value2); break
      case '-': result.innerHTML = 'Result: ' + (value1 - value2); break
      case '/': result.innerHTML = 'Result: ' + (value1 / value2); break
    }
  } else {
    result.innerHTML = 'Result: you need to input values for both operands!'
  }
})