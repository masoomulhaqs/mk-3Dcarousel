(function ( $ ) {
 
    // Listen for orientation changes
	window.addEventListener("orientationchange", function() {
		// Announce the new orientation number
		console.log(window.orientation);
	}, false);
	$.fn.mkCarousel = function(settings){
		var target = this.selector+'>img', 
			$target = $(this.selector+'>img'), 
			leftMargin =0, slideIt, getIndex, offset = 0, activeIndex = 0;
		var defaults = $.extend({
			responsive: true,
			breakpoint: 768,
			offset: 100,
			mobileOffset: 40,
			leftClass: 'img-left',
			rightClass: 'img-right',
			activeClass: 'active'
		}, settings);
		console.log(defaults);
		getIndex = function(){
			for(i=0; i<=$target.length;i++){
				if($target.eq(i).hasClass(defaults.activeClass)){
					return i;
				}
			}
		};
		slideIt = function(){
			offset = ($(window).outerWidth()>=defaults.breakpoint)?defaults.offset:defaults.mobileOffset;
			leftMargin = 0;
			activeIndex = getIndex();
			$target.removeClass(defaults.leftClass).css({
				'marginLeft': '0px',
				'marginRight': '0px'
			});
			$(target+':lt('+activeIndex+')').addClass(defaults.leftClass);
			if($target.eq(0).hasClass(defaults.activeClass)){
				$target.eq(0).css({
					'marginLeft': -($target.eq(0).outerWidth()/2) + 'px',
					'marginRight': offset + 'px'
				});
			}else{
		        for(i=0;i<activeIndex;i++){
		          leftMargin = leftMargin + $target.eq(i).outerWidth();
		        }
        		$target.eq(0).css('marginLeft', - (leftMargin + $(target+'.'+defaults.activeClass).outerWidth()/2 + offset) + 'px');
		        $target.each(function(){
		        	if($(this).hasClass(defaults.activeClass)){
		        		$(this).css({
							'marginLeft': offset + 'px',
          					'marginRight': offset +'px'
		        		});
		        	}
		        });
			}
		};
		$(window).resize(function(){
			slideIt();
		}).load(function(){
			slideIt();
		})
		window.orientationchange = function(){
			console.log('changed');
		}
		$target.click(function(){
			$target.removeClass(defaults.activeClass);
			$(this).addClass(defaults.activeClass);
			slideIt();
		});
	}

 
}( jQuery ));