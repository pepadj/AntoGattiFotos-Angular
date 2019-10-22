jQuery(document).ready(function($) {

    $(".scroll a, .navbar-brand, .gototop").not('.external').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600, 'swing');
        $(".scroll li").removeClass('active');
        $(this).parents('li').toggleClass('active');
    });
});

var wow = new WOW({
    boxClass: 'wowload', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
});
wow.init();

//  $('.carousel').swipe({
//      swipeLeft: function() {
//          $(this).carousel('next');
//      },
//      swipeRight: function() {
//          $(this).carousel('prev');
//      },
//      allowPageScroll: 'vertical'
//  });

/*	GO TO TOP
   /*-----------------------------------------------------------------------------------*/
$.scrollUp({
    scrollName: 'scrollUp1',
    // Element ID
    scrollDistance: 300,
    // Distance from top/bottom before showing element (px)
    scrollFrom: 'top',
    // 'top' or 'bottom'
    scrollSpeed: 300,
    // Speed back to top (ms)
    easingType: 'linear',
    // Scroll to top easing (see http://easings.net/)
    animation: 'fade',
    // Fade, slide, none
    animationInSpeed: 200,
    // Animation in speed (ms)
    animationOutSpeed: 200,
    // Animation out speed (ms)
    //scrollText: '<span class="gototop"><i class="fa fa-angle-up fa-3x"></i></span>',
    // Text for element, can contain HTML
    scrollTitle: false,
    // Set a custom <a> title if required. Defaults to scrollText
    activeOverlay: '#00FFFF',
    scrollImg: {
        active: true,
        type: 'background',
        src: 'images/top.png'
    },
    // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 0 // Z-Index for the overlay
});

function InitGallery() {

    $('.light-gallery').lightGallery({
        thumbnail: false,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        zoom: false,
        fullScreen: false,
        thumbWidth: 100,
        thumbContHeight: 80,
        videoMaxWidth: '1000px'
    });

    function collage() {

        $('#collage-large').removeWhitespace().collagePlus({
            'fadeSpeed': 5000,
            'targetHeight': 400,
            'effect': 'effect-2',
            'direction': 'vertical',
            'allowPartialLastRow': true
        });

        // $('#collage-medium').removeWhitespace().collagePlus({
        //     'fadeSpeed': 5000,
        //     'targetHeight': 300,
        //     'effect': 'effect-2',
        //     'direction': 'vertical',
        //     'allowPartialLastRow': true
        // });
    };

    $('#collage-large').waitForImages(function() {
        collage();
    });
}

$.fn.waitForImages = function(callback) {
    var $img = $('img', this),
        totalImg = $img.length;

    var waitImgLoad = function() {
        totalImg--;
        if (!totalImg) {
            callback();
        }
    };

    $img.each(function() {
        if (this.complete) {
            waitImgLoad();
        }
    })

    $img.load(waitImgLoad)
        .error(waitImgLoad);
};