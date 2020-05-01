
$(function(){
//Typed Js
$(".typed").typed({
    strings: [" kazi sahazat.", "a web Designer.", "a web Devloper.", "a Photographer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    infinite:true,
    // false = infinite
    loopCount:50,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});

//Navbar bg
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling>150){
    $('.navbar').addClass('bg');
}
else{
    $('.navbar').removeClass('bg');
}
});       
   
    
//animation scroll js
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 67
            }, 1500,);
            return false;
        }
    }
});

    
    
//feedback slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        autoplaySpeed: 2000,
    });

    
    
//Preloader
$("#preloader").delay(500).fadeOut('slow');

// Because only Chrome supports offset-path, feGaussianBlur for now
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}
    
    
//animation scroll js 2
var html_body = $('html, body');
$('.about-slid a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500,);
            return false;
        }
    }
});
    
    
//back-to-top
var html_body = $('html, body');
$('.back-top a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500,);
            return false;
        }
    }
});
 
    
//WOW js
new WOW().init();    

//Navbar bg
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling>150){
    $('.navbar').addClass('bg');
}
else{
    $('.navbar').removeClass('bg');
}
});    


//Skill bar
$(document).ready(function(){
    $('#bar1').barfiller();
});
    
$(document).ready(function(){
    $('#bar2').barfiller();
}); 
    
$(document).ready(function(){
    $('#bar3').barfiller();
}); 
    
$(document).ready(function(){
    $('#bar4').barfiller();
});     

      
    
    
    
});
