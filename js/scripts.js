//Получаем бургер
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

//Вешаем слушатель событий при его клике - вызываем функцию.
headerBurger.addEventListener("click", function() {
    //Функция добавляет класс или удаляет его.
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

