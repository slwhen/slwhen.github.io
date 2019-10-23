(function(onLoad) {
    try {
        window.addEventListener('load', onLoad, false);
    } catch (e) {
        window.attachEvent('onload', onLoad);
    }
})(function() {
  var w = $(window).width();
  if (w > 1024){
    var tags = ["img","input"];
    for( var i=0, len=tags.length; i<len; i++ ) {
      var over = function() { this.src = this.src.replace('_off.', '_on.'); };
      var out  = function() { this.src = this.src.replace('_on.', '_off.'); };
      var el = document.getElementsByTagName(tags[i]);
      for (var j=0, len2=el.length; j<len2; j++) {
        var attr = el[j].getAttribute('src');
        if (!el[j].src.match(/_off\./)&&attr) continue;
        el[j].onmouseover = over;
        el[j].onmouseout  = out;
      }
    }
  }
});

$(window).load(function() {
	var pagetop = $('.pagetop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.stop().animate({'bottom' : '2px'}, 200);
		} else {
			pagetop.stop().animate({'bottom' : '-100px'}, 200); 
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
});

jQuery(function($){
$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager',
  controls: false
});
});

$(".modal").modaal({type:'image'});