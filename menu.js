$(document).ready(function() {
    

    // Función para mostrar el menú correspondiente al hacer clic en cada pestaña
    $('.nav-link-cookies').on('click', function(e) {
        e.preventDefault();
        
        // Remover la clase 'active' de todas las pestañas
        $('.nav-link-cookies').removeClass('active');
        $(this).addClass('active');
        
        // Ocultar todos los menús y mostrar solo el correspondiente
        $('#linea-tradicional-menu').hide();
        $('#linea-soft-menu').hide();
        
        if ($(this).text().includes('Línea Tradicional')) {
            $('#linea-tradicional-menu').show();
        } else if ($(this).text().includes('Línea Soft Saludable')) {
            $('#linea-soft-menu').show();
        }
        
        // Ejecutar la función de ajuste del selector horizontal
        test();
    });


    // Función para inicializar el selector horizontal y ajustarlo al menú activo
    function test() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    }

    // Ejecutar la función 'test' al cargar y redimensionar la ventana
    $(window).on('load resize', function() {
        setTimeout(function() {
            test();
        }, 500);
    });

    // Inicializar el estado visible del menú
    $('#linea-soft-menu').show();
    $('#linea-tradicional-menu').hide();
    test();

});