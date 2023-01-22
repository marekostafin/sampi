var data = [
    {
        user: "Julia Kowalska",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "08/01/2022",
        send: "Oczekujący",
        firstInput: "Meet-up",
        secondInput: "Kraków",
        thirdInput: 500,
        fourthInput: "Komunikacja miejska",
        fifthInput: 2,
    },
    {
        user: "Krzysztof Rutkowski",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "09/01/2022",
        send: "Oczekujący",
        firstInput: "Spotkanie służobwe",
        secondInput: "Warszawa",
        thirdInput: 100,
        fourthInput: "Samochód służbowy",
        fifthInput: 2,
    },
    {
        user: "Jarosław Bąk",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "04/01/2022",
        send: "Oczekujący",
        firstInput: "Natan Bąk",
        secondInput: "2023-02-05",
        thirdInput: "2023-05-25",
        fourthInput: "on",
        fifthInput: null,
    },
    {
        user: "Bartosz Walaszek",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "05/01/2022",
        send: "Oczekujący",
        firstInput: "Tytus Bomba",
        secondInput: "2023-03-20",
        thirdInput: "2023-09-28",
        fourthInput: "off",
        fifthInput: null,
    },
    {
        user: "Andrzej Adamczyk",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "22/12/2021",
        send: "Oczekujący",
        firstInput: "Tomasz",
        secondInput: "Karolak",
        thirdInput: 123456789,
        fourthInput: "Zatrudniony",
        fifthInput: "on",
    },
    {
        user: "Łukasz Pomarańcza",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "24/12/2021",
        send: "Oczekujący",
        firstInput: "Marcin",
        secondInput: "Kajman",
        thirdInput: 921321313,
        fourthInput: "Bezrobotny",
        fifthInput: "off",
    },
]

var usersTable = [
    "Michał Szkot",
    "Jan Kowalski",
    "Odeta Brosz"
]

var colors = {
    "Oczekujący":"#FFB400",
    "Zaakceptowany":"#000090",
    "Odrzucony":"#8B0000"
}

function storeData() {
    sessionStorage.setItem("wnioski-hr", JSON.stringify(data.slice(0, 6)))
}

function retriveData() {
    data = JSON.parse(sessionStorage.getItem("wnioski-hr"))
    for(const iUser of usersTable) {
        wnioski = sessionStorage.getItem("wnioski-" + iUser)
        if (wnioski != null) {
            wnioski = JSON.parse(wnioski)
            for (let wniosek of wnioski) {
                if (wniosek.send == "Oczekujący" || wniosek.send == "Zaakceptowany" || wniosek.send == "Odrzucony")
                    data.push(wniosek);
            }
        }
    }
}

function onStart(){
    let wnioski = sessionStorage.getItem("wnioski-hr")
    if(wnioski == null) {
        storeData()
    }
    retriveData()
}

function currentWniosek(index) {
    sessionStorage.setItem("current-wniosek", index);
}

function loadWnioskiHR() {
    let contener = document.getElementById("wnioski-list")
    retriveData();
    while (contener.firstChild) {
        contener.removeChild(contener.lastChild)
    }

    data.reverse();
    let index = data.length - 1;
    for(const wniosek of data) {
        let li = document.createElement("li")
        li.id = "wniosek" + index;
        li.style.border = 'solid 3px'
        li.style.backgroundColor = 'white';
        li.style.listStyle = 'none'
        li.style.marginBottom = "10px"
        let buttondiv = document.createElement("div");
        let button = document.createElement("button")
        button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
        button.id = index;
        button.innerText = "Przejdz do wniosku"
        buttondiv.appendChild(button)
        li.innerHTML = `
        <div class="row container-fluid">
            <div class="col-sm-3 p-2">
                <h5>${wniosek.user}</h5>
            </div>
            <div class="col-sm-4 p-2">
                <h5>${wniosek.data}</h5>
            </div>
            <div class="col-sm-2 p-2">
                <h5 style="color: ${colors[wniosek.send]}">${wniosek.send}</h5>
            </div>
            <div class="col-sm-3 p-0">
                ${buttondiv.innerHTML}
            </div>
        </div>
        `;
        contener.appendChild(li)
        index--

    }
    data.reverse();
    hideWnioskiHR(document.getElementById("wniosek-type").value);
}

function hideWnioskiHR(wniosekName) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].name != wniosekName) {
            document.getElementById("wniosek" + i).style.display = "none"
        }
    }
}

function buttonlistener() {
    document.body.addEventListener("click", function (event) {
        if(event.target.innerText == "Przejdz do wniosku") {
            currentWniosek(event.target.id)
            location.href = data[event.target.id].link.split(".")[0] + "-wypełniony.html"
        }

        if(event.target.innerText === "Zaakceptuj") {
            changeState("Zaakceptowany")
            location.href = "/sampi/pages/wnioski-hr.html"
        }

        if(event.target.innerText === "Odrzuć") {
            changeState("Odrzucony")
            location.href = "/sampi/pages/wnioski-hr.html"
        }
    })
}

function fillWniosek() {
    retriveData()
    current = sessionStorage.getItem("current-wniosek");
    document.getElementById("firstInput").value = data[current].firstInput
    document.getElementById("secondInput").value = data[current].secondInput
    document.getElementById("thirdInput").value = data[current].thirdInput
    var fourthvalue = data[current].fourthInput
    if(fourthvalue == "on") {
        document.getElementById("fourthInput").checked = true;
    }
    else if(fourthvalue == "off") {
        document.getElementById("fourthInput").checked = false;
    }
    else {
        document.getElementById("fourthInput").value = data[current].fourthInput
    }
    var fifthvalue = data[current].fifthInput;
    if(fifthvalue == "on") {
        document.getElementById("fifthInput").checked = true;
    }
    else if(fifthvalue == "off") {
        document.getElementById("fifthInput").checked = false;
    }
    else {
        document.getElementById("fifthInput").value = data[current].fifthInput
    }
}

function changeState(state) {
    current = sessionStorage.getItem("current-wniosek");
    data[current].send = state;
    var getdata = sessionStorage.getItem("wnioski-" + data[current].user)
    if(getdata != null) {
        getdata = JSON.parse(getdata)
        if(data[current].name === "Zwrot kosztów delegacji") {
            getdata[0].send = state;
        }
        else if(data[current].name === "Wniosek o urlop macierzyński") {
            getdata[1].send = state;
        }
        else {
            getdata[2].send = state;
        }
        sessionStorage.setItem("wnioski-" + data[current].user, JSON.stringify(getdata));
    }
    storeData();
}

document.addEventListener("DOMContentLoaded", buttonlistener)

