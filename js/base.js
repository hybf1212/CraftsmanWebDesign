$(document).ready(function(){
    setInterval(function(){
        $(".slide").animate({marginLeft : -1200},400, function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-left",0)
        })        
    },3000)

    $(".notice li").eq(0).click(function(){
        $("#popup").removeClass("d-none")
    })
    $("#popup button").click(function(){
        $("#popup").addClass("d-none")
    })
})