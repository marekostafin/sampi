var loggedUser = sessionStorage.getItem("loggedUser")

var data = [
    {
        user: loggedUser,
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
        user: loggedUser,
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
        user: loggedUser,
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
    // {
    //     name: "Oświadczenie o wysokości podstawy ZUS",
    //     data: "01/01/2000",
    //     send: true
    // },
    // {
    //     name: "Oświadczenie o zapoznaniu się z regulaminem pracy",
    //     data: "01/01/2000",
    //     send: false
    // },
]

function storeData() {
    sessionStorage.setItem("wnioski-" + loggedUser, JSON.stringify(data))
}

function retriveData() {
    data = JSON.parse(sessionStorage.getItem("wnioski-" + loggedUser))
}

function onStart(){
    let szkolenia = sessionStorage.getItem("wnioski-" + loggedUser)
    if(szkolenia != null) {
        retriveData();
    }
}

function hideWnioski(value) {
    let regex = value.toLowerCase()
    for (const wniosek of data) {
        let check = (wniosek.name.toLowerCase()).match(regex)

        if(!check) {
            document.getElementById(wniosek.name).style.display = "none"
        }
    }
}

function loadWnioski() {
    let contener = document.getElementById("wnioski-list")
    retriveData();
    while (contener.firstChild) {
        contener.removeChild(contener.lastChild)
    }

    let index = 0;
    for(const wniosek of data) {
        let li = document.createElement("li")
        li.id = wniosek.name
        li.style.border = 'solid 3px'
        li.style.backgroundColor = 'white';
        li.style.listStyle = 'none'
        li.style.marginBottom = "10px"
        let buttondiv = document.createElement("div");
        let datediv = document.createElement("div");
        if(wniosek.send === false) {
            let button = document.createElement("div")
            button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
            button.id = index;
            button.innerText = "Wypełnij wniosek"
            button.link = wniosek.link;
            buttondiv.appendChild(button)
        } else if(wniosek.send === "Odrzucony"){
            let button = document.createElement("div")
            button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
            button.id = index;
            button.innerText = "Wypełnij wniosek ponownie"
            button.link = wniosek.link;
            buttondiv.appendChild(button)
            let status = document.createElement("h6")
            status.className = "text-danger"
            status.innerText = "Wniosek został odrzucony"
            datediv.appendChild(status);
        }
        else if(wniosek.send === "Zaakceptowany") {
            let button = document.createElement("div")
            button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
            button.id = index;
            button.innerText = "Wypełnij wniosek ponownie"
            button.link = wniosek.link;
            buttondiv.appendChild(button)
            let status = document.createElement("h6")
            status.className = "text-success"
            status.innerText = "Wniosek został zaakceptowny"
            datediv.appendChild(status);
        }
        else {
            let button = document.createElement("button")
            button.disabled = true
            button.className = "btn btn-dark mt-1 mb-1 col-9 active"
            button.id = index;
            button.innerText = "Wniosek został wypełniony"
            buttondiv.appendChild(button)
            let date = document.createElement("h6")
            date.innerText = "Data złożenia wniosku: " + wniosek.data;
            datediv.appendChild(date);
        }
        li.innerHTML = `
        <div class="row container-fluid">
            <div class="head col-sm-6 p-0 d-flex align-items-center">
                <h5>${wniosek.name}</h5>
            </div>
            <div class="mid col-sm-3 p-1 d-flex align-items-center">
                ${datediv.innerHTML}
            </div>
            <div class="col-sm-3 p-2">
                ${buttondiv.innerHTML}
            </div>
        </div>
        `;
        contener.appendChild(li)
        index++

    }

    hideWnioski(document.getElementById("wyszukiwarka").value);
}

function sendWniosek(index) {
    retriveData()
    data[index].send = "Oczekujący";
    let now = new Date();
    let day = now.getDate()
    if(day < 10) {
        day = "0" + day;
    }
    let month = now.getMonth() + 1
    if(month < 10) {
        month = "0" + month;
    }
    data[index].data = `${day}/${month}/${now.getFullYear()}`
    data[index].firstInput = document.getElementById("firstInput").value;
    data[index].secondInput = document.getElementById("secondInput").value;
    data[index].thirdInput = document.getElementById("thirdInput").value;
    data[index].fourthInput = document.getElementById("fourthInput").value;
    data[index].fifthInput = document.getElementById("fifthInput").value;
    storeData();
}

function buttonlistener() {
    document.body.addEventListener("click", function (event) {
        if(event.target.innerText == "Wypełnij wniosek" || event.target.innerText == "Wypełnij wniosek ponownie") {
            storeData();
            console.log(sessionStorage.getItem("wnioski-" + loggedUser))
            console.log(data[event.target.id].link)
            location.href = data[event.target.id].link
        }
    })
}

document.addEventListener("DOMContentLoaded", buttonlistener)
