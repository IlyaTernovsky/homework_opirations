//const myFavoriteFilm = {
//    title: 'Lock, Stock and Two Smoking Barrells',
//    releaseDate: 1998,
//    director: "Guy Ritchie",
//    country: "England", 
//};
//myFavoriteFilm.profit = '200000000';
//myFavoriteFilm.showTitle = function () {
//    console.log(myFavoriteFilm.title);
//}
//delete myFavoriteFilm.releaseDate;
//console.log(myFavoriteFilm);
//Реализовать функцию которая будет определять, в каком регистре записан n ////элемент переданной строки, если в верхнем то вернуть true, в противном //////случае вернуть false.
//const isLowerCase = (str, n) => str[n] === str[n].toUpperCase
//console.log(isLowerCase('Hello', 3));

//1. Удаление указанного количества символов из строки

//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

//let str = 'Каждый охотник желает знать';
//function delete_characters(str, length) {

//        return str.slice(0, length);

//};

//console.log(delete_characters(str, 14)); //каждый охотник

//2. Вставить тире между словами строки

//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы //строки необходимо перевести в верхний регистр.

//let str = "HTML JavaScript PHP";

//function insert_dash(str) {

//    return str.toUpperCase().split(' ').join('-');

//}
//console.log(insert_dash(str));

//3. Сделать первую букву строки прописной

//Напишите функцию, которая принимает строку в качестве аргумента и //преобразует регистр первого символа строки из нижнего регистра в верхний.

//let str = "string not starting with capital";  
 
//function cursive_letter(str) {

//    return str[0].toUpperCase()+str.slice(1, str.length);

//}

//console.log(cursive_letter(str));

//4. Первая буква каждого слова заглавная

//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

//const str = "каждый охотник желает знать";  
//const words = str.split(" ");
//function capitalize(str) {

//    for (let i = 0; i < words.length; i++) { 
//        words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
//    } words.join(" ");
    
//}
//console.log(capitalize(str));

//5. Смена регистра символов строки
//Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

//const str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
//function change_register(str) {
//  let str1 = "";
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] == str[i].toUpperCase()) {
//      str1 = str1 + str[i].toLowerCase();
//   } else str1 = str1 + str[i].toUpperCase();
//  }
//  return str1;
//}
//console.log(change_register(str));


//6. Удалить все не буквенно-цифровые символы
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.


const str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
function remove_char(str) {
    
};
