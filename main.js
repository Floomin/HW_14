let set = prompt('Введите ваши числа, раделяя запятыми: ');
let mass = set.split(',').map((Number));

if (mass.some(isNaN)) {
    alert('Ошибка: Введите только числа, разделённые запятой!');
}
else {
    let sum = 0;
    for (let i of mass) {
        sum += i;

    }
    let average = sum / mass.length;

    alert(`Среднее арифметическое ваших чисел ${average}`);
}


