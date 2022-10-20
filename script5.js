// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

// console.log('start');
// let num = ''

// for (let i=20; i < 30; i = i + 0.5) {
//     num += i + 0.5 + ' '
// }
// let converted = num.replace(/\./g, ',')
// console.log(converted);

// console.log('end');


// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

// console.log('start');
// let num = ''

// for (let i=0; i <= 100; i = i + 10) {
//     num = i * 27
//     console.log(num);
// }

// console.log('end');


// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

// console.log('start');
// const num = Number(prompt('Enter any whole number from 1 to 100'))

// for (let i = 1; i <= 100; i++) {
//     if (i * i < num) {
//         console.log(i * i);
//     }
// }
// console.log('end');



// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// console.log('start');

// let num = Number(prompt('Enter an enteger'))
// let simple = true

// for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) {
//         simple = false;
//         break
//     }
// }

// if (simple) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// console.log('end');


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

console.log('start');

let num = Number(prompt('Enter any number'))

for (let i = 1; i <= num; i++) {
    if (3 ** i === num) {
        console.log(num);
    }
}

console.log('end');