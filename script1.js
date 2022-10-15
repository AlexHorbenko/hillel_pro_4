const value1 = Number(prompt('Введіть перше значення'))
const value2 = Number(prompt('Введіть друге значення'))

if (!value1 || !value2) {
    alert('Одне з значень не є числом')
} else {
    const sum1 = value1 + value2
    const sum2 = value1 - value2
    const sum3 = value1 * value2
    const sum4 = value1 / value2

    const result1 = value1 + ' + ' + value2 + ' = ' + sum1
    const result2 = value1 + ' - ' + value2 + ' = ' + sum2
    const result3 = value1 + ' * ' + value2 + ' = ' + sum3
    const result4 = value1 + ' / ' + value2 + ' = ' + sum4

    const final = result1 + '\n' + result2 + '\n' + result3 + '\n' + result4

    alert(final)
}

alert('The end of script1')