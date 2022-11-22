
    (function(jQuery) {

        "use strict";


        jQuery(window).on('load', function(e) {

         $("#type").html("");  
         $("#entitle").html("Enquiry Now");
         $("#closebtn").click(function() {
            $("#type").html("");  
         $("#entitle").html("Enquiry Now");
        });

             jQuery('.pt-button, a').on('click',function(e){

            // e.preventDefault();
        });

            /*------------------------
                    Page Loader
            --------------------------*/
            jQuery("#pt-loading").fadeOut();
            jQuery("#pt-loading").delay(0).fadeOut("slow");




    /*------------------------
           valadition 
    --------------------------*/
   
    jQuery('.contact-bt button').on('click',function(e){

        jQuery('input').each(function() {

            // console.log(jQuery(this).val().length > 0);
           if(jQuery(this).val().length === 0) {
                jQuery(this).next('span').css('display','block');
                jQuery("form").addClass("register_form");    
           }
        });
    });

     /*------------------------
      Owl Carousel
      --------------------------*/
      jQuery('.owl-carousel').each(function () {
         var app_slider = jQuery(this);
         app_slider.owlCarousel({
            items: app_slider.data("desk_num"),
            loop: app_slider.data("loop"),
            margin: app_slider.data("margin"),
            nav: app_slider.data("nav"),
            dots: app_slider.data("dots"),
            autoplay: app_slider.data("autoplay"),
            autoplayTimeout: app_slider.data("autoplay-timeout"),
            navText: ["<i><img src='images/prev-arrow.webp'></i><span>Prev</span>", "<span>next</span><i><img src='images/next-arrow.webp'></i>"],
            responsiveClass: true,
            responsive: {
               // breakpoint from 0 up
               0: {
                  items: app_slider.data("mob_sm")
               },
               // breakpoint from 480 up
               480: {
                  items: app_slider.data("mob_num")
               },
               // breakpoint from 786 up
               786: {
                  items: app_slider.data("tab_num")
               },
               // breakpoint from 1023 up
               1023: {
                  items: app_slider.data("lap_num")
               },
               1199: {
                  items: app_slider.data("desk_num")
               }
            }
         });
      });



//       jQuery('#back-to-top').fadeOut();
// jQuery(window).on("scroll", function() {
// if (jQuery(this).scrollTop() > 250) {
// jQuery('#back-to-top').fadeIn(1400);


// } else {
// jQuery('#back-to-top').fadeOut(400);

// }
// });
// jQuery('#top').on('click', function() {
// jQuery('top').tooltip('hide');
// jQuery('body,html').animate({
// scrollTop: 0
// }, 100);
// return false;
// });

  jQuery('.navigation-menu .colorlib-nav-toggle').on('click',function(e){
    jQuery('body,html').addClass("menu-show");
    });

  jQuery('#colorlib-main-nav .colorlib-nav-toggle').on('click',function(e){
    jQuery('body,html').removeClass("menu-show");
    });




    
});

   $(".enquire-bt a, .plan-btn").click(function() {
      $(".contact-form").addClass("active");
   });
   $(".closeIcon").click(function() {
      $(".contact-form").removeClass("active");
   });

   // click on tab scroll to that section
   $(".link-tag, .enquire-bt a").click(function(t) {
      t.preventDefault();
      var e = $(this).attr("data-tab");
      $("html, body").animate({
         scrollTop: $('#'+e).offset().top - $("header").innerHeight() - 2
      }, 500), $(this).addClass("active").siblings().removeClass("active");
      $('body,html').removeClass("menu-show");
   })

})(jQuery);

function isNumber(evt) {
   evt = (evt) ? evt : window.event;
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
       alert("Please enter only Numbers.");
       return false;
   }

   return true;
}
function openenquirymodel(type){
   $("#type").html("");  
   $("#entitle").html("");
   if(type =='floor'){
      $("#type").html("REQUEST FOR FLOOR PLAN");
   }
   if(type=='master'){
      $("#type").html("REQUEST FOR MASTER PLAN");
   }
   if(type=='unit'){
      $("#type").html("REQUEST FOR UNIT PLAN");
   }
   if(type=='enquiry'){
      $("#type").html(""); 
      $("#entitle").html("Enquiry Now");
   }

   $("#contact").addClass("active");
}