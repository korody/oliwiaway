window.addEvent('domready', function(){
var scroll = new Scroller('container', {area: 100, velocity: 1});
$('container').addEvent('mouseover', scroll.start.bind(scroll));
$('container').addEvent('mouseout', scroll.stop.bind(scroll));
}); 