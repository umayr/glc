(function () {
    'use strict';

    $(function () {
        $.getJSON('../scripts/colours.json', function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push('<div class="col-md-3"><div class="colour"><a href="#'
                    + key.toLowerCase().split(' ').join('-')
                    + '" data-key="' + key + '" data-value="' + val
                    + '"><span class="circle" style="background-color: '
                    + val + ';"></span> ' + key + '</a></div></div>');
            });
            $('.colours').append(items.join(""));
        });

        $('.colours').on('click', 'a', function (e) {
            e.preventDefault();
            var key = $(this).data('key');
            var val = $(this).data('value');
            var display = $('.large-display');
            var heading = $('.large-display h1');
            display.removeAttr('style').css('background-color', val);
            heading.text(key);

            display.removeClass('hide');
        });
    });
})();