let users = [
    {login: 'jkowalski', password: 'jkowalski', hr: 0, name: 'Jan Kowalski', page: 'kowalski-jan', position: 'Inżynier Oprogramowania'},
    {login: 'mszkot', password: 'mszkot', hr: 0, name: 'Michał Szkot', page: 'szkot-michal', position: 'Kierownik działu wdrażania'},
    {login: 'obrosz', password: 'obrosz', hr: 1, name: 'Odeta Brosz', page: 'brosz-odeta', position: 'Główna księgowa'}
]

function checkLogged() {
    if(sessionStorage.getItem('loggedUser') === null || sessionStorage.getItem('loggedUser') === "") {
        window.location.href="/sampi/pages/logowanie.html";
    }
}

function checkLoggedForLoginPage() {
    if(sessionStorage.getItem('loggedUser') != null && sessionStorage.getItem('loggedUser') != "") {
        window.location.href="/sampi/index.html";
    }
}

function signIn() {
    var login = document.getElementById('login-field')
    var password = document.getElementById('password-field')
    var found = false;

    for(const user of users) {
        if(login.value === user.login && password.value === user.password) {
            sessionStorage.setItem('loggedUser', user.name);
            sessionStorage.setItem('loggedUserPage', user.page);
            sessionStorage.setItem('isLoggedUserHr', user.hr);
            sessionStorage.setItem('loggedUserPosition', user.position);
            found = true;
            window.location.href="/sampi/index.html";
        }
    }
    if(!found) {
        login.style.border = '2px solid red';
        password.style.border = '2px solid red';
    }
}

function logOut() {
    sessionStorage.setItem('loggedUser', '');
    sessionStorage.setItem('loggedUserPage', '');
    sessionStorage.setItem('isLoggedUserHr', '');
    sessionStorage.setItem('loggedUserPosition', '');

    window.location.href="/sampi/pages/logowanie.html";
}