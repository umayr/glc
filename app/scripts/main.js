(function () {
    'use strict';

    $(function () {

        $.getJSON('scripts/colours.json', function (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    appendColour(property, data[property]);
                }
            }
        });

    });

    var appendColour = function (name, colour) {
        var text = $('<p />').text(name);
        var shadow = $('<div />').addClass('shadow').append(text);
        var box = $('<div />').addClass('colour').css('background-color', colour).append(shadow);

        box.appendTo('.colours');
    };


})();