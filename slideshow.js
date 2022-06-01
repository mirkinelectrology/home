const slideshow = {
	slides : [
		'1.png',
		'2.png',
		'3.png'
	],
	index : 0,
	nextSlide : function() {
		console.debug('loading next slide');
		slideshow.index++;
		if(slideshow.index == slideshow.slides.length) slideshow.index = 0;
		const body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = `url("./img/slides/${slideshow.slides[slideshow.index]}")`;
	},
	start : function() {
		console.debug('starting slideshow');
		setInterval(slideshow.nextSlide, 5000);
	}
};

slideshow.start();
