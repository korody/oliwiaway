function onScroll(event) {
  // delta is +120 when scrolling up, -120 when scrolling down
  var delta = event.detail ? event.detail * (-200) : event.wheelDelta
  // set own scrolling offset, take inverted sign from delta (scroll down should scroll right,
  // not left and vice versa
  var scrollOffset = 200 * (delta / -120);
  // Scroll it
  window.scrollBy(scrollOffset, 0);
}

// The not so funny part... fin the right event for every browser
var mousewheelevt=(/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
if (document.attachEvent) 
  document.attachEvent("on"+mousewheelevt, onScroll);  
else if (document.addEventListener)
  document.addEventListener(mousewheelevt, onScroll, false);