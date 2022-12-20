var mode = ""

$( "#work" ).click(function() {
    revert(mode)
    mode = "schedule-work"
    $("#work").addClass("schedule-button-active")
});
$( "#call" ).click(function() {
    revert(mode)
    mode = "schedule-call"
    $("#call").addClass("schedule-button-call-active")
});
$( "#unavailable" ).click(function() {
    revert(mode)
    mode = "schedule-unavailable"
    $("#unavailable").addClass("schedule-button-unavailable-active")
});
$( "#trip" ).click(function() {
    revert(mode)
    mode = "schedule-trip"
    $("#trip").addClass("schedule-button-trip-active")
});
$(document).ready( function() {
    $('#grafik').click( function(event) {
        var target = $(event.target);
        $td = target.closest('td');
        $td.removeClass()
        $td.addClass(mode);
    });
});
function revert(a) {
    switch(a){
        case "schedule-work":
            $("#work").removeClass("schedule-button-active")
            break;
        case "schedule-call":
            $("#call").removeClass("schedule-button-call-active")
            break;
        case "schedule-unavailable":
            $("#unavailable").removeClass("schedule-button-unavailable-active")
            break;
        case "schedule-trip":
            $("#trip").removeClass("schedule-button-trip-active")
            break;
    }

}

$(function() {
    var weekpicker = $("#weekpicker1").weekpicker();
});