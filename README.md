# mk-3Dcarousel
This is a responsive 3D Image Carousel created using JQUERY, CSS3.

##### REQUIRED
* JQuery
* CSS3 supported browsers


##### STEPS TO USE
Include the following:
  * `JQuery`
  * `mk-3Dcarousel.js` 
  * `mk-3Dcarousel.css`


##### HTML
```
<div class="mk-carousel" id="mkCarousel">
	<img class="active" src="<your-path>/file-name.jpg" alt="">
	<img src="<your-path>/file-name.jpg" alt="">
	... image list goes here
</div>
```


##### JS
```
$(function(){
	$('#mkCarousel').mkCarousel();
});
```


##### CUSTOMIZE
```
$(function(){
	$('#mkCarousel').mkCarousel({
		property-name: value
		... custom configuration goes here
	});
});
```
| Property     	| Description                                            	| Type    	| Default value 	|
|--------------	|--------------------------------------------------------	|---------	|---------------	|
| responsive   	| Makes carousel responsive                              	| boolean 	| true          	|
| breakpoint   	| A point from where carousel will handle responsiveness 	| int     	| 768           	|
| offset       	| Spacing between carousel images for desktop view       	| int     	| 100           	|
| mobileOffset 	| Spacing between carousel images for mobile view        	| int     	| 50            	|
| controlNavs  	| Show control navigation, ex: prev, next                	| boolean 	| true          	|
| beginAt      	| Set an inital active image                             	| int     	| 1             	|


##### LIVE EXAMPLES
* [mk-3Dcarousel Landing Page](http://masoomulhaqs.github.io/mk-3Dcarousel/)
* [http://www.masoomulhaq.in/](http://www.masoomulhaq.in/)


##### SUPPORT
In all major browsers, partial support in other browsers


##### NOTE
Images are taken from `Google`
