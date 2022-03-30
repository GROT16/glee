$(function(){

  $('.trendy-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500
  });

  // var mixer = mixitup('.product')({

  // });

  // var mixer = mixitup('.new__items')({

  // })

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });
  

});