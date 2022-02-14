$(function(){
    $(".step1 button").click(function(){
        $(".step2").show();//.fadeIn(); 서서히 나타남.
    });
    $(".step2 button").click(function(){
        $(".step3").show();//.fadeIn(); 서서히 나타남.
    });
    $(".step3 button").click(function(){
        $(".step4").show();//.fadeIn(); 서서히 나타남.
    });
    $(".step4 button").click(function(){
        $(".step5").show();//.fadeIn(); 서서히 나타남.
    });
    $(".step5 button").click(function(){
        $(".step6").show();//.fadeIn(); 서서히 나타남.
    });
    $(".step6 button").click(function(){
        $(".step2,.step3,.step4,.step5,.step6").hide();//.fadeOut(); 서서히 사라짐.
    });

    $(".step1 li, .step2 li, .step3 li, .step4 li,.step5 li ").click(function(){
        $(this).toggleClass("c").siblings().removeClass("c");
    });
});
