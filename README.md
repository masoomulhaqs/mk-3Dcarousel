# mk-3Dcarousel

This is a responsive 3D Image Carousel created using JQUERY, CSS3.

##### STEPS TO USE

Install jQuery
```shell

  $ npm install --save jquery

```

Install mk-3Dcarousel
```shell

  $ npm install --save mk-3dcarousel

```

Include the following in your page:
  * `jQuery`
  * `mk-3dcarousel.js`
  * `mk-3dcarousel.css`


##### HTML
```html

  <div class="mk-carousel" id="mkCarousel">
  	<img class="active" src="<your-path>/file-name-01.jpg" alt="Some Title">
  	<img src="<your-path>/file-name-02.jpg" alt="Some Title">
  	<!-- image list goes here -->
  </div>

```


##### JS
```js

  $(function(){
  	$('#mkCarousel').mkCarousel();
  });

```


##### CUSTOMIZE
```js

  $(function(){
  	$('#mkCarousel').mkCarousel({
  		// propertyName: value
  		// custom configuration goes here
  	});
  });

```

##### OPTIONS
| Property     	| Description                                            	| Type    	| Default value 	|
|--------------	|--------------------------------------------------------	|---------	|---------------	|
| responsive   	| Makes carousel responsive                              	| boolean 	| true          	|
| breakpoint   	| A point from where carousel will handle responsiveness 	| int     	| 768           	|
| offset       	| Spacing between carousel images for desktop view       	| int     	| 100           	|
| mobileOffset 	| Spacing between carousel images for mobile view        	| int     	| 50            	|
| controlNavs  	| Show control navigation, ex: prev, next                	| boolean 	| true          	|
| prevText  	| Change the text of previous button               	| string 	| Prev          	|
| nextText  	| Change the text of next button               	| string 	| Next          	|
| beginAt      	| Set an inital active image                             	| int     	| 1             	|


##### LIVE EXAMPLES
* [mk-3Dcarousel Landing Page](http://masoomulhaqs.github.io/mk-3Dcarousel/)


##### SUPPORT
IE 10+, Firefox 10+, Google Chrome 12+, Safari 9+, Android Browser 3+


##### NOTE
Images are taken from [Google](https://www.google.co.in/)

##### LICENSE
The MIT License (MIT)

Copyright (c) 2015 Masoom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
