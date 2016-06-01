 Template.portfolio.onRendered(function() {


   /* retina fix */

   if (window.devicePixelRatio > 1) {
     $(".retina").imagesLoaded(function() {
       $(".retina").each(function() {
         var src = $(this).attr("src").replace(".", "@2x.");
         var h = $(this).height();
         var w = $(this).width();
         $(this).attr("src", src).css({ height: h, width: 'auto' });
       });
     });
   };


   /* ---------------------------------------------
         portfolio filter set active class
         --------------------------------------------- */

   $('.portfolio-filter li').click(function(event) {
     $(this).siblings('.active').removeClass('active');
     $(this).addClass('active');
     event.preventDefault();
   });


   /* ---------------------------------------------
    isotope | init Isotope
    --------------------------------------------- */

   var $container = $(".portfolio:not(.portfolio-masonry)");
   if ($.fn.imagesLoaded && $container.length > 0) {
     imagesLoaded($container, function() {
       setTimeout(function() {
         $container.isotope({
           itemSelector: '.portfolio-item',
           layoutMode: 'fitRows',
           filter: '*'
         });

         $(window).trigger("resize");
         // filter items on button click
       }, 500);

     });
   }

   /* ---------------------------------------------
    portfolio masonry
    --------------------------------------------- */

   $(window).load(function() {

     var $c = $('.portfolio-masonry');
     if (typeof imagesLoaded == 'function') {
       imagesLoaded($c, function() {

         setTimeout(function() {
           $c.isotope({
             itemSelector: '.portfolio-item',
             resizesContainer: false,
             layoutMode: 'masonry',
             filter: "*"
           });
         }, 500);

       });
     }

   });


   /* ---------------------------------------------
    portfolio individual gallery
    --------------------------------------------- */


   $('.portfolio-slider, .portfolio-slider-alt').each(function() { // the containers for all your galleries
     var _items = $(this).find("li > a");
     var items = [];
     for (var i = 0; i < _items.length; i++) {
       items.push({ src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title") });
     }
     $(this).parent().find(".action-btn").magnificPopup({
       items: items,
       type: 'image',
       gallery: {
         enabled: true
       }
     });
     $(this).parent().find(".portfolio-description").magnificPopup({
       items: items,
       type: 'image',
       gallery: {
         enabled: true
       }
     });
   });


   /* ---------------------------------------------
    portfolio gallery
    --------------------------------------------- */


   $('.portfolio-gallery').each(function() { // the containers for all your galleries
     $(this).find(".popup-gallery").magnificPopup({
       type: 'image',
       gallery: {
         enabled: true
       }
     });
     $(this).find(".popup-gallery2").magnificPopup({
       type: 'image',
       gallery: {
         enabled: true
       }
     });
   });


   /* ---------------------------------------------
    portfolio filtering
    --------------------------------------------- */

   $('.portfolio-filter').on('click', 'a', function() {
     $('#filters button').removeClass('current');
     $(this).addClass('current');
     var filterValue = $(this).attr('data-filter');
     $(this).parents(".text-center").next().isotope({ filter: filterValue });
   });

      /* ---------------------------------------------
         popup link
         --------------------------------------------- */


        $('.popup-link').magnificPopup({
            type: 'image'
            // other options
        });


        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

           /* ---------------------------------------------
         flex slider
         --------------------------------------------- */



            $('.portfolio-slider').flexslider({
                animation: "slide",
                direction: "vertical",
                slideshowSpeed: 3000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $('.portfolio-filter li:eq(0) a').trigger("click");
                        }, 500);
                    });
                }
            });
      

      
            $('.portfolio-slider-alt').flexslider({
                animation: "slide",
                direction: "horizontal",
                slideshowSpeed: 4000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $('.portfolio-filter li:eq(0) a').trigger("click");
                        }, 500);
                    });
                }
            });
        



 });
