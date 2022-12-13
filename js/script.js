function menuButtonClick() {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-button");
    var content = document.getElementById("content");
    var buttonIcon = document.getElementById("menu-button-icon");

    if(menu.classList.contains("on")) {
        menu.classList.replace("on","off");
        menu.classList.remove("col-sm-10");
        content.classList.replace("col-sm-9","col-sm-11");
        button.classList.add("menu-button-hidden");
        buttonIcon.classList.replace("bi-caret-right-fill", "bi-caret-left-fill");
    } else {
        menu.classList.replace("off","on");
        menu.classList.add("col-sm-10");
        content.classList.replace("col-sm-11","col-sm-9");
        button.classList.remove("menu-button-hidden");
        buttonIcon.classList.replace("bi-caret-left-fill", "bi-caret-right-fill");
    }
}

function includeNavbar() {
    document.getElementById("navbar-include").innerHTML = `
    <nav class="navbar navbar-expand-sm border-bottom border-dark">
        <div class="col-sm-4">
            <img width="200px" src="../style/img/sampi.png"/>
        </div>
        <div class="col-sm-4 text-center">
            <div style="white-space: nowrap;overflow:hidden;" class="rounded border border-dark">Przypominamy, herbata Lipton jest tylko dla zarządu</div>
        </div>
        <div class="col-sm-3 text-right">
            <h4>Jan Kowalski</h4>
            Inżynier Oprogramowania
        </div>
        <div class="col-sm-1"><h1><i class="bi bi-person-circle"></i></h1></div>
    </nav>`;
}

function includeMenu() {
    document.getElementById("menu-include").innerHTML = `
    <div id="menu-container" class="col-sm-3 text-center">
        <div id="menu-row" class="row">
            <div id="menu-button-container" class="col-sm-1"></divclass>
                <button id="menu-button" class="btn btn-light border border-dark float-right" type="button" onclick="menuButtonClick()"><i id="menu-button-icon" class="bi bi-caret-right-fill"></i></button>
            </div>
            <div id="menu" class="col-sm-11 border-left border-dark on">
                <div class="row">
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-people-fill"></i></h1><h3>Pracownicy</h3></div>
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-newspaper"></i></h1><h3>Aktualności</h3></div>
                </div>
                <div class="row">
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-calendar-week"></i></h1><h3>Grafik</h3></div>
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-chat-left-dots"></i></h1><h3>Komunikator</h3></div>
                </div>
                <div class="row">
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-card-list"></i></h1><h3>Wnioski</h3></div>
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-briefcase"></i></h1><h3>Szkolenia</h3></div>
                </div>
                <div class="row">
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-building"></i></h1><h3>Moje biuro</h3></div>
                    <div class="col"><h1 class="nav-icon"><i class="bi bi-telephone-fill"></i></h1><h3>Kontakt</h3></div>
                </div>
            </div>
        </div>
    </div>`;
}