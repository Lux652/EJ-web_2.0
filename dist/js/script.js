AOS.init({});
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mobile-menu');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
        document.body.classList.toggle('noscroll');
    })
}
const klik = () => {
    const contactPage = document.getElementById('contact_section')
    contactPage.scrollIntoView({ behavior: 'smooth'});
};
navSlide();