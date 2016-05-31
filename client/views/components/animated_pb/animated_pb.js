Template.animatedPB.onRendered(function() {
  var progressBar = this.find(".animated-pb");
  $(progressBar).data('animated', 0);
  if ($.fn.visible) {
    animateProgressbar(progressBar);
  }

  $(window).on("scroll", function() {
    if ($.fn.visible) {
		animateProgressbar(progressBar);
    }
  });

  function animateProgressbar(pb) {
    if ($(pb).data('animated') == 0) {
      if ($(pb).visible()) {
      	console.log('is visible');
        $(pb).css("width", $(pb).attr("aria-valuenow") + "%");
        $(pb).data('animated', 1);
      }
    }
  }
})
