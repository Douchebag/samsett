var morphing = function() {
	anime({
	targets: '.polymorph',
	points: [
		{ value: [
		  '110,25 145,25 160,120 175,25 210,25 180,200 140,200',
		  '110,200 145,200 160,200 175,200 210,200 180,25 140,25']
		},
		{ value: '110,200 145,200 160,200 175,200 210,200 160,10 160,10' },
		{ value: '50,200 145,200 160,200 175,200 270,200 160,10 160,10' }
	  ],
	easing: 'easeOutQuad',
	duration: 1500,
	loop: false
});
easingTriangle();
easingEye();
lineDrawing();
colorsExamples();
}

var easingEye = function() {
  anime({
    targets: '.eye',
    translateX: 50,
		translateY: 30,
		duration: 1500,
    delay: anime.stagger(300, {easing: 'spring'})
  });
}

var easingTriangle = function() {
  anime({
    targets: '.polymorph',
    translateX: -50,
    delay: anime.stagger(300, {easing: 'spring'})
  });
}

var lineDrawing = function() {
anime({
  targets: '.drawing path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 250 },
  direction: 'reverse',
  loop: 1
});

}

var colorsExamples = function() {
anime.timeline({
  loop: false
})
.add({targets: '.drawing path', fill: 'none'})
}

var test = function() {
	anime.set('.pyraLines path', {
		opacity: 0.2
	});
}
