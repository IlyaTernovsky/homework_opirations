//let n = 5;
//let string = 'строка которую нужно повторить';

//for(let i = 0; i < n; i++) {
 //   console.log(string);
//}
////////Выведите столбец чисел от 1 до 100.///////////////////
//let i = 0;

//while(i < 100) {
//    i++
//    console.log(i);
//}
//for(let i = 1; i <= 100; i++) {
//    console.log(i);
//}

//////////////Выведите столбец чисел от 11 до 33.///////////

//for(let i = 11; i <= 33; i++) {
//    console.log(i);
//}

// let i = 10;

// while(i < 33) {
//     i++
//     console.log(i);
// };

//////////////Выведите столбец четных чисел в промежутке от 0 до 100.///////
//let i = 0;
//while(i <= 100) {
//i++;
//if(i % 2 === 0) console.log(i);
//}

//console.log(i);}
//for(let i = 1; i <= 100; i++) {
//    if(i % 2 === 0) {
//        console.log(i);
//    } 
//}

/////////// С помощью цикла найдите сумму чисел от 1 до 100.///////////

//let i = 0;
//let sum = 0;

//while(i <= 100) {
//    i++;
//    sum += i;
//}

//console.log(sum);

//let sum = 0;

//for(let i = 0; i <= 100; i++) {
//    sum += i;
//}
//console.log(sum);

/////////Найти факториал введенного числа(использовать prompt).////////
/*
let num = 5;
let result = 1;
for (let i = num; i !==0; i--) {
    result = result * i;
}

console.log(result);
*/

    //Дано число 5. Вывести в консоль число 555555555, не используя вычислений.//
/*
let num = 5;
let result = '';
for (let i = 0; i < 9; i++) {
    result += num;
}

console.log(result);
*/
//Перебрать числа от 0 до 300. Если  число четное, делится на 12 без остатка и не равно 48, а результат деления на 12 нечетный, то вывести строку “Ooops”. Если число нечетное и делится на 3, то вывести “Hola”. Если значение ноль, то вывести “Zero” (без использования сравнения).
/*
for(let i = 0; i <= 300; i++) {
    if (i % 2 ===0 && i !==48 && (i/12) % 2 !==0) {
        console.log("Ooops", i);
    } else if (i % 2 !==0 && i % 3 ===0 ) {
        console.log("Hola");
    } else if (!i) {
        console.log("Zero");
    }
}
*/

////Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

//let n = 1000;
//let num = 0;
//for (; n > 50; num++) {
//    n = n / 2;
//    console.log(n + ', ' + num +' итераций');
//}
/*
Найти последовательность чисел, вычисляемую по следующему алгоритму:
Вводится число;
Если четное, то делится на 2, если нечетное, то умножается на 3 и увеличивается на 1;
Полученное число в результате пункта b, становится следующим числом в последовательности и повторяется пункт b.
Алгоритм работает до тех пор, пока число в последовательности не станет равно 1. Результат записать в строку или массив и вывести в консоль.
*/
/*
let i = 100;
let result = [i];
for(; i !==1; ) {
    if (i % 2 ===0) {
        i = i/2;
    } else {
        i = i * 3 + 1;
    }
    result.push(i)
}

console.log(result);
*/

function sayHello(userName = 'Гость') {
    alert(`Привет, ${userName}`);
}

sayHello("Дмитрий")