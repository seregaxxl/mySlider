function slider({
    content, nextArrow, prevArrow, currentSlide, 
    wrapper, fill, totalCounter, currentCounter, dotsIndicators, 
    dotIndicator, activeClass
}) 
{
    let currentSliderNo = currentSlide,
        offset = 0;
    const sliderContent = document.querySelectorAll(content),
          totalSliderNu = sliderContent.length,
          prevSlide = document.querySelector(prevArrow),
          nextSlide = document.querySelector(nextArrow),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(fill),
          sliderWidth = window.getComputedStyle(slidesWrapper).width;

    slidesField.style.width = 100 * sliderContent.length + '%';
    sliderContent.forEach((e) => {
        e.style.width = sliderWidth;
    });
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow ='hidden';

    function total(i) {
        if (i < 10) {
            document.querySelector(totalCounter).innerHTML = `0${totalSliderNu}`;
        } else {
            document.querySelector(totalCounter).innerHTML = `${totalSliderNu}`;
        }
    }
    total(totalSliderNu);

    function slideNoUpdate(i) {
        if (i < 10) {
            document.querySelector(currentCounter).innerHTML = `0${currentSliderNo}`;
        } else {
            document.querySelector(currentCounter).innerHTML = `${currentSliderNo}`;
        }
    }

    slideNoUpdate(1);


    nextSlide.addEventListener('click', () => {
        if(currentSliderNo == totalSliderNu) {
            currentSliderNo = 1;
        } else {
            currentSliderNo++;
        }
        slideNoUpdate(currentSliderNo);
        sliderNavUpdate(currentSliderNo - 1);
        if (offset == widthToDigits(sliderWidth) * (totalSliderNu - 1) ) {
            offset = 0;
        } else {
            offset += widthToDigits(sliderWidth);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        });

    prevSlide.addEventListener('click', () => {
        if(currentSliderNo == 1) {
            currentSliderNo = totalSliderNu;
        } else {
            currentSliderNo--;
        }
        slideNoUpdate(currentSliderNo);
        sliderNavUpdate(currentSliderNo - 1);
        if (offset == 0 ) {
            offset = widthToDigits(sliderWidth) * (totalSliderNu - 1);
        } else {
            offset -= widthToDigits(sliderWidth);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        });
        const sliderContainer = document.querySelector(dotsIndicators);
        sliderContent.forEach((e,i) => {
            let dot = document.createElement('div');
            dot.classList.add(dotIndicator.slice(1));
            if (i + 1 == currentSliderNo) {
                dot.classList.add('active');
            }
            sliderContainer.append(dot);
            dot.addEventListener('click', (event) => {
                offset = widthToDigits(sliderWidth) * i ;
                slidesField.style.transform = `translateX(-${offset}px)`;
                currentSliderNo = i + 1;
                sliderNavUpdate(i);
                slideNoUpdate(currentSliderNo);
            });
       });
       function sliderNavUpdate(i) {
            document.querySelectorAll(dotIndicator).forEach((elem) => {
                elem.classList.remove(activeClass);
            });
            document.querySelectorAll(dotIndicator)[i].classList.add(activeClass);
       }
       function widthToDigits(w) {
            return +w.replace(/\D/g, '');
       }
}

slider({
    content: '.wrapper__slide',
    offset:0,
    nextArrow: '.wrapper__slider-next',
    prevArrow: '.wrapper__slider-prev',
    currentSlide: 1,
    wrapper: '.wrapper__slider-wrapper',
    fill: '.wrapper__slider-inner',
    totalCounter: '#total',
    currentCounter: '#current',
    dotsIndicators: '.carousel-indicators',
    dotIndicator: '.dot',
    activeClass:'active'
});
