$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        // adaptiveHeight:true,
        speed:1000,
        easing:'easy',
        infiniti:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        slidesToShow:1,
        // responsive:[
        //     {
        //     breakpoint:768,    
        //     settings: {
        //         slidesToShow:2    
        //     }
        //     }
        // ]

    });
});