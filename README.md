# mySlider
I have create some sort of slider when i made my practice, it will be pleasure for me if you will use it.
Check it out function slider get this args as object, if you want to use on your own HTML and CSS
content - slider element class (must be used only by slider elements);
nextArrow, prevArrow - arrow elements selectors(must be unique) outside of slider, it is additional not necessary functional;
currentSlide - number of slide that will be displayed by default.
wrapper - slider wrapper element class (must be unique in html document);
fill - slider inner wrapper element (area of image) class (must be unique in html document);
totalCounter - total number of slides element class selectors(must be unique) outside of slider, it is additional not necessary functional;
currentCounter - current number of slides element class selectors(must be unique) outside of slider, it is additional not necessary functional;
dotsIndicators -  navigation dots wrapper element class (must be unique in html document);
dotIndicator - navigation dot element class (must be used only by dots elements);
activeClass - active class for showing active dot or slide.

This is my classes, you can use html and css from repo:
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
