'use strict';

$(function() {
  const $contact = $(".contact");

  window.addEventListener('scroll', () => {
    const viewportHeight = $(window).height();
    const contentsHeight = $(document).height();
    const scrolltop = $(window).scrolltop();

    if ((contentsHeight - (scrolltop + viewportHeight)) < 100) {
      if (!$contact.hasclass("open")) {
        $contact.addclass("open")
      }
    } else {
      if ($contact.hasclass("open")) {
        $contact.removeclass("open");
      }
    }
  });
});
