$( document ).ready(function() {
});
  $('.owl-carousel').owlCarousel({
    autoplay : true,
    autoplayTimeout : 4000,
  loop:true,
  margin:10,
  nav:true,
    navText : ["<div class='slide__arrow-left'></div>","<div class='slide__arrow-right'></div>"],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:4
    }
  }
})
jQuery("a.data").fancybox({
  type:'swf',
  allowfullscreen: 'true'
});
