$(function(){
$('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 641,
            settings:{
                slidesToShow: 2,
            }
        }, 
        {
            breakpoint: 521,
            settings:{
                slidesToShow: 1,
            }
        }, 
    ]
});

});