var data = [
    {
        user: "Michał Szkot",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "09/01/2022",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Julia Kowalska",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "08/01/2022",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Krzysztof Rutkowski",
        name: "Zwrot kosztów delegacji",
        link: "/sampi/pages/wnioski/zwrot-kosztów-delegacji.html",
        data: "05/01/2022",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Jarosław Bąk",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "05/01/2022",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Bartosz Walaszek",
        name: "Wniosek o urlop macierzyński",
        link: "/sampi/pages/wnioski/wniosek-o-urlop-macierzynski.html",
        data: "04/01/2022",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Andrzej Adamczyk",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "24/12/2021",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
    {
        user: "Łukasz Pomarańcza",
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        link: "/sampi/pages/wnioski/zgłoszenie-członka-rodziny-do-ubezpieczenia.html",
        data: "22/12/2021",
        send: true,
        firstInput: null,
        secondInput: null,
        thirdInput: null,
        fourthInput: null,
        fifthInput: null,
    },
]

function storeData() {
    sessionStorage.setItem("wnioski-hr", JSON.stringify(data))
}

function retriveData() {
    data = JSON.parse(sessionStorage.getItem("wnioski-hr"))
}

function onStart(){
    let wnioski = sessionStorage.getItem("wnioski-hr")
    if(wnioski == null) {
        storeData()
    }
}

function loadWnioskiHR() {
    let contener = document.getElementById("wnioski-list")
    retriveData();
    while (contener.firstChild) {
        contener.removeChild(contener.lastChild)
    }

    let index = 0;
    for(const wniosek of data) {
        let li = document.createElement("li")
        li.id = "wniosek" + index;
        li.style.border = 'solid 3px'
        li.style.backgroundColor = 'white';
        li.style.listStyle = 'none'
        li.style.marginBottom = "10px"
        let buttondiv = document.createElement("div");
        let button = document.createElement("a")
        button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
        button.id = index;
        button.innerText = "Przejdz do wniosku"
        buttondiv.appendChild(button)

        // let datediv = document.createElement("div");
        // if(wniosek.send === false) {
        //     let button = document.createElement("a")
        //     button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
        //     button.id = index;
        //     button.innerText = "Wypełnij wniosek"
        //     button.href = wniosek.link;
        //     buttondiv.appendChild(button)
        // } else {
        //     let button = document.createElement("button")
        //     button.className = "btn btn-outline-dark mt-1 mb-1 col-9 active"
        //     button.id = index;
        //     button.innerText = "Wniosek został wypełniony"
        //     buttondiv.appendChild(button)
        //     let date = document.createElement("h6")
        //     console.log(data.innerHTML)
        //     date.innerText = "Data złożenia wniosku: " + wniosek.data;
        //     datediv.appendChild(date);
        // }
        li.innerHTML = `
        <div class="row container-fluid">
            <div class="col-sm-3 p-2">
                <h5>${wniosek.user}</h5>
            </div>
            <div class="col-sm-4 p-2">
                <h5>${wniosek.data}</h5>
            </div>
            <div class="col-sm-2 p-2">
                <h5>${wniosek.send}</h5>
            </div>
            <div class="col-sm-3 p-0">
                ${buttondiv.innerHTML}
            </div>
        </div>
        `;
        contener.appendChild(li)
        index++

    }

    hideWnioskiHR(document.getElementById("wniosek-type").value);
}

function hideWnioskiHR(wniosekName) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].name != wniosekName) {
            document.getElementById("wniosek" + i).style.display = "none"
        }
    }
}