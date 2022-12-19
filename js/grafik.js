$(document).ready( function() {
    $('#grafik').click( function(event) {
        var target = $(event.target);
        $td = target.closest('td');
        $td.addClass('greenBg');



    });
});