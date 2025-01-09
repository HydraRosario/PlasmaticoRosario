// NIVO LIGHTBOX
$('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });

// ISOTOPE FILTER
jQuery(document).ready(function($){

	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');



	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.load(function(){
	    		$container.isotope('reLayout');
	    	})

	    });

	    //filter items on button click

	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 

			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 

	}

});


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


// SCROLLTO THE TOP
$(document).ready(function() {
	// Show or hide the sticky footer button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.go-top').fadeIn(200);
					} else {
						$('.go-top').fadeOut(200);
					}
				});		
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
				
					$('html, body').animate({scrollTop: 0}, 300);
				})
			});

// Initialize the carousel with auto-sliding and enhanced features
$(document).ready(function(){
    $('#homeCarousel').carousel({
        interval: 3000,
        pause: "hover",
        wrap: true
    });

    // Add keyboard navigation
    $(document).keydown(function(e) {
        if(e.keyCode == 37) { // left arrow
            $('#homeCarousel').carousel('prev');
        }
        if(e.keyCode == 39) { // right arrow
            $('#homeCarousel').carousel('next');
        }
    });

    // Make carousel responsive to window resize
    $(window).resize(function() {
        adjustCarouselHeight();
    });

    function adjustCarouselHeight() {
        var windowHeight = $(window).height();
        var navHeight = $('.navbar').height();
        $('#homeCarousel').height(windowHeight - navHeight);
    }

    // Initial height adjustment
    adjustCarouselHeight();

    // Touch swipe functionality
    var carousel = document.getElementById('homeCarousel');
    var hammer = new Hammer(carousel);
    var startX;

    hammer.on('swipeleft', function() {
        $('#homeCarousel').carousel('next');
    });

    hammer.on('swiperight', function() {
        $('#homeCarousel').carousel('prev');
    });

    // Mouse drag functionality
    $('.carousel-inner').on('mousedown touchstart', function(event) {
        startX = event.pageX || event.originalEvent.touches[0].pageX;
        $(this).css('cursor', 'grabbing');
    });

    $('.carousel-inner').on('mouseup touchend', function(event) {
        var endX = event.pageX || event.originalEvent.changedTouches[0].pageX;
        if (startX && Math.abs(startX - endX) > 100) {
            if (startX > endX) {
                $('#homeCarousel').carousel('next');
            } else {
                $('#homeCarousel').carousel('prev');
            }
        }
        startX = null;
        $(this).css('cursor', 'grab');
    });
});