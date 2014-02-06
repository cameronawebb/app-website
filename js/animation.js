var $win = $(window);
var $compass = $('.compass');
var $dipper = $('.wheel');

$win.on('scroll', function () {
	console.log($win.scrollTop() );
	// console.log( $win.scrollTop() );
	$compass.css('transform', 'rotate(' + $win.scrollTop() / 5 + 'deg)');
});

$('.wheel-section').waypoint(function () {
	$dipper.addClass('js-wheel-animate');
}, { offset: '60%' });