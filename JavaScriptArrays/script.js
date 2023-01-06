(function () {
    var array = [5, 67, 982, 657, 25, 724, 45, 8, 6, 2, 56, 78, 9, 88, 75, 247, 258, 840, 47, 26658, 354, 6, 699, 85];
    console.log("Исходный массив 1: " + array);
    console.log("Массив 1, отсортированный по убыванию: " + array.slice().sort(function (a, b) {
        return b - a;
    }))
    console.log("Подмассив из первых пяти элементов массива 1: " + array.slice().splice(0, 5));
    console.log("Подмассив из последних пяти элементов массива 1: " + array.slice().splice(array.length - 5, 5));
    console.log("Сумма четных элементов массива 1: " + array.filter(function (e) {
        return e % 2 === 0 || e === 0;
    }).reduce(function (a, b) {
        return a + b;
    }));
})();
(function () {
    var array = [];

    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }

    console.log("Исходный массив 2: " + array);
    var array2 = [];
    array.filter(function (e) {
        return e % 2 === 0 || e === 0;
    }).forEach(function (e) {
        return array2.push(e * e);
    });
    console.log("Список квадратов четных элементов массива 2: " + array2);
})();