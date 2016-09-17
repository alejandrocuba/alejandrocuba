//- Preloader
$(window).load(function() {
  $('.loader').fadeOut();
  $('.page-loader').fadeOut('slow');
});



/* ------------ *
 * Module fade *
/* ---------- */
var $window = $(window);
$(".module-fade").each(function() {
  var self = $(this);
  $window.scroll(function() {
    var topScroll = $(document).scrollTop();
    if (topScroll <= self.height()) {
      self.css('opacity', (1 - topScroll/self.height() * 1.1));
    }
  });
});
