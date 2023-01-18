window.addEventListener("resize",navNotificationsOffOn);
navNotificationsOffOn();

function navNotificationsOffOn() {
    var navUser = document.getElementById("nav-user");
    var navUserProfile = document.getElementById('nav-user-profile');
    var navMiddleArea = document.getElementById('nav-middle-area');
    var navSampi = document.getElementById('nav-sampi');

    if(window.innerWidth <= 1400) {
        navUserProfile.classList.replace("col-sm-3","col-sm-4");
        navMiddleArea.classList.replace("col-sm-4","col-sm-3");
    } else {
        navUserProfile.classList.replace("col-sm-4","col-sm-3");
        navMiddleArea.classList.replace("col-sm-3","col-sm-4");
    }

    if(window.innerWidth <= 1300) {
        navUserProfile.classList.replace("col-sm-4","col-sm-5");
        navMiddleArea.classList.replace("col-sm-3","col-sm-2");
    } else  if(window.innerWidth <= 1400){
        navUserProfile.classList.replace("col-sm-5","col-sm-4");
        navMiddleArea.classList.replace("col-sm-2","col-sm-3");
    }

    if(window.innerWidth <= 1000) {
        navUserProfile.classList.replace("col-sm-5","col-6");
        navMiddleArea.classList.replace("col-sm-2","col-1");
    } else if(window.innerWidth <= 1300) {
        navUserProfile.classList.replace("col-6","col-sm-5");
        navMiddleArea.classList.replace("col-1","col-sm-2");
    }
    if(window.innerWidth <= 800) {
        navUserProfile.classList.replace("col-sm-6","col-4");
        navMiddleArea.classList.replace("col-sm-1","col-sm-2");
    } else  if(window.innerWidth <= 1000){
        navUserProfile.classList.replace("col-4","col-sm-6");
        navMiddleArea.classList.replace("col-3","col-sm-1");
    }

    if(window.innerWidth <= 800) {
        navUser.classList.replace("on","off");
    } else if(window.innerWidth <= 1000){
        navUser.classList.replace("off","on");
    }

    if(window.innerWidth <= 700) {
        navUserProfile.classList.replace("col-4","col-1");
        navMiddleArea.classList.replace("col-sm-2", 'col-sm-3');
        //navSampi.classList.replace('col-4', 'col-5');
        navUserProfile.classList.replace('offset-sm-1', "offset-1");
    } else  if(window.innerWidth <= 800){
        navUserProfile.classList.replace("col-5","col-4");
        navMiddleArea.classList.replace("col-1","col-2");
        //navSampi.classList.replace('col-5', 'col-4');
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

function includeNavbar() {
    let loggedInLink = "/sampi/pages/pracownicy/" + window.sessionStorage.getItem("loggedUserPage") + ".html";
    let loggedInName = window.sessionStorage.getItem("loggedUser");
    let loggedInPosition = window.sessionStorage.getItem("loggedUserPosition");
    let loggedInAvatar = "/sampi/style/img/avatar-" + window.sessionStorage.getItem("loggedUserPage") + ".png";
    document.getElementById("navbar-include").innerHTML = `
    <nav class="navbar navbar-expand-sm border-bottom border-dark">
        <div id="nav-sampi" class="col-4" style="position: relative;">
            <a href="/sampi/index.html"><img width="200px" src="/sampi/style/img/sampi.png"/></a>
        </div>
        <div id="nav-middle-area" style="background-color: #a64d79; height: 20px;" class="col-sm-4 text-center on"></div>
        <div id="nav-user-profile" class="col-sm-3 offset-sm-1">
        <div class="row">
        <div class="col-sm-9">
            <a href=${loggedInLink}>
                <div class="row">
                    <div id="nav-user" class="col-sm-10 text-right float-right on"">
                        <h4 style="margin-bottom: 0px">${loggedInName}</h4>
                            ${loggedInPosition}
                    </div>
                    <div id="nav-user-icon" class="col-sm-2" style="padding-left: 0px">
                        <h1>
                            <img width="50em" src=${loggedInAvatar} style="border-radius: 50%;">
                        </h1>
                    </div>
                </div>
            </a>
            </div>
            <a href="javascript:logOut();"><div class="col-sm-3"  id="log-out-button">Wyloguj<div id="log-out-icon"><i class="bi bi-box-arrow-right"></i></div></div></a>
            </div>
        </div>
    </nav>`;
}

function includeMenu() {
    var wnioski = 'wnioski.html';
    if(sessionStorage.getItem('isLoggedUserHr') == 1) {
        wnioski = 'wnioski-hr.html';
    }

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
                    <div class="col"><a href="/sampi/pages/${wnioski}"><h1 class="nav-icon"><i class="bi bi-card-list"></i></h1><h3>Wnioski</h3></a></div>
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

function loadCarousel() {
    //wiem, że syfnie to wygląda, ale nie chce mi się inaczej

    var article1_image = document.getElementById("First-article-image");
    var article2_image = document.getElementById("Second-article-image");
    var article3_image = document.getElementById("Third-article-image");

    var article1_h2 = document.getElementById("First-article-h2");
    var article2_h2 = document.getElementById("Second-article-h2");
    var article3_h2 = document.getElementById("Third-article-h2");

    var article1_p = document.getElementById("First-article-p");
    var article2_p = document.getElementById("Second-article-p");
    var article3_p = document.getElementById("Third-article-p");

    var article1_a = document.getElementById("First-article-a");
    var article2_a = document.getElementById("Second-article-a");
    var article3_a = document.getElementById("Third-article-a");

    article1_image.src = JSON.parse(sessionStorage.getItem('articlesList'))[0].image;
    article1_h2.innerText = JSON.parse(sessionStorage.getItem('articlesList'))[0].title;
    article1_p.innerHTML = JSON.parse(sessionStorage.getItem('articlesList'))[0].content.replace(/<[^>]+>/g, '').slice(0,100)+'...';
    article1_a.href = "javascript:SetArticleTitle('"+article1_h2.innerText+"');";

    article2_image.src = JSON.parse(sessionStorage.getItem('articlesList'))[1].image;
    article2_h2.innerText = JSON.parse(sessionStorage.getItem('articlesList'))[1].title;
    article2_p.innerHTML = JSON.parse(sessionStorage.getItem('articlesList'))[1].content.replace(/<[^>]+>/g, '').slice(0,100)+'...';
    article2_a.href = "javascript:SetArticleTitle('"+article2_h2.innerText+"');";

    article3_image.src = JSON.parse(sessionStorage.getItem('articlesList'))[2].image;
    article3_h2.innerText = JSON.parse(sessionStorage.getItem('articlesList'))[2].title;
    article3_p.innerHTML = JSON.parse(sessionStorage.getItem('articlesList'))[2].content.replace(/<[^>]+>/g, '').slice(0,100)+'...';
    article3_a.href = "javascript:SetArticleTitle('"+article3_h2.innerText+"');";
}