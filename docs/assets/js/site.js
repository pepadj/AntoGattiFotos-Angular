// Write your Javascript code.
var swiper;

window.onload = function () {

    InitSwiperAndFacebook();

    //console.log("Ejecutado onload");
};

function InitButtonFace() {

    var id = 'facebook-jssdk';
    var s = 'script';

    var js, fjs = document.getElementsByTagName(s)[0];
    //if (document.getElementById(id)) return;
    js = document.createElement(s);
    js.id = id;
    js.async = false;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);

    //console.log(js);
    //console.log(fjs);
}

InitSwiperAndFacebook = function () {      

    InitButtonFace();

    swiper = new Swiper('.swiper-container', {
        //spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    if (typeof (FB) != 'undefined'&& FB != null) { FB.XFBML.parse(); }
}
