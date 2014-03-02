(function($) {
    var $window = $(window);

    $(function() {
        $('.answer-item').on('click', function(e) {
            var $this = $(this),
                $wrap = $this.closest('section'),
                value = $this.data('value');

            $wrap.find('.answer-item').not(this).parent().addClass('disabled').on('transitionend', function() {
                var $list = $this.parent(),
                    href = $wrap.find('.next').attr('href'),
                    $target = $(href),
                    judge = $wrap.data('judge');


                if(judge === 0 && value === 1) {
                    $('.main-image, .q-wrap').fadeOut();

                    $('#japan').addClass('visible');
                    return;
                }
                if(judge === value) {

                    $('.main-image, .q-wrap').fadeOut();
                    
                    $('#' + $wrap.data('link')).addClass('visible');
                } else {
                    $list.find('.comment, .next').show();
                    setTimeout(function() {
                        $list.find('.comment').addClass('visible');
                        $wrap.find('.sub-image').addClass('visible');
                        $target.show();
                    });
                    $this.hide();
                }
            });

            e.preventDefault();
        });

        $('.next').on('click', function(e) {
            var href = $(this).attr('href')
                $target = $(href);

            $target.show();
            $('html, body').animate({
                scrollTop: $target.offset().top - 90
            });

            e.preventDefault();
        });

        $window.on('scroll', function() {
            var scrollTop = $window.scrollTop(),
                winHeight = window.innerHeight || $window.outerHeight();

            $('.image1').each(function() {
                var $parallax = $(this),
                    parallaxHeight = $parallax.height(),
                    parallaxTop = $parallax.offset().top,
                    rate =  (winHeight + scrollTop - parallaxTop) / (parallaxHeight + winHeight - 400);

                    $parallax.css({
                        'background-position': '0 '+ (100 - rate * 100) +'%'
                    });
            });
        });

    });
}.call(window, jQuery));











