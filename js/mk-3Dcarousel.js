(function ( $ ) {


	$.fn.mkCarousel = function(settings){
		var selector = this.selector,
			target = this.selector+'>img',
			$target = $(target), 
			controlSelector = '.mk-nav-controls>li>a',
			$controlSelector = $(controlSelector),
			leftMargin =0,
			slideIt = null, 
			getIndex = null,
			init= null,
			offset = 0, 
			activeIndex = 0,
			defaults = {},
			slideCount = 0;
		init = function(){
			defaults = $.extend({
				responsive: true,
				breakpoint: 768,
				offset: 100,
				mobileOffset: 50,
				leftClass: 'image-left',
				rightClass: 'image-right',
				activeClass: 'active',
				controlNavs: true
			}, settings);
			console.log(defaults);
			if(defaults.controlNavs){
				$(selector).prepend('\
					<ul class="mk-nav-controls">\
					    <li><a href="#" data-mk-direction="prev">Prev</a></li>\
					    <li><a href="#" data-mk-direction="next">Next</a></li>\
					</ul>\
				');
			}
		};
		getIndex = function(){
			for(i=0; i<=$target.length;i++){
				if($target.eq(i).hasClass(defaults.activeClass)){
					return i;
				}
			}
		};
		slideIt = function(thisIndex){
			offset = ($(window).outerWidth()>=defaults.breakpoint)?defaults.offset:defaults.mobileOffset;
			leftMargin = 0;
			activeIndex = thisIndex || getIndex();
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
			init();
			slideIt();
		});
		if("onorientationchange" in window) {
			window.addEventListener("orientationchange", function() {
				slideIt();
			}, false);
		}
		$target.click(function(){
			$target.removeClass(defaults.activeClass);
			$(this).addClass(defaults.activeClass);
			slideIt();
		});
		$(selector).on('click', controlSelector,  function(event){
			event.preventDefault();
			slideCount = getIndex();
			if($(this).data('mk-direction') == 'prev'){
				console.log('yep')
				slideCount = slideCount>0?slideCount-1:slideCount;
			}else{
				slideCount = slideCount<$target.length-1?slideCount+1:slideCount;
			}
			$target.removeClass(defaults.activeClass);
			$target.eq(slideCount).addClass(defaults.activeClass);
			slideIt(slideCount);
		});
	}

 
}( jQuery ));