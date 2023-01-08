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
let year
let week
// let date
let tds
function loadCalendar(inputweek, inputyear) {
    // var calendar = $('#weekpicker1').weekpicker()
    year = inputyear
    week = inputweek
    // date = selecteddate
    tds = $("td");
    for (var i = 0; i < tds.length; i++) {

        //Get the previous state of the td:
        var prevState = sessionStorage.getItem(i + ":" + week + year);
        console.log(prevState);
        //If prevState is null, set it to "first":
        if (prevState === null) {
            sessionStorage.setItem(i + ":" + week + year, "none");
        }
        //Otherwise, restore prevState:
        else {
            //Get the td:
            var cell = $(tds.get(i));
            cell.removeClass()
            //Depending on prevState:
            switch (prevState) {
                case "none":
                    //Do nothing if it's in the first state because that's the default.
                    break;
                case "schedule-work":

                    cell.addClass("schedule-work");
                    break;
                case "schedule-call":
                    //Add the class "yellow" if it's in the third state:
                    cell.addClass("schedule-call");
                    break;
                case "schedule-trip":
                    cell.addClass("schedule-trip");
                    break;
                case "schedule-unavailable":
                    cell.addClass("schedule-unavailable");
                    break;
            }
            //Set cell's data-state to prevState:
            cell.data("state", prevState);
        }
    }


}
$(document).ready( function() {
    $('#grafik').click( function(event) {
        var target = $(event.target);
        $td = target.closest('td');
        $td.removeClass()
        $td.addClass(mode);

        var index = tds.index(target);
        sessionStorage.setItem(index + ":" + week + year, mode);
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