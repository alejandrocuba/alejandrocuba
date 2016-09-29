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
        self.css({opacity: 1 - topScroll/self.height() * .8});
      }
    });
  });

  var $portfolio = $(".portfolio")
  // preload images
  // $(".screenshot", $portfolio).each(function(index, el) {
  //   $("<img />").attr({ src: $(el).attr('src') });
  // });

  /* ------ *
   * Modal *
  /* ---- */
  $("article", $portfolio).each(function(index, el) {
    $(el).lightcase({
      href: $(el).data('href'),
      speedIn: 150,
      speedOut: 100,
      overlayOpacity: .75,
      showSequenceInfo: false,
      maxWidth: 1200,
      maxHeight: 960
    })
  });
});
