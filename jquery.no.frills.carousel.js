
/*!
 * No Frills Carousel v1.0.1
 * http://github.com/gordonbisnor/jquery.no.frills.carousel
 * 
 */
 
(function($) {

  $.fn.NoFrillsCarousel = function(args) {

    return $(this).each(function () {

      /* config */
      
      /* how many spots to move each time */
      var jump = args.jump || 1;

      /* how fast the carousel will change  */ 
      var speed = args.speed || 500;
      
      /* end */

      var $this = $(this);
            
      var overview = $this.find('ul.overview');
      
      /* number of items being displayed */
      var count = overview.find('li').length;

      /* width of items including margin and padding */
      var width = overview.find('li').first().outerWidth();
        
      var viewport = $this.find('div.viewport');

      var possibleWidth = viewport.outerWidth();
      
      /* number of items that are visible at one time */
      var itemsToDisplayCount = possibleWidth / width;

      viewport.css('overflow', 'hidden');
      
      var position = 0;

      /* backwards */
      $this.find('a.prev').on('click', function(){

        /* if you are able to go back */
        if(position > 0) {
          var new_position = "+=" + (width*jump);
          overview.animate({left: new_position}, speed);
          position = position - jump;
        } else {
          /* cannot go back so mark as inactive */
          $this.find('a.prev').addClass('inactive');
          $this.find('a.next').addClass('active');
        } 
        ;
        return false;
      }); /* end backwards */

      /* forwards */
      $this.find('a.next').on('click', function(){
        /* if you are able to go forwards */
        if(position - (count - itemsToDisplayCount) < 0) {
          var overview = $this.find('ul.overview');
          var new_position = "-=" + (width*jump);
          overview.animate({left: new_position}, speed);
          position = position + jump;
        } else {
          /* cannot go forwards to mark as inactive */
          $this.find('a.next').addClass('inactive');
          $this.find('a.prev').addClass('active');
        };
        return false;
      }); /* end forwards */

    }); 

  };

})( jQuery );
