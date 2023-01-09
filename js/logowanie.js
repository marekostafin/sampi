let users = [
    {login: 'jkowalski', password: 'jkowalski', hr: 0, name: 'Jan Kowalski', page: 'kowalski-jan'},
    {login: 'mszkot', password: 'mszkot', hr: 0, name: 'Michał Szkot', page: 'szkot-michal'},
    {login: 'obrosz', password: 'obrosz', hr: 1, name: 'Odeta Brosz', page: 'brosz-odeta'}
]

function checkLogged() {
    if(sessionStorage.getItem('loggedUser') === null || sessionStorage.getItem('loggedUser') === "") {
        window.location.href="/sampi/pages/logowanie.html";
    }
}

function checkLoggedForLoginPage() {
    if(sessionStorage.getItem('loggedUser') != null && sessionStorage.getItem('isLogged') != "") {
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
            found = true;
            window.location.href="/sampi/index.html";
        }
    }
    if(!found) {
        login.style.border = '2px solid red';
        password.style.border = '2px solid red';
    }
}