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


// Доделать функции

// const firstNumber = Number(prompt('Enter first number'))
// const secondNumber = Number(prompt('Enter second number'))
// const math = prompt('What would you like to do. Press +, -, *, /')

// function Add(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// function Sub(firstNumber, secondNumber) {
//     return firstNumber - secondNumber;
// }

// function Mul(firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
// }

// function Div(firstNumber, secondNumber) {
//     if (secondNumber == 0) {
//         return 'Error';
//     } else {
//         return firstNumber / secondNumber;
//     }
// }

// if (math === '+') {
//     alert(firstNumber + ' + ' + secondNumber + ' = ' + Add(firstNumber, secondNumber))
// } else if (math === '-') {
//     alert(firstNumber + ' - ' + secondNumber + ' = ' + Sub)
// } else if (math === '*') {
//     alert(firstNumber + ' * ' + secondNumber + ' = ' + Mul)
// } else if (math === '/') {
//     alert(firstNumber + ' / ' + secondNumber + ' = ' + Div)
// } else {
//     alert('Please choose one of the type of math methods')
// }

// alert('The end of script2')