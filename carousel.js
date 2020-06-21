var section = document.querySelector('#section-carousel').children;
var carousel = document.querySelector('.actual-carousel');
var count = 0;

console.log(carousel);
console.log(section.length);

function showAllImages() {
  console.log('imma do it like Eli');
  carousel.style.display = 'block';
  carousel.style.opacity = '1';

}


function loop() {
  for (let i=0; i < section.length; i++) {
    section[i].addEventListener('click', (event) => {
      console.log(section[i]);
      showAllImages();
    },true)
  };
}



loop();
