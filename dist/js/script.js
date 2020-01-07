const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const social = document.querySelector('.social');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('menu-active');
        social.classList.toggle('social-active');
        burger.classList.toggle('toggle');
    })
    
}

navSlide();