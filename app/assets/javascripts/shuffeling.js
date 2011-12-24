$(function() {

    function scroll(direction) {

        var scroll, i,
                positions = [],
                here = $(window).scrollTop(),
                collection = $('.posts');

        collection.each(function() {
            positions.push(parseInt($(this).offset()['top'],10));
        });

        for(i = 0; i < positions.length; i++) {
            if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
            if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
        }

        if (scroll) {
            $.scrollTo(scroll, {
                duration: 750       
            });
        }

        return false;
    }

    $("#next,#prev").click(function() {        
        return scroll($(this).attr('id'));        
    });

    $(".scrolltoanchor").click(function() {
        $.scrollTo($($(this).attr("href")), {
            duration: 750
        });
        return false;
    });

});