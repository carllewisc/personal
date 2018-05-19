var html = document.querySelector("html");
var toggleOpen = document.getElementById('toggle-open');
var toggleClose = document.getElementById('toggle-close');
var navMenu = document.getElementsByClassName('nav-menu')[0];
//var card = document.querySelectorAll('.card');

html.addEventListener('click', function () {
  navMenu.classList.remove('open');
});

toggleOpen.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('open');
});

toggleClose.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('open');
});

// card.forEach(c => {
//   c.addEventListener('click', function () {
//   });
// });

/**/
$(function(){
	$('.galeria .card').on('click', function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src', ruta_imagen);
	});

	$('#modal').on('click', function(){
		$('#modal').modal('hide');
	});
});
/* Boton para ir al top*/
$(document).ready(function(){
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });
});
