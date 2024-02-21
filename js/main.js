// mobile nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    mobileNav.classList.toggle(navClosedClass)
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
   
});

// swiper
const swiper = new Swiper('.swiper', {
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, 
   
  });

  // faq
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item)=>{
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', ()=> {
      const isOpen = item.classList.toggle('open')
      const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
      const iconElement = faqBtn.querySelector('i');
      iconElement.classList = '${iconClass} text-2xl';
    });
  });

  // scroll reveal animations
  const sr = scrollreveal({
    origin:'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset: true //resets animation
  })