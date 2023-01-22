var szkotData = [
    {
        user: "Michał Szkot",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "09/01/2022",
        send: "Oczekujący",
        firstInput: "Konferencja",
        secondInput: "Wrocław",
        thirdInput: 10,
        fourthInput: "Komunikacja miejska",
        fifthInput: 2,
    },
    {
        user: "Michał Szkot",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Michał Szkot",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
]

var janKowalskiData = [
    {
        user: "Jan Kowalski",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Jan Kowalski",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Jan Kowalski",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
]

var obroszData = [
    {
        user: "Odeta Brosz",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Odeta Brosz",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Odeta Brosz",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "01/01/2000",
        send: false,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
]

function atStart() {
    var szkot = sessionStorage.getItem("wnioski-Michał Szkot")
    if(szkot == null) {
        sessionStorage.setItem("wnioski-Michał Szkot", JSON.stringify(szkotData))
    }
    var jan = sessionStorage.getItem("wnioski-Jan Kowalski")
    if(jan == null) {
        sessionStorage.setItem("wnioski-Jan Kowalski", JSON.stringify(janKowalskiData))
    }

    var brosz = sessionStorage.getItem("wnioski-Odeta Brosz")
    if(brosz == null) {
        sessionStorage.setItem("wnioski-Odeta Brosz", JSON.stringify(obroszData))
    }
}