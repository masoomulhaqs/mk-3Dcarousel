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

#### Properties
	* responsive: boolean | default = true
	* breakpoint: int | default = 768
	* offset: int | default = 100
	* mobileOffset: int | default = 50
	* controlNavs: boolean | default = true

#### Live Examples
* [mk-3Dcarousel page](http://masoomulhaqs.github.io/mk-3Dcarousel/)
* [http://www.masoomulhaq.in/](http://www.masoomulhaq.in/)

#### Support
In all major browsers, partial support in other browsers

#### Note
Images are taken from `Google`
