var $placeholder = $('.placeholder');

$('.btn-load').on('click', function () {
	$placeholder.load('loaded-in.html');
});

var rand = Math.round(Math.random() * 3);
var file = 'comment-' + rand + '.html';

$('.rand-comment').load(file);
