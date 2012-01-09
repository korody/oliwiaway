$(document).ready(function(){
    var animateTime = 500,
        offsetStep = 500,
        scrollWrapper = $('.scrollable');
    
    //event handling for buttons "left", "right"
    $('.next, .prev')
        .mousedown(function() {
            scrollWrapper.data('loop', true);
            loopingAnimation($(this), $(this).is('.next') );
        })
        .bind("mouseup mouseout", function(){
            scrollWrapper.data('loop', false).stop();
            $(this).data('scrollLeft', this.scrollLeft);
        });
    
    scrollWrapper
        .mousedown(function(event) {
            $(this)
                .data('down', true)
                .data('x', event.clientX)
                .data('scrollLeft', this.scrollLeft);
            return false;
        })
        .mouseup(function (event) {
            $(this).data('down', false);
        })
        .mousemove(function (event) {
            if ($(this).data('down')) {
                this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
            }
        })
        .mousewheel(function (event, delta) {
            this.scrollLeft -= (delta * 30);
        })
        .css({
            'overflow' : 'hidden',
            'cursor' : '-moz-grab'
        });
    
    loopingAnimation = function(el, dir){
        if(scrollWrapper.data('loop')){
            var sign = (dir) ? offsetStep : -offsetStep;
            scrollWrapper[0].scrollLeft += sign;
            setTimeout( function(){ loopingAnimation(el,dir) }, animateTime );
                                   }
                        return false;
        }; 
})