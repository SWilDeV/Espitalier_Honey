//display navbar at second section
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#carousel-sec');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('display', 'flex');
            } 
            else {
                $('.navbar').css('display', 'none');
            }
        });
    }
});


function scrollToAnchor(aid){
    var aTag = $(aid);
    $('html,body').animate({scrollTop: aTag.offset().top+1},'slow');
}
function SwitchActiveClass(btn){
    var aBtn =$(btn);
    $(".nav-item").removeClass("active");
    $(btn).addClass("active");
}

$("#welcome-text").click(function() {
    scrollToAnchor('#carousel-sec');
    SwitchActiveClass("#decouvrez-btn");
});

$("#accueil-btn").click(function() {
    scrollToAnchor('#welcome-section');
    SwitchActiveClass("#accueil-btn");
});

$("#decouvrez-btn").click(function() {
    scrollToAnchor('#carousel-sec');
    SwitchActiveClass("#decouvrez-btn");
});

$("#produits-btn").click(function() {
    scrollToAnchor('#products-sec');
    SwitchActiveClass("#produits-btn");
});

$("#contact-btn").click(function() {
scrollToAnchor('#contact-section');
SwitchActiveClass("#contact-btn");
});