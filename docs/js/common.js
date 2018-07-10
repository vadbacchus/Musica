var dropdownUser = document.querySelector('.dropdown__btn');

dropdownUser.onclick = function () {
	this.nextElementSibling.classList.toggle('show');
}


//slider

var slideIndex = 1,
	dots   = document.querySelectorAll('.dots__item');

showSlides(slideIndex);

for(var i = 0; i < dots.length; i++) {
	dots[i].onclick = function() {
		switch (this) {
			case dots[0] :
				currentSlide(1);
				break;
			case dots[1] :
				currentSlide(2);
				break;
			case dots[2] :
				currentSlide(3);
				break;
			case dots[3] :
				currentSlide(4);
				break;
			case dots[4] :
				currentSlide(5);
				break;
		}
	}
}

function showSlides(n) {

  var slides = document.querySelectorAll('.slider__item'),
	  i;
  
  for(i = 0; i < slides.length; i++) {
  	slides[i].style.display = 'none'
  }

  for(i = 0; i < dots.length; i++) {
  	dots[i].classList.remove('active');
  }

  if (n > slides.length) {
  	slideIndex = 1;
  }

  if (n < 1) {
  	slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

// MOBILE_MENU

var navBtn = document.querySelector('.nav-btn'),
	nav = document.querySelector('.nav'),
	navClose = document.querySelector('.nav__closebtn');


navBtn.onclick = function() {

  nav.classList.add('active');
}

navClose.onclick = function() {
	nav.classList.remove('active'); 
}


var videoPlayer = document.querySelector('.guitar-video');

function togglePlayPause() {
   var btn = document.querySelector('play-pause-btn');
   if (videoPlayer.paused || videoPlayer.ended) {
      videoPlayer.play();
   }
   else {
      
      videoPlayer.pause();
   }
}	


var scrolling = document.querySelectorAll('a');

for (var i = 0; i < scrolling.length; i++) {
	 scrolling[i].onclick = function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
}