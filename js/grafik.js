var mode = ""

$("#work").click(function () {
    revert(mode)
    mode = "schedule-work"
    $("#work").addClass("schedule-button-active")
});
$("#call").click(function () {
    revert(mode)
    mode = "schedule-call"
    $("#call").addClass("schedule-button-call-active")
});
$("#unavailable").click(function () {
    revert(mode)
    mode = "schedule-unavailable"
    $("#unavailable").addClass("schedule-button-unavailable-active")
});
$("#trip").click(function () {
    revert(mode)
    mode = "schedule-trip"
    $("#trip").addClass("schedule-button-trip-active")
});
let year
let week

let tds

function loadCalendar(inputweek, inputyear) {

    year = inputyear;
    week = inputweek;

    tds = $("#grafik td");
    for (var i = 0; i < tds.length; i++) {


        var prevState = sessionStorage.getItem(i + ":" + week + year);
        var cell = $(tds.get(i));
        cell.removeClass()
        if (prevState === null) {
            sessionStorage.setItem(i + ":" + week + year, "none");
        } else {


            switch (prevState) {
                case "none":

                    break;
                case "schedule-work":

                    cell.addClass("schedule-work");
                    break;
                case "schedule-call":

                    cell.addClass("schedule-call");
                    break;
                case "schedule-trip":
                    cell.addClass("schedule-trip");
                    break;
                case "schedule-unavailable":
                    cell.addClass("schedule-unavailable");
                    break;
            }

            cell.data("state", prevState);
        }
    }


}

$(document).ready(function () {
    $('#grafik').click(function (event) {
        var target = $(event.target);
        $td = target.closest('td');
        $td.removeClass()
        $td.addClass(mode);

        var index = tds.index(target);
        sessionStorage.setItem(index + ":" + week + year, mode);
    });
});

function revert(a) {
    switch (a) {
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

$(function () {
    var weekpicker = $("#weekpicker1").weekpicker();
});