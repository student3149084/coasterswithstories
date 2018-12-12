$(document).ready(function(){
	$(".article-item").hover(function(){
		$(this).find('.front').hide();
		$(this).find('.back').show();
	}, function(){
		$(this).find('.front').show();
		$(this).find('.back').hide();
	});
});

$(document).ready(function(){
	$("#about").click(function(){
		$("#about_box").show();
		$("#about_text").show();
	});
	$("#about").mouseleave(function(){
        $("#about_box").fadeOut();
        $("#about_text").fadeOut();
    });
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 400) {
    document.getElementsByClassName("grid-container")[0].style.gridTemplateColumns = "repeat(8, 1fr)";
  } else {
    document.getElementsByClassName("grid-container")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  }
}