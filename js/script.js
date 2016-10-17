$.fn.moveIt = function(){
      var $window = $(window);
      var instances = [];
      
      $(this).each(function(){
        instances.push(new moveItItem($(this)));
      });
      
      window.onscroll = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
          inst.update(scrollTop);
        });
      }
    }

    var moveItItem = function(el){
      this.el = $(el);
      this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop){
      var pos = scrollTop / this.speed;
      this.el.css('transform', 'translateY(' + -pos + 'px)');
    };




$(function(){



	console.log("It's working");

	// $('.hamburger').on('click', function(){
	// 			$('nav').slideToggle();
	// 		});

	// $('a[href*="#"]:not([href="#"])').click(function() {
 //    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
 //      var target = $(this.hash);
 //      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
 //      if (target.length) {
 //        $('html, body').animate({
 //          scrollTop: target.offset().top
 //        }, 1000);
 //        return false;
 //      }
 //    }
 //    });

    //parallax test


    // $(function(){
      
    // });


    //parallax test end



	// initMap()

	$('[data-scroll-speed]').moveIt();

});





function initMap() {

			// var styleArray = [
			//   {
			//     featureType: "administrative",
			//     elementType: "labels",
			//     stylers: [
			//       { visibility: "off" }
			//     ]
			//   },{
			//     featureType: "poi",
			//     elementType: "labels",
			//     stylers: [
			//       { visibility: "off" }
			//     ]
			//   },{
			//     featureType: "water",
			//     elementType: "labels",
			//     stylers: [
			//       { visibility: "off" }
			//     ]
			//   },{
			//     featureType: "road",
			//     elementType: "labels",
			//     stylers: [
			//       { visibility: "off" }
			//     ]
			//   }
			// ]
	        // Create a map object and specify the DOM element for display.
	        var map = new google.maps.Map(document.getElementById('map'), {
	          center: {lat: 43.6482644, lng: -79.4000474},
	          scrollwheel: false,
	          zoom: 15,
	          disableDefaultUI: true
	        });

	        var marker = new google.maps.Marker({
	                  position: {lat: 43.6482644, lng: -79.4000474},
	                  map: map,
	                  title: 'Hello World!'
	                });
	      }