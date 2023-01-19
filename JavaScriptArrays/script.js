(function () {
    var array1 = [5, 67, 982, 657, 25, 724, 45, 8, 6, 2, 56, 78, 9, 88, 75, 247, 258, 840, 47, 26658, 354, 6, 699, 85];
    console.log("Исходный массив 1: " + array1);

    array1.sort(function (element1, element2) {
            return element2 - element1;
        });

    console.log("Массив 1, отсортированный по убыванию: " + array1);
    console.log("Подмассив из первых пяти элементов массива 1: " + array1.slice(0, 5));
    console.log("Подмассив из последних пяти элементов массива 1: " + array1.slice(array1.length - 5, array1.length));

    var evenElementsSum = array1.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (sum, currentElement) {
            return sum + currentElement;
        }, 0);

    console.log("Сумма четных элементов массива 1: " + evenElementsSum);

    var array2 = [];

    for (var i = 1; i <= 100; i++) {
        array2.push(i);
    }

    console.log("Исходный массив 2: " + array2);

    var array3 = array2.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return e * e;
        });

    console.log("Список квадратов четных элементов массива 2: " + array3);
})();