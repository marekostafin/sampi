var mode = "schedule-work"
$( "#work" ).click(function() {
    mode = "schedule-work"
});
$( "#call" ).click(function() {
    mode = "schedule-call"
});
$( "#unavailable" ).click(function() {
    mode = "schedule-unavailable"
});
$( "#holiday" ).click(function() {
    mode = "schedule-holiday"
});
$(document).ready( function() {
    $('#grafik').click( function(event) {
        var target = $(event.target);
        $td = target.closest('td');
        $td.addClass(mode);



    });
});