const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upBotton = document.querySelector('.up-button');
const downBotton = document.querySelector('.down-button');
const slideLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

//to take 4th div on top
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;
// slideLeft.style.top = `-300vh`;

upBotton.addEventListener('click', () => changeSlide('up'));
downBotton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight;
  // console.log(sliderHeight);
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }

  //need to know how activeSlideIndex was incremented outside function
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
