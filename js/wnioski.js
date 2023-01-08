var data = [
    {
        name: "Zwrot kosztów delegacji",
        data: "01/01/2000",
        send: true
    },
    {
        name: "Wniosek o urlop macierzyński",
        data: "01/01/2000",
        send: false
    },
    {
        name: "Zgłoszenie członka rodziny do ubezpieczenia",
        data: "01/01/2000",
        send: true
    },
    {
        name: "Oświadczenie o wysokości podstawy ZUS",
        data: "01/01/2000",
        send: true
    },
    {
        name: "Oświadczenie o zapoznaniu się z regulaminem pracy",
        data: "01/01/2000",
        send: false
    },
]

function storeData() {
    sessionStorage.setItem("wnioski", JSON.stringify(data))
}

function retriveData() {
    data = JSON.parse(sessionStorage.getItem("wnioski"))
}

function onStart(){
    let szkolenia = sessionStorage.getItem("wnioski")
    if(szkolenia == null) {
        storeData()
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
            let button = document.createElement("button")
            button.className = "btn btn-outline-dark mt-1 mb-1 col-9"
            button.id = index;
            button.innerText = "Wypełnij wniosek"
            buttondiv.appendChild(button)
        } else {
            let button = document.createElement("button")
            button.className = "btn btn-outline-dark mt-1 mb-1 col-9 active"
            button.id = index;
            button.innerText = "Wniosek został wypełniony"
            buttondiv.appendChild(button)
            let date = document.createElement("h6")
            console.log(data.innerHTML)
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
}

onStart()