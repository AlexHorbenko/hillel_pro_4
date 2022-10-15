const firstNumber = Number(prompt('Enter first number'))
const secondNumber = Number(prompt('Enter second number'))
const math = prompt('What would you like to do. Press +, -, *, /')

const result1 = firstNumber + secondNumber
const result2 = firstNumber - secondNumber
const result3 = firstNumber * secondNumber
const result4 = firstNumber / secondNumber

if (math === '+') {
   alert(firstNumber + ' + ' + secondNumber + ' = ' + result1)
} else if (math === '-') {
    alert(firstNumber + ' - ' + secondNumber + ' = ' + result2)
} else if (math === '*') {
    alert(firstNumber + ' * ' + secondNumber + ' = ' + result3)
} else if (math === '/') {
    alert(firstNumber + ' / ' + secondNumber + ' = ' + result4)
} else {
    alert('Please choose one of the type of math methods')
}

alert('The end of script2')