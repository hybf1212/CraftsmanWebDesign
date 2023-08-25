$(document).ready(function(){
    setInterval(function(){
        $(".slide").animate({marginTop : -300},400,function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-top",0)
        })
    },3000)

    $(".notice-gallery li > span").click(function(){
        $(this).parent().addClass("on").siblings().removeClass('on')        
    })
   
    $(".notice li").eq(0).click(function(){
        $("#popup").removeClass("d-none")
    })
    $("#popup button").click(function(){
        $("#popup").addClass("d-none")
    })
})