(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu')
          .toggleClass('menu_state_open');
      });
      
      $('.menu__links--item').on('click', function() {

  
        $(this).closest('.menu')
          .removeClass('menu_state_open');
      });
    });

    $('.slider').slick({
      cssEase: 'linear',
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
    $('.slider2').slick({
      dots:false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: 'linear',
      prevArrow: $('.prev2'),
      nextArrow: $('.next2'),
      responsive: [
        {
          breakpoint: 1264,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 968,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
              ]
    });
 
      
  })(jQuery);

 