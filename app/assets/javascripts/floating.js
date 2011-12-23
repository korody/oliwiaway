    var name = "#baloon";
    var menuYloc = null;

    $(document).ready(function(){
        menuYloc = parseInt($(name).css("left").substring(0,$(name).css("left").indexOf("%")))
        $(window).scroll(function () {
            var offset = menuYloc+$(document).scrollTop()+"px";
            $(name).animate({top:offset},{duration:500,queue:false});
        });
    });