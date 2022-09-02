$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".headerCol").addClass("fixedHeader");
    } else {
      $(".headerCol").removeClass("fixedHeader");
    }
  });
});


$('.toggle').click(function(){
  $('html').toggleClass('actNav');
});
$('.menuBackDrop, .data-scroll').click(function(){
  $('html').removeClass('actNav');
});



$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
    });
    $(".parallax-x").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + "0px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
    });
});


var swiper = new Swiper(".tokenSwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});


var swiper = new Swiper(".roadmapSwiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
  breakpoints: {
    640: {
      slidesPerView: "auto",
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


var swiper = new Swiper(".marqueeSlider2", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 7000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

let SwiperBottom = new Swiper('.marqueeSlider1', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 7000,
  autoplay: {
    delay: 1,
    reverseDirection: true
  },
  loop: true,
  loopedSlides: 4,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});




$("[data-scroll-to]").click(function() {
  var $this = $(this),
      $toElement      = $this.attr('data-scroll-to'),
      $offset         = $this.attr('data-scroll-offset') * 1 || 0,
      $speed          = $this.attr('data-scroll-speed') * 1 || 500;
  $('html, body').animate({
    scrollTop: $($toElement).offset().top + $offset
  }, $speed);
});


var swiper = new Swiper(".accordionSlider", {
  // effect: "creative",
  effect: "fade",
  // direction: "vertical",
  // mousewheel: true,
  // mousewheel: true,
  // loopFillGroupWithBlank: false,
  mousewheel: {
    mousewheelControl: true,
    releaseOnEdges: true
  },
  speed: 2000,
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, "0%", -1],
  //   },
  //   next: {
  //     translate: [0, "100%", 0],
  //   },
  // },
});



$('.videoCol').click(function () {
  if($(this).find(".video").get(0).paused){
    $(this).find(".video").get(0).play();
    $(this).find(".playpause").fadeOut();
    }else{
      $(this).find(".video").get(0).pause();
      $(this).find(".playpause").fadeIn();
    }
});
