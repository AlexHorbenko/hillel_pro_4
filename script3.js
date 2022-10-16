const hour = Number(prompt('Введіть кількість годин у форматі, як зазначено', 18.30))


if (hour > 0) {
    const result = hour * 3600
    alert(result)
} else {
    alert('Введіть кількість годин в форматі 24, як зазначено нижче', 22.30)
}

alert('The end of script3')