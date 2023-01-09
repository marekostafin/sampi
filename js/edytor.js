let editor = null;
let newArticle = {};
let formFile = null;

function loadFormFile() {
    formFile = document.getElementById("formFile");
    formFile.addEventListener('change', () => {
        const fr = new FileReader();

        fr.readAsDataURL(formFile.files[0]);

        fr.addEventListener('load', () => {
            const url = fr.result;
            newArticle['image'] = url;
        })
    });
}

function loadEditor() {
    editor = new FroalaEditor('#editor', {
        height: 400,
        toolbarButtons: [
            ['bold', 'italic', 'underline', 'paragraphFormat', 'formatOL', 'formatUL'],
        ]
    }, function () {
        if(sessionStorage.getItem('editArticle') != "" && sessionStorage.getItem('editArticle') != null) {
            for (const article of JSON.parse(sessionStorage.getItem('articlesList'))) {
                if (article.title === sessionStorage.getItem("editArticle")) {
                    editor.html.insert(article.content);
                }
            }
        }
    });
}

function validate() {
    if(document.getElementById("editor-title").value === "") {
        return false;
    } else if(document.getElementById("formFile").value === "" && (sessionStorage.getItem('editArticle') === null || sessionStorage.getItem('editArticle')==="")) {
        return false;
    } else if(editor.html.get() === "") {
        return false;
    }
    return true;
}

function articlePreview() {
    if(validate() == true) {
        newArticle['title'] = document.getElementById("editor-title").value;
        newArticle['content'] = editor.html.get();
        sessionStorage.setItem("newArticle", JSON.stringify(newArticle));
        window.open("/sampi/pages/artykul-podglad.html", "Preview", "toolbar=yes,scrollbars=yes,resizable=yes,left=200,width=1200,height=1000");
    } else {
        window.alert("Uzupełnij brakujące informacje!");
    }
}

function loadArticlePreview() {
    var article_image = document.getElementById("article-img");
    var article_title = document.getElementById("article-title");
    var article_text = document.getElementById("article-text");

    var article = JSON.parse(sessionStorage.getItem("newArticle"));

    if(Object.keys(article).includes('image')) {
        article_image.src = article.image;
    } else {
        for(const art of JSON.parse(sessionStorage.getItem('articlesList'))) {
            if(art.title === sessionStorage.getItem('editArticle')) {
                article_image.src = art.image;
            }
        }
    }
    article_title.innerText = article.title;
    article_text.innerHTML = article.content;
}

function includeNavbarForPreview() {
    let loggedInName = window.sessionStorage.getItem("loggedUser");
    let loggedInPosition = window.sessionStorage.getItem("loggedUserPosition");
    let loggedInAvatar = "/sampi/style/img/avatar-" + window.sessionStorage.getItem("loggedUserPage") + ".png";
    document.getElementById("navbar-include").innerHTML = `
    <nav class="navbar navbar-expand-sm border-bottom border-dark">
        <div class="col-sm-4">
            <img width="200px" src="/sampi/style/img/sampi.png"/>
        </div>
        <div id="notification" class="col-sm-4 text-center on">
            <div style="white-space: nowrap;overflow:hidden;" class="rounded border border-dark">${randomBanner()}</div>
        </div>
        <div class="col-sm-2 offset-sm-2">
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
        </div>
    </nav>`;
}

function includeMenuForPreview() {
    document.getElementById("menu-include").innerHTML = `
    <div id="menu-container" class="text-center">
        <div id="menu-row" class="row">
            <div id="menu-button-container" class="col-sm-1"></divclass>
                <button id="menu-button" class="btn btn-light float-right menu-button-hidden" type="button" onclick="menuButtonClick()"><i id="menu-button-icon" class="bi bi-caret-left-fill"></i></button>
            </div>
            <div id="menu" class="col-sm-12 border-left border-dark off">
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

function articlePublish() {
    if(validate() == true) {
        newArticle['title'] = document.getElementById("editor-title").value;
        newArticle['content'] = editor.html.get();
        var articlesUpdated = JSON.parse(sessionStorage.getItem('articlesList'));

        if(sessionStorage.getItem('editArticle') != null && sessionStorage.getItem('editArticle') != "") {
            for(var article of articlesUpdated) {
                if(article.title === sessionStorage.getItem('editArticle')) {
                    article.title = newArticle.title;
                    article.content = newArticle.content;
                    if(Object.keys(newArticle).includes('image')) {
                        article.image = newArticle.image;
                    }
                }
            }
        } else {
            articlesUpdated.push(newArticle);
        }
        sessionStorage.setItem("articlesList", JSON.stringify(articlesUpdated));
        sessionStorage.setItem("articleTitle", newArticle.title);

        window.location.href="/sampi/pages/artykul.html";

    } else {
        window.alert("Uzupełnij brakujące informacje!");
    }
}

function editArticle() {
    var title = document.getElementById("article-title").innerText;
    sessionStorage.setItem('editArticle', title);

    window.location.href='/sampi/pages/artykuly-edytor.html';
}

function loadArticleToEditor() {
    if(sessionStorage.getItem('editArticle') != "" && sessionStorage.getItem('editArticle') != null) {
        var editor_title = document.getElementById("editor-title");
        editor_title.value = sessionStorage.getItem("editArticle");
    }
}