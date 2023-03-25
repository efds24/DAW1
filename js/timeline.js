$(document).ready(function() {
    $(window).scroll(function() {
      var sectionTop = $('.container').offset().top;
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop >= sectionTop) {
        var delay = 0;
        $('.fade-in').each(function() {
          var el = $(this);
          setTimeout(function() {
            el.parent().addClass('active');
          }, delay);
          delay += 1000;
        });
      } else {
        $('.container').removeClass('active');
        $('.container').css('height', 'auto');
      }
    });
  });