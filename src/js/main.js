@@include('./lib/slick.min.js')

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
	
//	var listOffset = $(".fixed-column").offset().top;
//	$(window).scroll(function() {
//		var docScroll = $(document).scrollTop();
//		if (docScroll > listOffset){
//			$('.fixed-column').addClass("fixed");
//		}
//		else {
//			$('.fixed-column').removeClass("fixed");
//		}
//	});
});


document.addEventListener('DOMContentLoaded', () => {
	
	
// main-screen slider
	
//	const authorSlider = document.querySelector('.author-slider'),
//	  authorSliderPhoto = authorSlider.querySelectorAll('.author-slider__photo'),
//	  authorSliderFood = authorSlider.querySelectorAll('.author-slider__foodphotos img'),
//	  authorSliderDetails = authorSlider.querySelectorAll('.author-slider__author');
//	
//	authorSliderPhoto.forEach( (recipe, i) => {
//		recipe.addEventListener( 'click', () => {
//			
//			authorSliderDetails.forEach(item => {
//				item.classList.remove('active');
//			});
//			authorSliderDetails[i].classList.add('active');
//
//			authorSliderPhoto.forEach(item => {
//				item.classList.remove('active');
//			});
//			authorSliderPhoto[i].classList.add('active');
//			
//			authorSliderFood.forEach(item => {
//				item.classList.remove('active');
//			});
//			authorSliderFood[i].classList.add('active');
//		});
//	});
	
	
	
// height
	
	const tripCircle = document.querySelectorAll('.trips__item'),
		  authorPlate = document.querySelectorAll('.author-plates__plate');

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

