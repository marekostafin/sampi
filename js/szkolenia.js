var data = [
    {
        name: "Obsługa niszczarki do dokumentów",
        description: "Szkolenie obejmuje podłączenie niszczarki do prądu, włączenie\n" +
            "niszczarki oraz techniki wkładania dokumentów do niszczarki.\n" +
            "Szkolenie obowiązkowe dla działu HR.",
        data: "01.01.2023r.",
        hour: "13:00",
        place: "MS Teams",
        available_places: "10",
        signed: false
    },
    {
        name: "Owocowe Czwartki - Szkolenie BHP",
        description: "Szkolenie obejmuje poprawną technikę chwytania\n" +
            "owoców, mycie owoców przed ich spożyciem oraz recykling\n" +
            "pozostałości po spożytych owocach.",
        data: "12.05.2023r.",
        hour: "10:00",
        place: "MS Teams",
        available_places: "100",
        signed: true
    },
    {
        name: "MS Teams - Szkolenie z obsługi programu",
        description: "Szkolenie obejmuje skonfgurowanie programu, dołączenie do grup,\n" +
            "komunikację poprzez czat tekstowy i głosowy, blokowanie\n" +
            "użytkowników oraz porady w kadrowaniu obrazu z kamerki.",
        data: "26.12.2022r.",
        hour: "15:30",
        place: "MS Teams",
        available_places: "47",
        signed: false
    },
    {
        name: "Autocad - Szkolenie z obsługi programu",
        description: "Szkolenie obejmuje skonfgurowanie programu, podstawowe\n" +
            "narzędzia, projektowanie modeli, eksport projektów oraz przydatne\n" +
            "skróty oszczędzające czas.",
        data: "03.02.2023r.",
        hour: " 09:00",
        place: "MS Teams",
        available_places: "3",
        signed: false
    },
]

function storeData() {
    sessionStorage.setItem("szkolenia", JSON.stringify(data))
}

function retriveData() {
    data = JSON.parse(sessionStorage.getItem("szkolenia"))
}


function loadszkolenia() {
    let contener = document.getElementById("szkolenia-list")
    retriveData();
    while (contener.firstChild) {
        contener.removeChild(contener.lastChild)
    }
    let index = 0;
    for (const szkolenie of data) {
        let li = document.createElement("li")
        li.id = szkolenie.name
        li.style.border = 'solid 3px'
        li.style.backgroundColor = 'white';
        li.style.listStyle = 'none'
        li.style.marginBottom = "10px"
        let buttons = document.createElement("div")
        if (szkolenie.signed == true) {
            let st = document.createElement("button")
            let nd = document.createElement("button")
            st.className = "btn btn-outline-dark mt-1 mb-1 col-9 active"
            nd.className = "btn btn-outline-dark mt-1 mb-1 col-9"
            st.innerText = "Zapisano na szkolenie"
            nd.innerText = "Zrezygnuj"
            nd.id = index;
            buttons.appendChild(st)
            buttons.appendChild(nd)
        } else {
            let st = document.createElement("button")
            st.className = "btn btn-outline-dark mt-1 mb-1 col-9 mt-4"
            st.innerText = "Zapisz się na szkolenie"
            st.id = index;
            buttons.appendChild(st)
        }
        li.innerHTML = `
        <div class="row container-fluid">
            <div class="head col-sm-6 p-0">
                <h4>${szkolenie.name}</h4>
                <div class="col-sm p-0 h6" style='width: 450px'>${szkolenie.description}</div>
            </div>
            <div class="mid col-sm-3 p-2">
                <p class="h6">Data: ${szkolenie.data}</p>
                <p class="h6">Godzina: ${szkolenie.hour}</p>
                <p class="h6">Miejsce: ${szkolenie.place}</p>
            </div>
            <div class="col-sm-3 p-2">
                ${buttons.innerHTML}
            </div>
        </div>
        `;
        index++;
        contener.appendChild(li);
    }

    hideSzkolenia(document.getElementById("wyszukiwarka").value);
}

function buttonlistener() {
    document.body.addEventListener("click", function (event) {
        if(event.target.innerText == "Zapisz się na szkolenie") {
            data[event.target.id].signed = true;
            storeData();
            loadszkolenia();
        }

        if(event.target.innerText == "Zrezygnuj") {
            data[event.target.id].signed = false;
            storeData();
            loadszkolenia();
        }
    })
}


function onStart(){
    let szkolenia = sessionStorage.getItem("szkolenia")
    if(szkolenia == null) {
        storeData()
    }
}

function hideSzkolenia(value) {
    let regex = value.toLowerCase()
    for (const szkolenie of data) {
        let check1 = (szkolenie.name.toLowerCase()).match(regex)
        let check2 = (szkolenie.description.toLowerCase()).match(regex)

        if(!check1 && !check2) {
            document.getElementById(szkolenie.name).style.display = "none"
        }
    }
}


onStart()
document.addEventListener("DOMContentLoaded", buttonlistener)
document.addEventListener("input", loadszkolenia)


