import { animate } from './helpers'

const modal = () => {
   const buttons = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const modalContent = document.querySelector('.popup-content')
   let widthScreen = window.screen.width;

   buttons.forEach(btn => {
       btn.addEventListener('click', () => {
            console.info('modal.style.display = ', modal.style.display);
           if(widthScreen < 768) {
              modal.style.display = 'block';
           } else {
              modal.style.display = 'block';
                 animate({
                  duration: 1000,
                  timing(timeFraction) {
                     return timeFraction;
                  },
                  draw(progress) {
                     modalContent.style.left = (40 * progress) + '%' 
                  }
               });
              }
       })
   })
   
   modal.addEventListener('click', (e) => {
      console.info('e.target = ', e.target);
      console.info('e.target.type = ', e.target.type);
      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = 'none';
      }

      if (e.target.classList.contains('form-btn') && e.target.type === 'submit') {
         setTimeout(function(){
            modal.style.display = '';
          }, 3 * 1000);
      }
   })
}

export default modal