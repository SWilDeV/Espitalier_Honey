//display navbar at second section
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#second-img');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar").css('display', 'flex');
        } else {
           $('.navbar').css('display', 'none');
        }
    });
     }
 });

 function scrollToAnchor(aid){
    var aTag = $(aid);
    $('html,body').animate({scrollTop: aTag.offset().top+1},'slow');
}

$("#bienvenue").click(function() {
    scrollToAnchor('#second-img');
 });