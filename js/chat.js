function loadSavedChats() {
    if (window.sessionStorage.getItem("loaded") == null) {
        window.sessionStorage.setItem("openChat", "nowak-adam");
        window.localStorage.setItem("brosz-odeta", "brosz-odeta;14:57;22 grudnia;Wesołych świąt! :)\nOdpocznij porządnie na urlopie;kowalski-jan;15:02;22 grudnia;nawzajem!");
        window.localStorage.setItem("kowalski-jan", "brosz-odeta;14:57;22 grudnia;Wesołych świąt! :)\nOdpocznij porządnie na urlopie;kowalski-jan;15:02;22 grudnia;nawzajem!");
        window.localStorage.setItem("galeza-agata", "galeza-agata;9:43;19 grudnia;Cześć, podesłałbyś mi proszę informacje na temat twojego urlopu?");
        window.localStorage.setItem("kowalski-janusz", "kowalski-janusz;13:59;9 grudnia;Podejdź proszę do mojego biura.");
        window.localStorage.setItem("nowak-adam", "kowalski-jan;11:48;4 stycznia;Cześć!;nowak-adam;12:03;4 stycznia;No hej;nowak-adam;12:03;4 stycznia;jak tam się masz?");
        window.localStorage.setItem("szkot-michal", "kowalski-jan;12:11;24 listopada;Cześć! Witamy w firmie;kowalski-jan;12:14;24 listopada;Uderz kiedyś do mnie na kawę :)");
        window.localStorage.setItem("wyz-andrzej", "wyz-andrzej;13:15;8 grudnia;Hej, próbowałem dodać te pola o których rozmawialiśmy, ale dla paru testów mi sie wywraca;wyz-andrzej;13:17;20 grudnia;Masz moze pomysł co z tym zrobić?");
    }
}

var chatsToOpen = [
    "nowak-adam",
    "brosz-odeta",
    "kowalski-jan",
    "wyz-andrzej",
    "galeza-agata",
    "kowalski-janusz",
    "szkot-michal"
]

async function loadChatData() {
    const res = await fetch('/sampi/js/chat-data.txt');
    let file = await res.text();
    const lines = file.split("\n");
    return lines;
}

function getChatWith(person) {
    return window.localStorage.getItem(person);
}

function getPersonData(getPerson) {
    for (const person of employeeData) {
        if (person.link === getPerson) {
            return person;
        }
    }
}
const currentlyLoggedIn = window.sessionStorage.getItem("loggedUserPage");

async function loadOpenChats() {
    let messageBox = document.getElementById("chat-list");
    for (let chat of chatsToOpen) {
        if (chat !== currentlyLoggedIn) {
            let chatArray = getChatWith(chat).split(";");
            let link = chat;
            let person = getPersonData(chat);
            let lastMessage = chatArray[chatArray.length - 1].substring(0, 90);
            let lastMessageDate = chatArray[chatArray.length - 2];
            let a = document.createElement("a");
            a.classList.add("list-group-item");
            a.classList.add("list-group-item-action");
            a.classList.add("list-group-item-light");
            a.classList.remove("text-white");
            a.onclick = function () {
                window.sessionStorage.setItem("loaded", "yes");
                window.sessionStorage.setItem("openChat", link);
                document.location.reload();
            }
            if (link === window.sessionStorage.getItem("openChat")) {
                a.classList.remove("list-group-item-light")
                a.classList.add("active");
                a.classList.add("text-white");
            }
            let avatarLink = "/sampi/style/img/avatar-" + link + ".png";
            a.innerHTML = `
            <div class="media">
                <img src=${avatarLink} alt=${link} width="50" class="rounded-circle">
                <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h6 class="mb-0">${person.first_name} ${person.last_name}</h6><small class="small font-weight-bold" id="last-message-date">${lastMessageDate}</small>
                    </div>
                    <p class="font-italic mb-0 text-small" id="last-message">${lastMessage}</p>
                </div>
            </div>
        `;
            messageBox.appendChild(a);
        }
    }
}

async function loadCurrentChat(person) {
    let messageBox = document.getElementById("current-chat");
    let chatData = getChatWith(person);
    let chatArray = chatData.split(";");
    let personData = getPersonData(person);
    for (let i = 0; i < chatArray.length; i+=4) {
        if (chatArray[i] === person) {
        //     Sender Message
            let avatarLink = "/sampi/style/img/avatar-" + person + ".png";
            let div = document.createElement("div");
            div.classList.add("media");
            div.classList.add("w-50");
            div.classList.add("mb-3");
            div.innerHTML = `
                <img src="${avatarLink}" alt="user" width="50" class="rounded-circle">
                <div class="media-body ml-3">
                    <div class="bg-light  py-2 px-3 mb-2">
                        <p class="text-small mb-0 text-muted">${chatArray[i+3]}</p>
                    </div>
                    <p class="small text-muted">${chatArray[i+1]} | ${chatArray[i+2]}</p>
                </div>
            `
            messageBox.appendChild(div);
        } else if (chatArray[i] === currentlyLoggedIn) {
        //     Receiver Message
            let div = document.createElement("div");
            div.classList.add("media");
            div.classList.add("w-50");
            div.classList.add("ml-auto");
            div.classList.add("mb-3");
            div.innerHTML = `
                <div class="media-body">
                    <div class="color-message  py-2 px-3 mb-2">
                        <p class="text-small mb-0 text-white">${chatArray[i+3]}</p>
                    </div>
                    <p class="small text-muted">${chatArray[i+1]} | ${chatArray[i+2]}</p>
                </div>
            `
            messageBox.appendChild(div);
        } else {
            console.error("Encountered unexpected message author id")
        }
    }
}

window.onkeyup = keyup;
var inputTextValue;
async function keyup(e) {
    const chatBox = document.getElementById("chat-box");
    inputTextValue = e.target.value;
    if (e.keyCode == 13) {
        await newMessage(inputTextValue);
        chatBox.value = '';
    }
}
const months = {
    1:"stycznia",
    2:"lutego",
    3:"marca",
    4:"kwietnia",
    5:"maja",
    6:"czerwca",
    7:"lutego",
    8:"sierpnia",
    9:"września",
    10:"października",
    11:"listopada",
    12:"grudnia"
}
async function newMessage(message) {
    window.sessionStorage.setItem("loaded", "yes");
    var today = new Date();
    var day = String(today.getDate());
    var month = today.getMonth() + 1;
    var hour = String(today.getHours()).padStart(2, '0');
    var minute = String(today.getMinutes()).padStart(2, '0');
    var currentChat = window.sessionStorage.getItem("openChat");
    let newMessage = window.localStorage.getItem(currentChat) + ";" +
        currentlyLoggedIn + ";" +
        hour + ":" + minute + ";" +
        day + " " + months[month] + ";" +
        message;
    console.log(newMessage);
    window.localStorage.setItem(currentChat, newMessage);
    window.localStorage.setItem(currentlyLoggedIn, newMessage);

    let messageBox = document.getElementById("current-chat");


    let div = document.createElement("div");
    div.classList.add("media");
    div.classList.add("w-50");
    div.classList.add("ml-auto");
    div.classList.add("mb-3");
    div.innerHTML = `
                <div class="media-body">
                    <div class="color-message  py-2 px-3 mb-2">
                        <p class="text-small mb-0 text-white">${message}</p>
                    </div>
                    <p class="small text-muted">${hour}:${minute} | ${day} ${months[month]}</p>
                </div>
            `
    messageBox.appendChild(div);
    console.log(message);
    document.getElementById("last-message").innerText = message;
    document.getElementById("last-message-date").innerText = day + " " + months[month];
}