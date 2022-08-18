/*const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const fade = entry.target.querySelector('.fade');
		if (entry.isIntersecting) {
			fade.target.classList.add('fade-in');
		} 
		fade.classList.remove('fade-in');
	});
});
observer.observe(document.querySelector('.fade-wrap'));
//document.getElementById("wat").style.fontSize = "35px"; 
const watt = document.getElementsByClassName("wat");
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
document.addEventListener('scroll', function(e) {
	if (isScrolledIntoView(watt)) {
	document.getElementsByClassName("wat").style.fontSize = "35px"; 
	}
});*/
var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height/4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height/2);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
  scrollFade();
});