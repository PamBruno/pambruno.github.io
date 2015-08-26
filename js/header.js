$(document).ready(function(){
	// cambio del menu cuando hago scroll

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('nav').addClass('nav-fixed');
		} else {
			$('nav').removeClass('nav-fixed');
		}
	});
});

// scroll en funcionamiento 

$(function(){
	//clic en un enlace de la lista
	$('nav ul li a').on('click',function(e){
		//prevenir en comportamiento predeterminado del enlace
		e.preventDefault();
		//obtenemos el id del elemento en el que debemos posicionarnos
		var strAncla=$(this).attr('href');
		
		//utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
		$('body,html').stop(true,true).animate({
			//realizamos la animacion hacia el ancla
			scrollTop: $(strAncla).offset().top
		},500);
	});
});


