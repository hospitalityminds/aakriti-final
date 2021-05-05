      (function($) { "use strict";
                  Royal_Preloader.config({
                      mode:           'logo', // 'number', "text" or "logo"
                      logo:           'images/logo.png',
                      timeout:       1,
                      showInfo:       false,
                      opacity:        1,
                      background:     ['#FFFFFF']
                  });
      })(jQuery);



      $(document).ready(function() {
		$('.image-grid').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
	});


    //Javascript function scrolling up

			mybutton=document.getElementById("mybtn");


			window.onscroll = function(){ scrollFunction()};

			function scrollFunction(){
			if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
				mybutton.style.display = "block";
			}
			else{
				mybutton.style.display="none";
			}
			}


			function topfunction(){
			document.body.scrollTop=0;   
			document.documentElement.scrollTop=0;      
			}