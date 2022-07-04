
const btnMinus = document.querySelector('[data-action="minus"]');    // data атрибуты берутся в квадратные ковычки []
/* скопируем и вставим в console, увидим что document.querySelector('[data-action="minus"]' будет выдавать нам целый 
 элемент div и если навести на него в Console, то слева подсветится тот участок которым мы управляем (сейчас это кнопка +)
 */
 
//Аналогчично делаем с кнопкой +
const btnPlus = document.querySelector('[data-action="plus"]');
// console.log(btnMinus); - можно проверить что выведется.

//Создадим счётчик
const counter = document.querySelector('[data-counter]'); // console.log(counter) или в консоле counter, для проверки





/* Далее будем отслеживать клик по этим кнопкам через addEventListener с 2мя аргументами - click и функция.
Где функция это то что произойдёт когда произойдёт данное событие */
btnMinus.addEventListener('click', function () {
 console.log('Minus click');
 // Функция parseInt преобразует первый аргумент в ЧИСЛО по указанному основанию, а если это невозможно - возвращает NaN.
  if ( parseInt(counter.innerText)  > 1 ) {    // если значение строго > 1 тогда можно уменьшать по 1.
      counter.innerText = --counter.innerText; // аналогично ++
  }

});

// Аналогично с кнопкой +
btnPlus.addEventListener('click', function () {
 console.log('Plus click');
 counter.innerText = ++counter.innerText; // innerText может перезаписать новое значение или вернуть то что  внутри тега.
}); // ++counter.innerText с каждым ++ будет сохранено значение в counter.innerText и к нему прибавляться 1. (x=x+1)
 











