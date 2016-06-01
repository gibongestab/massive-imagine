  Template.home.onRendered(function() {

        /* smooth scroll */
        if (typeof smoothScroll == 'object') {
          smoothScroll.init();
        }

        /* wow init */
          new WOW().init();


       /* retina */
       
           if (window.devicePixelRatio > 1) {
            $(".retina").imagesLoaded(function () {
                $(".retina").each(function () {
                    var src = $(this).attr("src").replace(".", "@2x.");
                    var h = $(this).height();
                    var w = $(this).width();
                    $(this).attr("src", src).css({height: h, width: 'auto'});
                });
            });
        }
        ;



});
