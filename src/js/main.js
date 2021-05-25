@@include('./lib/swiper.js')

document.addEventListener('DOMContentLoaded', () => {
		
// menu
	
	const burger = document.querySelectorAll(".burger"),
		  menu = document.querySelector(".menu-line");
	
	burger.forEach( el => {
		el.addEventListener('click', () => {
			if (el.classList.contains("active")) {
				el.classList.remove("active");
				menu.classList.remove("active");
			} else {
				el.classList.add("active");
				menu.classList.add("active");
			}
		});
	});
		
	
// main-screen slider
		
	function mainSlider() {
		const authorSlider = document.querySelector('.author-slider'),
		  authorSliderPhoto = authorSlider.querySelectorAll('.author-slider__photo'),
		  authorSliderFood = authorSlider.querySelectorAll('.author-slider__foodphotos img'),
		  authorSliderDetails = authorSlider.querySelectorAll('.author-slider__author');
		
		authorSliderPhoto.forEach( (recipe, i) => {
			recipe.addEventListener( 'click', () => {

				authorSliderDetails.forEach(item => {
					item.classList.remove('active');
				});
				authorSliderDetails[i].classList.add('active');

				authorSliderPhoto.forEach(item => {
					item.classList.remove('active');
				});
				authorSliderPhoto[i].classList.add('active');

				authorSliderFood.forEach(item => {
					item.classList.remove('active');
				});
				authorSliderFood[i].classList.add('active');
			});
		});
	}
	
	try {
		mainSlider();
	} catch(e) {}
	
	
// height
	
	const tripCircle = document.querySelectorAll('.trips__item'),
		  authorPlate = document.querySelectorAll('.author-plates__plate');

	function plateHeight(item) {
		item.forEach(plate =>  {
			let itemWidth = plate.clientWidth;
			plate.style.height = itemWidth + 'px';
		});
	};
	
	try {
		plateHeight(tripCircle);
		plateHeight(authorPlate);
	} catch(e) {}

	
// tabs
	
	function initTabs() {
		const tabs = document.querySelector('.tabs'),
			  tabsBtnParent = tabs.querySelector('.tabs__buttons'),
			  tabsBtn = tabs.querySelectorAll('.tabs__button'),
			  tabsItem = tabs.querySelectorAll('.tabs__item');
		
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
	
		function hideTabsItems() {
			tabsItem.forEach(item => {
				item.classList.remove('show');
			});
			tabsBtn.forEach(item => {
				item.classList.remove('active');
			});
		}

		function showTabsItem(i) {
			tabsItem[i].classList.add('show');
			tabsBtn[i].classList.add('active');
		}
	}
	
	try {
		initTabs();
	} catch(e) {}
	

// fixed ingredients
	
	function initFixedCol() {
		const fixedColumn = document.querySelector(".fixed-column"),
			columns = document.querySelector(".columns"),
			colsTop = columns.offsetTop,
			colsBottom = columns.offsetHeight + colsTop,
			windowHeight = window.innerHeight;

		window.addEventListener('scroll', () => {
			let docScroll = window.scrollY;
			if (docScroll > (colsTop - 40) && (docScroll + windowHeight) < colsBottom){
				fixedColumn.classList.add("fixed");
			} else {
				fixedColumn.classList.remove("fixed");
			}
		});
	}
	
	try {
		initFixedCol();
	} catch(e) {}
	
// ingredinets culc
	
	
	function initPortions() {
		const plusPortion = document.querySelector(".recipe__portions-plus"),
			  minusPortion = document.querySelector(".recipe__portions-minus"),
			  ingredientsQty = document.querySelectorAll(".ingredients-list li span"),
			  portionInput = document.getElementById("portion");

		let portionQty = portionInput.value;

		ingredientsQty.forEach( item => {
			const portionRate = +(item.innerHTML)/+(portionQty);
			item.setAttribute('data-rate', portionRate)
		});
		
		function prettify(num) {
			return n = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		};

		function culcIngredients(qty) {
			portionInput.value = qty;

			ingredientsQty.forEach( item => {
				const portionRate = item.getAttribute('data-rate');
				item.innerHTML = prettify(qty*portionRate);
			});
		}

		plusPortion.addEventListener("click", () => {
			portionQty = +portionQty + 1;
			if (portionQty < 1) {
				portionQty = 1;
			}
			culcIngredients(portionQty);
		});

		minusPortion.addEventListener("click", () => {
			portionQty = +portionQty - 1;
			if (portionQty < 1) {
				portionQty = 1;
			}
			culcIngredients(portionQty);
		});

		portionInput.addEventListener("input", () => {
			portionQty = portionInput.value;
			if (portionQty < 1) {
				portionQty = 1;
			}
			culcIngredients(portionQty);
		});
	}
	
	try {
		initPortions();
	} catch(e) {}
	
	
// insta-slider
	
	var swiperBanner = new Swiper ('.insta-slider .swiper-container', {
		slidesPerView: "3",
		spaceBetween: 0,
		breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			1280: {
				slidesPerView: 7,
			}
		}
	});
	
// resize functions
	
	window.addEventListener('resize', function(event){
		plateHeight(tripCircle);
		plateHeight(authorPlate);
	});
});

