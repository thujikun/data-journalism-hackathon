(function($) {
    $(function() {
        $('.answer-item').on('click', function(e) {
            var $this = $(this),
                $wrap = $this.closest('section');

            $wrap.find('.answer-item').not(this).parent().addClass('disabled').on('transitionend', function() {
                var $list = $this.parent();

                $list.find('.comment, .next').show();
                setTimeout(function() {
                    $list.find('.comment').addClass('visible');
                });
                $this.hide();
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
    });
}.call(window, jQuery));