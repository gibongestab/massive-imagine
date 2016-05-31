Template.header.onRendered(function() {
  /* ---------------------------------------------
         alternate menu appear
         --------------------------------------------- */

  $("#massive-menu-alt").html('<ul class="menuzord-menu">' + $("#menu-list").html() + "</ul>");


  /* ---------------------------------------------
   massive mega menu
   --------------------------------------------- */

  jQuery("#massive-menu, #massive-menu-alt").menuzord({
    indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
    indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
  });

  var navBottom = $(".nav-bottom").offset();

  $(window).scroll(function() {
    var w = $(window).width();
    if ($(".nav-bottom").length == 0) {
      if (w > 768) {
        if ($(this).scrollTop() > 1) {
          $('header').addClass("sticky");
        } else {
          $('header').removeClass("sticky");
        }
      }
    } else {
      if (w > 768) {
        if ($(this).scrollTop() > navBottom.top + 100) {
          $('header').addClass("sticky");
        } else {
          $('header').removeClass("sticky");
        }
      }
    }
  });


  //left nav remove sticky class

  $(window).scroll(function() {
    var w = $(window).width();
    if (w > 768) {
      $('.left-nav-fixed header').removeClass("sticky");
    }
  });


  /* ---------------------------------------------
   sticky header alt
   --------------------------------------------- */

  $(window).scroll(function() {
    var w = $(window).width();
    if (w > 768) {
      if ($(this).scrollTop() > 1) {
        $('.mainmenu').slideUp(function() {
          $('.menu-appear-alt').css({ position: "fixed", top: 0, left: 0, width: w, zIndex: 99999 });
          $('.menu-appear-alt').slideDown();
        });

      } else {
        $('.menu-appear-alt').slideUp(function() {
          $('.menu-appear-alt').css({ position: "relative", top: 0, left: 0, width: w, zIndex: 99999 });
          $('.mainmenu').slideDown();

        });

      }
    }

    $(".nav-bottom").css("z-Index", 100000);

    if (navBottom) {
      if ($(window).scrollTop() > (navBottom.top)) {
        $(".nav-bottom").css({ "position": "fixed", "top": "0px", "left": "0px" });
      } else {
        $(".nav-bottom").css({ "position": "fixed", top: navBottom.top - $(window).scrollTop() + "px" });
      }
    }

  });
})
