$(document).ready(function () {

    console.log('scripts.js foi carregado!');
    // Atualiza ano do footer
    $('#year').text(new Date().getFullYear());

    // Busca nos cards
    $('#search-input').on('keyup', function () {
        let termo = $(this).val().toLowerCase().trim();

        $('.blog-card').each(function () {

            let titulo = $(this).find('.blog-title').text().toLowerCase();
            let tags = $(this).attr('data-tags') ? $(this).attr('data-tags').toLowerCase() : '';

            // Verifica se o termo está NO TÍTULO ou NAS TAGS
            if (titulo.includes(termo) || tags.includes(termo) || termo === '') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    // BOTÃO VOLTAR AO TOPO
    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 200) {
            $("#btn-topo").fadeIn();
        } else {
            $("#btn-topo").fadeOut();
        }

    });

    $("#btn-topo").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 50); // animação suave
    });

    // SCROLLSPY CUSTOMIZADO PARA NAVBAR
    $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop();
        let windowHeight = $(window).height();
        let documentHeight = $(document).height();

        let conteudoPos = $("#campo-busca").offset().top - 150;

        // Se o usuário chegou ao final da página → ativa CONTATO
        if (scrollPos + windowHeight >= documentHeight - 10) {
            $(".nav-link").removeClass("active");
            $('a[href="#contato"]').addClass("active");
            return;
        }

        // Se está na seção de conteúdo
        if (scrollPos >= conteudoPos) {
            $(".nav-link").removeClass("active");
            $('a[href="#campo-busca"]').addClass("active");
            return;
        }

        // Caso contrário → INÍCIO ativo
        $(".nav-link").removeClass("active");
        $('a[href="#topo"]').addClass("active");
    });
});