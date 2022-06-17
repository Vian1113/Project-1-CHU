

$(document).ready(function (){
    $(".faqcontent").click(function(){
        var x = $(this).siblings("p")
        if(x.css("display") == "none"){
            x.slideDown();
        }else{
            x.slideUp();
        };

    });

    $(window).scroll(function(){
        
        var scrolltop =$(window).scrollTop();

        if(scrolltop >=500){
            $("#pagetop").show();
            $("#fixedicon").show();
            $("#socialicon").show();
        }else{
            $("#pagetop").hide();
            $("#fixedicon").hide();
            $("#socialicon").hide();
        }
       


   });










});