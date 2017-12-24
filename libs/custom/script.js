$(document).ready(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    new WOW().init();
    inserirEstrelas();
});

function inserirEstrelas() {
    $('.estrelas').each(function(key, element) {
        let quantidadeEstrelas = parseFloat($(element).attr('quantidadeEstrelas'));
        let htmlEstrelas       = '';

        for (var i = 0; i < Math.floor(quantidadeEstrelas); i++) {
            htmlEstrelas += '<i class="fa fa-star" aria-hidden="true"></i>';
        }
        if (quantidadeEstrelas != Math.floor(quantidadeEstrelas)) {
            htmlEstrelas += '<i class="fa fa-star-half-o" aria-hidden="true"></i>';
        }
        for (var i = 0; i < (5 - Math.ceil(quantidadeEstrelas)); i++) {
            htmlEstrelas += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }

        $(element).html(htmlEstrelas);
        console.log(element);
        console.log(htmlEstrelas);
    });
}