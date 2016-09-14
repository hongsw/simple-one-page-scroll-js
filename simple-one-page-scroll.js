<script>
  var elements = ['#rev_slider_13_1', '#layerslider_23', 'footer'];
  var top_margin = -33;
  var animate_time = 800;
  
  var index = 0;
  var animate_doing = false;
  jQuery('body').on('mousewheel', function(e){
  	if( animate_doing ){  			event.preventDefault();      	  	return;
  	}else{
	    var st = jQuery(this).scrollTop();
 	    if(e.originalEvent.wheelDelta > 0) {
        console.log('Up'); index--; 
      }else if(e.originalEvent.wheelDelta < 0) {
        console.log('Down');index++;
      }
      index = Math.abs(index % elements.length);
      animate_doing = true;
      setTimeout(function(){ 
        jQuery('html, body').animate({scrollTop: jQuery(elements[index]).offset().top + top_margin}
          , animate_time, function(){
       				setTimeout(function(){ animate_doing = false;}, 10);	
     	 		});	
        }, 10);	
	  		//for debug 
	  		//console.log(animate_doing + ' #animate_starting' + index +  ' ' + elements[index]);
	  	}
  });
</script>
