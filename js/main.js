$(document).ready(function() {

	'use strict';

	// ========================================================================= //
	//  //SMOOTH SCROLL
	// ========================================================================= //
  
  
	$(document).on("scroll", onScroll);
  
	$('a[href^="#"]').on('click', function(e) {
	  e.preventDefault();
	  $(document).off("scroll");
  
	  $('a').each(function() {
		$(this).removeClass('active');
		if ($(window).width() < 768) {
		  $('.nav-menu').slideUp();
		}
	  });
  
	  $(this).addClass('active');
  
	  var target = this.hash,
		  menu = target;
  
	  target = $(target);
	  $('html, body').stop().animate({
		'scrollTop': target.offset().top - 80
	  }, 500, 'swing', function() {
		window.location.hash = target.selector;
		$(document).on("scroll", onScroll);
	  });
	});
  
  
	function onScroll(event) {
	  if ($('.home').length) {
		var scrollPos = $(document).scrollTop();
		$('nav ul li a').each(function() {
		  var currLink = $(this);
		  var refElement = $(currLink.attr("href"));
		});
	  }
	}
  
	// ========================================================================= //
	//  //NAVBAR SHOW - HIDE
	// ========================================================================= //
  
  
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  if (scroll > 200 ) {
		$("#main-nav, #main-nav-subpage").slideDown(700);
		$("#main-nav-subpage").removeClass('subpage-nav');
	  } else {
		$("#main-nav").slideUp(700);
		$("#main-nav-subpage").hide();
		$("#main-nav-subpage").addClass('subpage-nav');
	  }
	});
  
	// ========================================================================= //
	//  // RESPONSIVE MENU
	// ========================================================================= //
  
	$('.responsive').on('click', function(e) {
	  $('.nav-menu').slideToggle();
	});
  
	// ========================================================================= //
	//  Typed Js
	// ========================================================================= //
  
	new Typed('#typed',{
		strings : ['Allah memberkahi umurmu.','Panjang Umur Dan Sehat Selalu.','DIberi Rizki Yang Melimpah.','Diberi Kebahagiaan Hidup Didunia Maupun Akhirat.','Diberi Kemudahan Didalam Hidupnya.','Terwujud Semua Keinginan Mu Selama Ini.'],
		typeSpeed : 100,
		delaySpeed : 100,
		loop : true
	  });
  
  
	// ========================================================================= //
	//  Owl Carousel Services
	// ========================================================================= //
  
  
	$('.services-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		margin: 20,
		dots: true,
		nav: false,
		responsiveClass: true,
		responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
	  });
  
	// ========================================================================= //
	//  magnificPopup
	// ========================================================================= //
  
	var magnifPopup = function() {
	  $('.popup-img').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
		gallery: {
		  enabled: true
		},
		zoom: {
		  enabled: true, // By default it's false, so don't forget to enable it
  
		  duration: 300, // duration of the effect, in milliseconds
		  easing: 'ease-in-out', // CSS transition easing function
  
		  // The "opener" function should return the element from which popup will be zoomed in
		  // and to which popup will be scaled down
		  // By defailt it looks for an image tag:
		  opener: function(openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		  }
		}
	  });
	};
  
  
	// Call the functions
	magnifPopup();
  
  });
  
  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).load(function(){
  
	var portfolioIsotope = $('.portfolio-container').isotope({
	  itemSelector: '.portfolio-thumbnail',
	  layoutMode: 'fitRows'
	});
  
	$('#portfolio-flters li').on( 'click', function() {
	  $("#portfolio-flters li").removeClass('filter-active');
	  $(this).addClass('filter-active');
  
	  portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});
  
  })
  

	
	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});

