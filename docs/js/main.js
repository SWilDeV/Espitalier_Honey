//display navbar at second section
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#second-sec');
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

$("#welcome-text").click(function() {
    scrollToAnchor('#second-sec');
});

$("#accueil-btn").click(function() {
    scrollToAnchor('#welcome-section');
});

$("#decouvrez-btn").click(function() {
    scrollToAnchor('#second-sec');
});

$("#produits-btn").click(function() {
    scrollToAnchor('#third-sec');
});

$("#contact-btn").click(function() {
scrollToAnchor('#contact-section');
});