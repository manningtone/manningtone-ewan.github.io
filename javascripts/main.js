
	
    /*===================
   1.Parallax
    ===================*/
  !function(n){var t=n(window),e=t.height();t.resize(function(){e=t.height()}),n.fn.parallax=function(o,i,r){function u(){var r=t.scrollTop();a.each(function(){var t=n(this),u=t.offset().top,c=h(t);r>u+c||u>r+e||a.css("backgroundPosition",o+" "+Math.round((l-r)*i)+"px")})}var h,l,a=n(this);a.each(function(){l=a.offset().top}),h=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===i)&&(i=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",u).resize(u),u()}}(jQuery);
  
   /*===================
  2.Parallax banner id div
    ===================*/
  
  (function($){
    "use strict";

    $(document).ready(function(){
      $('#lp-pom-block-10').parallax("50%", 0.3);
	    $('#lp-pom-block-11').parallax("50%", 0.3);
		
   
    }); 
  })(jQuery);
  
  
