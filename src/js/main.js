@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/slick.js')

$(document).ready(function(){
	
// menu
	
	$(".burger").click(function(){
		$(".menu-line").toggleClass("active");
		$(this).toggleClass("active");
	})
	
// slick-slider
	
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

// fixed
	
	var listOffset = $(".fixed-column").offset().top;
	$(window).scroll(function() {
		var docScroll = $(document).scrollTop();
//		console.log(listOffset);
//		console.log(docScroll);
		if (docScroll > listOffset){
			$('.fixed-column').addClass("fixed");
		}
		else {
			$('.fixed-column').removeClass("fixed");
		}
	});
});

'use strict'

document.addEventListener('DOMContentLoaded', () => {
	
	const tripCircle = document.querySelectorAll('.trips__item'),
		  authorPlate = document.querySelectorAll('.author-plates__plate');
	
// height

	function plateHeight(item) {
		item.forEach(plate =>  {
			let itemWidth = plate.clientWidth;
			plate.style.height = itemWidth + 'px';
		});
	};
	
	plateHeight(tripCircle);
	plateHeight(authorPlate);

	
// tabs
	
	const tabs = document.querySelector('.tabs'),
		  tabsBtnParent = tabs.querySelector('.tabs__buttons'),
		  tabsBtn = tabs.querySelectorAll('.tabs__button'),
		  tabsItem = tabs.querySelectorAll('.tabs__item');
	
	function hideTabsItems() {
		tabsItem.forEach(item => {
			item.classList.remove('show');
		});
		
		tabsBtn.forEach(item => {
			item.classList.remove('active');
		})
	};
	
	function showTabsItem(i) {
		tabsItem[i].classList.add('show');
		tabsBtn[i].classList.add('active');
	};
	
	hideTabsItems();
	showTabsItem(0);
	
	tabsBtnParent.addEventListener( 'click', (event) => {
		const target = event.target;
		if ( target && target.classList.contains('tabs__button') ) {
			tabsBtn.forEach( (item, i) => {
				if (target == item) {
					hideTabsItems();
					showTabsItem(i);
				}
			})
		}
	});
	
// resize functions
	
	window.addEventListener('resize', function(event){
		plateHeight(tripCircle);
		plateHeight(authorPlate);
	});
})





