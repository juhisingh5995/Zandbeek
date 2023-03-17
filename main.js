
// hamburger
$(document).ready(function () {
  $(".hamburger").click(function () {
    // $(".menu").addClass("menu-list");
    $(".menu").toggleClass("menu-list");
    $(".hamburger").toggleClass("active");
  });
});
// scroll 
TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".sectionTitle");
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to("#js-slideContainer", 1, { xPercent: -20 }, "label1");
tl.to("#js-slideContainer", 1, { xPercent: -40 }, "label2");
tl.to("#js-slideContainer", 1, { xPercent: -60 }, "label3");
tl.to("#js-slideContainer", 1, { xPercent: -80 }, "label4");

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "4000%",

})
  .setPin("#js-wrapper")
  .setTween(tl)
  .addIndicators({
     colorTrigger: "none",
     colorStart: "none",
     colorEnd: "none",
  })
  .addTo(controller);
  
  // parallor 
  
  $(".paroller, [data-paroller-factor]").paroller({
    factor: 0.5,            // multiplier for scrolling speed and offset
    factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
    factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
    factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
    factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
    type: 'background',     // background, foreground
    direction: 'horizontal',// vertical, horizontal
    transition: 'transform 0.1s ease' // CSS transition, added on elements where type:'foreground'
});
 
  // parallor foreground
  
  $(".foreground, [data-paroller-factor]").paroller({
    factor: 0.3,            // multiplier for scrolling speed and offset
    factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
    factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
    factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
    factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
    type: 'foreground',     // background, foreground
    direction: 'horizontal',// vertical, horizontal
    transition: 'transform 0.1s ease' // CSS transition, added on elements where type:'foreground'
});

// scroll text


$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.scroll-text ');
  var web_window = $(window);

   //check to see if any animation containers are currently in view
   function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_left_position = web_window.scrollTop();
    var window_right_position = (window_left_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_left_position = $(element).offset().left;
      var element_right_position = (element_left_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_right_position >= window_left_position) && (element_left_position <= window_right_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});
  
