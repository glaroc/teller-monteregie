var Projects = {
	init: function(){
		$(".projects-item").click(function(){
			var name = $(this).attr('scene-name')
			window.scrollBy(0, $('section[data-scene=\''+name+'\']').offset().top - $(window).scrollTop() - $('.storymap-navbar').height() - 30);
		})
	}
}