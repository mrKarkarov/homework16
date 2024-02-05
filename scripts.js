// Сумма всех элементов массива
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Произведение всех элементов массива
function multiplyArray(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

// Массив четных чисел
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Массив нечетных чисел
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Уникальные значения массива
function uniqueValues(arr) {
    return Array.from(new Set(arr));
}

// Массив положительных чисел
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

// Массив отрицательных чисел
function filterNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

// Массив чисел больше заданного значения
function filterNumbersGreaterThan(arr, value) {
    return arr.filter(num => num > value);
}

// Массив чисел меньше заданного значения
function filterNumbersLessThan(arr, value) {
    return arr.filter(num => num < value);
}

// Массив чисел на четных позициях
function filterNumbersAtEvenPositions(arr) {
    return arr.filter((num, index) => index % 2 === 0);
}

// Пример использования
const numbers = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(numbers));
console.log(multiplyArray(numbers));
console.log(filterEvenNumbers(numbers));
console.log(filterOddNumbers(numbers));
console.log(uniqueValues(numbers));
console.log(filterPositiveNumbers(numbers));
console.log(filterNegativeNumbers(numbers));
console.log(filterNumbersGreaterThan(numbers, 5));
console.log(filterNumbersLessThan(numbers, 7));
console.log(filterNumbersAtEvenPositions(numbers));