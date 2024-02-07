window.addEventListener('load', function() {
    // Establecer un tiempo mínimo de carga (en milisegundos)
    var tiempoMinimo = 3000;

    // Obtener el tiempo actual
    var tiempoInicio = new Date().getTime();

    // Oculta el preloader después del tiempo mínimo
    var tiempoRestante = tiempoMinimo - (new Date().getTime() - tiempoInicio);
    if (tiempoRestante > 0) {
        setTimeout(function() {
            // Oculta el preloader
            document.getElementById('preloader').style.opacity = '0';

            // Muestra la página principal
            document.getElementById('index').style.opacity = '1';
        }, tiempoRestante);
    } else {
        // Si ya ha pasado el tiempo mínimo, oculta el preloader inmediatamente
        document.getElementById('preloader').style.opacity = '0';

        // Muestra la página principal
        document.getElementById('index').style.opacity = '1';
    }
});

