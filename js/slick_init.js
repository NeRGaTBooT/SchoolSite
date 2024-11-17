$(document).ready(function(){
    $('.section_slider_wrap').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500
    });

    $('.section_slider_rek_wrap').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500
    });

});