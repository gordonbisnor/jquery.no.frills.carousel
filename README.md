jquery.no.frills.carousel
=========================

The world needs more jQuery carousels, so I'm doing what I can.

I was using Tiny Carousel, which was serving my needs just fine, but it mysteriously broke on me so I created this. It that works for you it's recommended over this. It has options, this has none.

Install
-------

    <script src="jquery.no.frills.carousel.min.js"></script>

Use
---

    <script type="text/javascript">
        $(document).ready(function(){ 
          $('.carousel').NoFrillsCarousel(); 
        });
    </script> 


HTML Structure 
--------------

    <div class="carousel">
      <a class="prev" href="#"></a>
      <div class="viewport">
        <ul>
          <li></li>
        </ul>
      </div>
      <a class="next" href="#"></a>
    </div>
