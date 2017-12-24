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
        let quantidadeEstrelas = $(element).attr('quantidadeEstrelas');
        let htmlEstrelas       = '';

        for (var i = 0; i < quantidadeEstrelas; i++) {
            htmlEstrelas += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        }
        for (var i = 0; i < (5 - quantidadeEstrelas); i++) {
            htmlEstrelas += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
        }

        $(element).html(htmlEstrelas);
        console.log(element);
        console.log(htmlEstrelas);
    });
}