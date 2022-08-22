//Получаем бургер
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

//Вешаем слушатель событий при его клике - вызываем функцию.
headerBurger.addEventListener("click", function() {
    //Функция добавляет класс или удаляет его.
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//const q = document.querySelectorAll('*');
//q.forEach(el => el.addEventListener( "click", e => console.log(e.target)));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let btn = document.querySelectorAll(".hidden_btn");

btn.forEach((element) => {
    
    element.addEventListener("click", e =>{
        e.stopPropagation()
        console.log(e.target.innerHTML)
        let hiddenButton = e.target;
        let hiddenBlock = e.target.parentElement.getElementsByClassName("hidden")[0];
            //console.log(e.target.parentElement.getElementsByClassName("hidden")[0]);

        if (hiddenBlock.style.display === "" || hiddenBlock.style.display === "none"){
            hiddenBlock.style.display = "inline";
            hiddenButton.innerHTML = "скрыт";
        } else {
            hiddenBlock.style.display = "none";
            hiddenButton.innerHTML = "Подробнее ...";
        }


    })

});

//scrollToTop
const toTopBtn = document.getElementById('scrollToUp')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200){
        toTopBtn.classList.add('scrollToUp--active');
    }else {
        toTopBtn.classList.remove('scrollToUp--active');
    }
})
//click
toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Catalog read more button
//  const slide1_btn = document.getElementById('item1');
//  const slide1 = document.getElementById(slide1_btn.id + "__slide");
//   slide1_btn.addEventListener("click", function (){
//       console.log(slide1.style)
//       if (slide1.style.display === "" || slide1.style.display === "none" ) {
//           slide1_btn.innerHTML = "скрыть";
//           slide1.style.display = "inline";
//       }else {
//           slide1_btn.innerHTML = "Подробнее ..."
//           slide1.style.display = "none";
//       }
//
//   })
//
//  const slide2_btn = document.getElementById('item2');
//  const slide2 = document.getElementById(slide2_btn.id + "__slide");
//  slide2_btn.addEventListener("click", function (){
//      if (slide2.style.display === "" || slide1.style.display === "none") {
//          slide2_btn.innerHTML = "скрыть";
//          slide2.style.display = "inline";
//      }else {
//          slide2_btn.innerHTML = "Подробнее ...";
//          slide2.style.display = "none";
//      }
//
//  })

 // function readMore(el){
 //     let btn = el.attributes.id
 //     let item = document.getElementById(btn.value + '__slide');
 //
 //     if (item.style.display === "" || item.style.display === "none") {
 //         el.innerHTML = "скрыть"
 //         item.style.display = "inline";
 //     }else {
 //         el.innerHTML = "Подробнее ..."
 //         item.style.display = "none";
 //     }
 //
 //
 // }