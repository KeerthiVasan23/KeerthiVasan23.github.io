(function ($) {
    jQuery(document).ready(function($){
    /*====================================================
        background-image flickering solution for mobile
        =======================================================*/
         var bg = jQuery("#home");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
      }
      resizeBackground();
    /*==========================
        Intro typer
    ============================*/
    var element = $(".element");

        $(function() {
            element.typed({
                strings: ["I am Me", "And that's what makes me", "UNIQUE !"],
                typeSpeed: 100,
                loop: true,
            });
        });  
        });
}(jQuery));	

