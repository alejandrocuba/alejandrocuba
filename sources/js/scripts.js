$(function () {
  /* ------------ *
   * Module fade *
  /* ---------- */
  var $window = $(window);
  $(".module-fade").each(function() {
    var self = $(this);
    $window.scroll(function() {
      var topScroll = $(document).scrollTop();
      if (topScroll <= self.height()) {
        self.css('opacity', (1 - topScroll/self.height() * 1));
      }
    });
  });

  $(".portfolio article").each(function(index, el) {
    $(el).lightcase({
      href: $(el).data('href'),
      speedIn: 200,
      speedOut: 200,
      overlayOpacity: .5,
      showSequenceInfo: false
    })
  });
});
