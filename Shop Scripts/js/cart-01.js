
// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');


// Отслеживаем клик на странице

window.addEventListener('click', function (event) {

    // Проверяем что клик был совершён по кнопке "Добавить в корзину"

    if (event.target.hasAttribute('data-cart')) {

        // Находим карточку с товаром, внутри которой был совершён клик

        const card = event.target.closest('.card');  // через closest мы делаем поиск родителя по классу .card

        // Собираем данные с этого товара и записываем их в единый объект productInfo

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),  // получаем картинку на выходе
            title: card.querySelector('.item-title').innerText,              // получаем текст названия на выходе
            itemInBox: card.querySelector('[data-items-in-box]').innerText,  // получаем текст на выходе(в данном примере 6)
            weight: card.querySelector('.price__weight').innerText,          // получаем текст веса на выходе
            price: card.querySelector('.price__currency').innerText,         // получаем текст цены на выходе
            counter: card.querySelector('[data-counter]').innerText,         // получаем текст счётчика на выходе

        };

        // Проверять есть ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
           // Если товар есть в корзине
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
           // Если товара нет в корзине
        } else {

        



        // Далее ниже используем обратные ковычки для того чтобы происходила ИНТЕРПОЛЯЦИЯ, и копируем в них код
        // Собранные  данные подаставим в шаблон  для товара в корзине

        const cartItemHTML = ` <div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-item__top">
                                     <div class="cart-item__img">
                                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                </div>
            <div class="cart-item__desc">
             <div class="cart-item__title">${productInfo.title}</div>
             <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

             <!-- cart-item__details -->
             <div class="cart-item__details">

                 <div class="items items--small counter-wrapper">
                     <div class="items__control" data-action="minus">-</div>
                     <div class="items__current" data-counter="">${productInfo.counter}</div>
                     <div class="items__control" data-action="plus">+</div>
                 </div>

                 <div class="price">
                     <div class="price__currency">${productInfo.price} </div>
                 </div>

             </div>
             <!-- // cart-item__details -->

         </div>
     </div>
 </div>`;

     // Отобразим товар в корзине, выше созданим константу const cartWrapper = document.querySelector('.cart-wrapper');
     // метод insertAdjacentHTM позволяет вставлять кусок разметки в нужно место - например куда(beforeend) - перед началом  
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);  
   
  }
 
  // Сбрасываем счётчик добавленного товара на "1" (когда мы добавили например 5 товаров)
    card.querySelector('[data-counter]').innerText = '1';
    

}

});
