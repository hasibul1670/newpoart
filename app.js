$(document).ready(function(){


$(".slider").slick({

    arrows:false,
    dots:true,
    appendDots :'.slider-dots',
    dotsclass:'dots'
    



});

let hum = document.querySelector('.hum');
let time = document.querySelector('.time');
let mob = document.querySelector('.mob');

hum.addEventListener('click' , function(){
mob.classList.add('open');
});

time.addEventListener('click' , function(){

    mob.classList.remove('open');
    
});



})
    