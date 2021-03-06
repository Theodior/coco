$(window).on('load', function () {
    console.log("pre");
    $('.preloader').fadeOut('slow');
});

(function ($) {


    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'routines.showroom',
            'container': "#instagram-feed1",
            'display_profile': true,
            'display_biography': true,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 6,
            'items_per_row': 3,
            'margin': 1
        });

        // https://github.com/jlmakes/scrollreveal
        ScrollReveal().reveal('.elementone');
        ScrollReveal().reveal('#text');
        ScrollReveal().reveal('#quote');
        ScrollReveal().reveal('.elementtwo');
        ScrollReveal().reveal('.vtxt');
        ScrollReveal().reveal('.quote4');
        ScrollReveal().reveal('.bw');
        ScrollReveal().reveal('.elementthree');
        ScrollReveal().reveal('#vitaminer');
        ScrollReveal().reveal('#text3');
        ScrollReveal().reveal('#text4');
        ScrollReveal().reveal('#quote2');
        ScrollReveal().reveal('.elementfour');
        ScrollReveal().reveal('#bottles');
        ScrollReveal().reveal('#carousel');
        ScrollReveal().reveal('#faq');
        ScrollReveal().reveal('#some');
        ScrollReveal().reveal('#home-newsletter');
        ScrollReveal().reveal('#indigo');


    });
})(jQuery);
