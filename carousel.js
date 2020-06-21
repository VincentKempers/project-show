var section = document.querySelector('#section-carousel').children;
var carousel = document.querySelector('.actual-carousel');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

var carouselClose = document.querySelector('.close');
var carouselImages = document.querySelector('.car-img').children;
var count = 0;

// close carousel
carouselClose.addEventListener('click', () => {
  for (let i=0; i < section.length; i++) {
    carouselImages[i].classList.remove('active');
  }
  carousel.style.display = 'none';
})

// carousel functions
function loop() {
  for (let i=0; i < section.length; i++) {
    section[i].addEventListener('click', (event) => {
      showAllImages();
      getTheRightImage(event.target);
    },true)
  };
}

function showAllImages() {
  carousel.style.display = 'block';
  carousel.style.opacity = '1';
}

function getTheRightImage(element) {
  count = element.attributes.data.value;
  if (count === 0) {
    prev.style.display = 'none';
  } else {
    prev.style.display = 'block';
  }
  carouselImages[count].classList.add('active');
}


prev.addEventListener('click', function() {
  if (count === 0) {
    carouselImages[count].classList.remove('active');
    count = section.length - 1;
    carouselImages[count].classList.add('active');
  } else {
    carouselImages[count].classList.remove('active');
    count--;
    carouselImages[count].classList.add('active');
  }
})



next.addEventListener('click', function() {
  if (count) {
  }
  if (count === section.length - 1) {
    // next.style.display = 'none';
    carouselImages[count].classList.remove('active');
    count = 0;
    carouselImages[count].classList.add('active');
  } else {
    // next.style.display = 'block';
    carouselImages[count].classList.remove('active');
    count++;
    carouselImages[count].classList.add('active');
  }
})

loop();
