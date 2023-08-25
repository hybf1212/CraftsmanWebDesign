$(document).ready(function(){

    let count = 0;
    setInterval(function(){
        count++
        count %= 3
        $(".slide>div").eq(count).addClass("act").siblings().removeClass("act")
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