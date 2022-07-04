// Будем отслеживать клик на всей странице.
// Добавляем прослушку на всём окне.

window.addEventListener('click', function (event) {   // Добавим событие event в параметр функции.
 
 // Объявляем переменную для счётчика. Отказавшись от Const и объявлении её внутри блока вне которого не будет видна. 
 let counter;

 
 // Проверяем клик строго по кнопкам Плюс или Минус.
 if (event.target.dataset.action === 'plus' || event.target.dataset.action ==='minus') {
 
   // Находим обёртку счётчика на которую нажмём.
    const counterWrapper = event.target.closest('.counter-wrapper');
    
   // находим div с числом счётчика этой обёртки.
    counter = counterWrapper.querySelector('[data-counter]');
 }
   // console.log(event.target); - нам даёт получать ЛЮБОЙ html элемент в консоле по которому кликаем в браузере.
   // Далее когда мы кликнули на нужный элемент через event.target,то обратимся к его data атрибуту action, через dataset.
   // console.log(event.target.dataset.action) при нажатии на + или - на любой карточке, покажет minus или plus  в консоле.
 
// условие проверяет является ли этот элемент по которому кликнули Плюс.
  if (event.target.dataset.action ==='plus') { 
        counter.innerText = ++counter.innerText;
    }   

// условие проверяет является ли этот элемент по которому кликнули Минус.
 if (event.target.dataset.action ==='minus') { 
       
    if ( parseInt(counter.innerText)  > 1 ) {    // для того чтобы значение не было < 1 или -1
        counter.innerText = --counter.innerText; 
    
      } else if (event.target.closest('.cart-wrapper')  && parseInt(counter.innerText)  ===  1)  {
        // Проверка на товар который находится в корзине
          
         console.log('IN CART!!!!');

        // Удаляем товар из корзины 

        event.target.closest('.cart-item').remove();

        
     
     }
      


    }   


    

});