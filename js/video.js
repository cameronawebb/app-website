var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="https://player.vimeo.com/video/81332082?color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	
	/* When triggering built-in Javascript functions we need to bypass jQuery. In order to get to the raw Javascript element we can use .get()
	Ex: $videoDialog.show() – will trigger jQuery's show function not the raw Javascript show function
	$videoDialog.get(0).show() – will get the first raw Javascript element and trigger its native show function
	*/


	$videoDialog.get(0).showModal();
	/* .show() allows users to interact with stuff behind the dialog
	.showModal() disables user interaction behind the dialog
	
	
	$videoDialog.get(0).show();
	*/
});

$('.btn-close').on('click', function () {
 $videoDialog.get(0).close();
 $videoDialog.children('.video').html('');
});// JavaScript Document