@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/wpcf7.js')
@@include('./lib/slick.js')

$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .navbar').slideToggle(300); 
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 1279) {
			$('header .navbar').show(); 
		} else {
			$('header .navbar').hide();
			$('.burger').removeClass('burger_active'); 
		}
	});
	
	$('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('.burger').is(':visible'))return;
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
	});
	
	 $('.menu li.sub-menu-item-has-children>a').click(function(e){
		if(window.innerWidth>1279)return ;
        e.preventDefault();
        $('.sub-menu ul').not($(this).closest('li').find(' ul')).slideUp('300');	
		$(this).closest('li').find('ul:first').slideToggle('300');
    }); 
    
    $('.menu li.small-sub-menu-item-has-children>a').click(function(e){
		if(window.innerWidth>1279)return ;
        e.preventDefault();
        $('.sub-menu ul').not($(this).closest('li').find(' ul')).not($(this).closest('li').closest('ul')).slideUp('300');	
		$(this).closest('li').find('ul:first').slideToggle('300');
    });
	
// 	slick-slider	
	
	$('.photo-info__photos').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
//		fade: true,
//		cssEase: 'linear',
//		speed: 100,
//		autoplay: true,
//    	autoplaySpeed: 300,
	});
	
	$('.insta-slider').slick({
		infinite: true,
		slidesToShow: 7,
		dots: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1279,
			  settings: {
				slidesToShow: 7,
				arrows: false,
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 5,
				arrows: false,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
			  }
			},
		]
	});
	
// height
	
	var w= $('.author-plates__plate').width();
	$('.author-plates__plate').css({
		'height': w + 'px'
	});
	
	$(window).resize(function(){
		var w= $('.author-plates__plate').width();
		$('.author-plates__plate').css({
			'height': w + 'px'
		});
	});
	
	
	
	$(window).resize();
		setTimeout(function(){
			ww=0;
			$(window).resize();
		},400)

}); 