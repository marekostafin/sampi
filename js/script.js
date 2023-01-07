window.addEventListener("resize",navNotificationsOffOn)

function navNotificationsOffOn() {
    var notification = document.getElementById("notification");
    var navUser = document.getElementById("nav-user");

    if(window.innerWidth <= 800) {
        notification.classList.replace("on","off");
        navUser.classList.replace("on","off");
    } else {
        notification.classList.replace("off","on");
        navUser.classList.replace("off","on");
    }
}

function menuButtonClick() {
    var menuContainer = document.getElementById("menu-container")
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-button");
    var content = document.getElementById("content");
    var buttonIcon = document.getElementById("menu-button-icon");

    if(menu.classList.contains("on")) {
        menu.classList.replace("on","off");
        menu.classList.remove("col-sm-10");
        menuContainer.classList.remove("col-sm-3")
        content.classList.replace("col-sm-9","col-sm-12");
        button.classList.add("menu-button-hidden");
        buttonIcon.classList.replace("bi-caret-right-fill", "bi-caret-left-fill");
    } else {
        menu.classList.replace("off","on");
        menu.classList.add("col-sm-10");
        menuContainer.classList.add("col-sm-3");
        content.classList.replace("col-sm-12","col-sm-9");
        button.classList.remove("menu-button-hidden");
        buttonIcon.classList.replace("bi-caret-left-fill", "bi-caret-right-fill");
    }
}

function randomBanner() {
    let banners = [
        "Przypominamy, że herbata Lipton jest tylko dla zarządu",
        "Uwaga! Ciężkie opady śniegu w open space #3! Zachowaj szcze...",
        "Loteria pracownicza! Wygraj nadgodziny i inne nagrody!",
        "Przypominamy! Spożycie większej ilości owoców niż zadeklaro...",
        "Webinar \"Podwyżki - dlaczego nie dają szczęścia\" już dost...",
        "Konkurs na bukiet ze spinaczy biurowych wygrał Andrzej Wyż!",
        "Poszukiwany niebieski długopis biurowy, ostatnio widziany w...",
        "Poradnik \"10 zamienników dla Lorem Ipsum\" już dostępny w...",
        "Przypominamy, że składkę za korzystanie z windy należy uiśc..."
    ]
    let index = Math.floor(Math.random() * banners.length);
    return banners[index];
}

function includeNavbar() {
    document.getElementById("navbar-include").innerHTML = `
    <nav class="navbar navbar-expand-sm border-bottom border-dark">
        <div class="col-sm-4">
            <a href="/sampi/index.html"><img width="200px" src="/sampi/style/img/sampi.png"/></a>
        </div>
        <div id="notification" class="col-sm-4 text-center on">
            <div style="white-space: nowrap;overflow:hidden;" class="rounded border border-dark">${randomBanner()}</div>
        </div>
        <div class="col-sm-2 offset-sm-2">
            <a href="/sampi/pages/pracownicy/kowalski-jan.html">
                <div class="row">
                    <div id="nav-user" class="col-sm-10 text-right float-right on"">
                        <h4 style="margin-bottom: 0px">Jan Kowalski</h4>
                            Inżynier Oprogramowania
                    </div>
                    <div id="nav-user-icon" class="col-sm-2" style="padding-left: 0px">
                        <h1>
                            <img width="50em" src="/sampi/style/img/avatar-kowalski-jan.png" style="border-radius: 50%;">
                        </h1>
                    </div>
                </div>
            </a>
        </div>
    </nav>`;
}

function includeMenu() {
    document.getElementById("menu-include").innerHTML = `
    <div id="menu-container" class="text-center">
        <div id="menu-row" class="row">
            <div id="menu-button-container" class="col-sm-1"></divclass>
                <button id="menu-button" class="btn btn-light float-right menu-button-hidden" type="button" onclick="menuButtonClick()"><i id="menu-button-icon" class="bi bi-caret-left-fill"></i></button>
            </div>
            <div id="menu" class="col-sm-12 border-left border-dark off">
                <div class="row">
                    <div class="col"><a href="/sampi/pages/pracownicy.html"><h1 class="nav-icon"><i class="bi bi-people-fill"></i></h1><h3>Pracownicy</h3></a></div>
                    <div class="col"><a href="/sampi/pages/aktualnosci.html"><h1 class="nav-icon"><i class="bi bi-newspaper"></i></h1><h3>Aktualności</h3></a></div>
                </div>
                <div class="row">
                    <div class="col"><a href="/sampi/pages/grafik.html"><h1 class="nav-icon"><i class="bi bi-calendar-week"></i></h1><h3>Grafik</h3></a></div>
                    <div class="col"><a href="/sampi/pages/komunikator.html"><h1 class="nav-icon"><i class="bi bi-chat-left-dots"></i></h1><h3>Komunikator</h3></a></div>
                </div>
                <div class="row">
                    <div class="col"><a href="/sampi/pages/wnioski.html"><h1 class="nav-icon"><i class="bi bi-card-list"></i></h1><h3>Wnioski</h3></a></div>
                    <div class="col"><a href="/sampi/pages/szkolenia.html"><h1 class="nav-icon"><i class="bi bi-briefcase"></i></h1><h3>Szkolenia</h3></a></div>
                </div>
                <div class="row">
                    <div class="col"><a href="/sampi/pages/moje-biuro.html"><h1 class="nav-icon"><i class="bi bi-building"></i></h1><h3>Moje biuro</h3></a></div>
                    <div class="col"><a href="/sampi/pages/kontakt.html"><h1 class="nav-icon"><i class="bi bi-telephone-fill"></i></h1><h3>Kontakt</h3></a></div>
                </div>
            </div>
        </div>
    </div>`;
}