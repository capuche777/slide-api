$(function(){
    function cambiarImagen() {
        var slideIndice = $('.slide').index($('.active'));

        $('.cambiar-boton').show();

        if (slideIndice == 0) {
            $('.boton-anterior').hide();
        } else if (slideIndice == $('.slide').length-1) {
            $('.boton-siguiente').hide();
        }
    }

    $('.boton-indice').click(function(){
        $('.active').removeClass('active');
        var clickeado = $('.boton-indice').index($(this));
        $('.slide').eq(clickeado).addClass('active');

        cambiarImagen();
    });

    $('.cambiar-boton').click(function(){
        var mostrarSlide = $('.active');
        var ocultarSlide = mostrarSlide.removeClass('active');

        if ($(this).hasClass('boton-siguiente')) {
            mostrarSlide.next().addClass('active');
        } else {
            mostrarSlide.prev().addClass('active');
        }

        cambiarImagen();    
    });
});