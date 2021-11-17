//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
//let cub = n => n * n;

//let num = cub(5);

//console.log(num); // 25
//или
//function cub (n) {
//    return n*n;
//    }
//    console.log(cub (5));

/////////////////Сделайте функцию, которая возвращает сумму двух чисел.



//let sum = (a,b) => a + b;

//console.log(sum(1,2)); // результат 3

// или 

//function sum (a,b) {
//    return a + b;
//}

//console.log(sum(1,2));



//////////Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

//function minusDel (x, y, z) {
//    return (x - y)/z;
//    }

//    console.log(minusDel(6, 2, 2)); ///результат 2

/////////Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

//function getStringDay (number) {
//    if (number === 1) {
//        return "Понедельник";
//    } else if (number === 2) {
//        return "Вторник";
//    } else if (number === 3) {
//        return "Среда";
//    } else if (number === 4) {
//        return "Четверг";
//    } else if (number === 5) {
//        return "Пятница";
//    } else if (number === 6) {
//        return "Суббота";
//    } else if (number === 7) {
//        return "Воскресенье";
//    }
//}
//console.log(getStringDay(7)); //ответ: Воскресенье

// Или можно в Switch Case

//function getStringDay(number) {
//    switch (number) {
//        case 1: {
//            return "Понедельник";
//        }
//        case 2: {
//            return "Вторник";
//        }
//        case 3: {
//            return "Среда";
//        }
//        case 4: {
//            return "Четверг";
//        }
//        case 5: {
//            return "Пятница";
//        }
//        case 6: {
//            return "Суббота";
//        }
//        case 7: {
//            return "Воскресенье";
//        }
//    }
//}
//console.log(getStringDay(7));

//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false

//const isEqual = (a,b) => {
//    if (a === b) {
//        return true;
//    } else {
//        false;
//    }
//}
//console.log(isEqual(7, 7)); ///TRUE

///ИЛИ
//const isEqual = (a,b) => a === b;
//console.log(isEqual(7, 1)); ///FALSE

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
//больше 10 - пусть вернет true, а если нет то - false

//const isSum = (a,b) => a + b > 10;

//console.log(isSum(7, 12)); // TRUE

// Или

//const isSum = (a,b) => {
//    if ((a + b) > 10) {
//        return true;
//    } else {
//        false;
//    };
//};
//console.log(isSum(7, 22)); //true

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false

//let negative = function(n) {
//    if ( n < 0 ) {
//        return true;
//    } else {
//        return false;
//    };
//};

//console.log(negative(-1)); //TRUE

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

//function isNumberInRange(num) {
//    return (num > 0 && num <10);
//    }
//
//    console.log(isNumberInRange(5)); //true

//ИИЛИ

//let isNumberInRange = (num) => num > 0 && num < 10;

//console.log(isNumberInRange(5));



//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

//function color(r = 0, g = 0, b = 0) {
//    return "rgb(" + r + ", " + g + ", " + b  + ")";
//}
//   
//console.log(color(23, 100)); ////rgb(23, 100, 0)

//Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.



//Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 

//function mult(num1 = 1, num2 = 1 , num3 = 2) {
//    let result=1;
//    for (let i = 1; i <= num3; i++) {
//        result = result * num1 * num2
//   }
//    return result;
//}

//console.log(mult(7,3,1)); // 21

//Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами, расположенными в алфавитном порядке /////НЕ РАЗОБРАЛСЯ

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. ////НЕ РАЗОБРАЛСЯ

//function isEven(num) {
//    return num % 2 == 0;
//    }
    
//    console.log(isEven(8)); //TRUE

//ИЛИ

//const isEven = (num) => num % 2 == 0;
//console.log(isEven(8));