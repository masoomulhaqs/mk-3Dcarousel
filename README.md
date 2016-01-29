# mk-3Dcarousel
This is a create 3D Image Carousel using JQUERY, CSS3.

#### Required
* JQuery
* CSS3 supported browsers

#### Steps to use
Include the following:
  * `JQuery`
  * `mk-3Dcarousel.js` 
  * `mk-3Dcarousel.css`

#### HTML:
```
<div id="mkCarousel">
	<img class="active" src="images/carousel/001.jpg" alt="">
	<img src="images/carousel/002.jpg" alt="">
	... image list goes here
</div>
```

#### JS:
```
$(function(){
	$('#mkCarousel').mkCarousel();
});
```

#### Properties & their usage
| Property     	| Description                                           	| Type    	| Default value 	|
|--------------	|-------------------------------------------------------	|---------	|---------------	|
| responsive   	| Makes carousel responsive                             	| boolean 	| true          	|
| breakpoint   	| A point from where it should take responsive handling 	| int     	| 768           	|
| offset       	| Spacing between carousel images for desktop view      	| int     	| 100           	|
| mobileOffset 	| Spacing between carousel images for mobile view       	| int     	| 50            	|
| controlNavs  	| Show control navigation, ex: prev, next               	| boolean 	| true          	|
| beginAt      	| Set an inital active image                            	| int     	| 1             	|

#### Live Examples
* [mk-3Dcarousel page](http://masoomulhaqs.github.io/mk-3Dcarousel/)
* [http://www.masoomulhaq.in/](http://www.masoomulhaq.in/)

#### Support
In all major browsers, partial support in other browsers

#### Note
Images are taken from `Google`
