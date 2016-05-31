  Template.home.onRendered(function() {

        /* smooth scroll */
        if (typeof smoothScroll == 'object') {
          smoothScroll.init();
        }

        /* wow init */
          new WOW().init();


});
