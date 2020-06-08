$(function(){
	$('#click').hide().slideDown(800);
	$('img').hide();
	var click = $('#click');
	$('a').on('click',function(e){
		$('img').hide();
		e.preventDefault();		
		var link = this.href;
		link = link.replace('#','');
		var ln = link.length;
		var last = link.substr(-1);
		var lastId = '#'+last;
		$(lastId).slideDown(500);
		$('a').removeClass('current');
		$(this).addClass('current');
	});

});
