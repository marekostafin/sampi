async function loadChatData() {
    const res = await fetch('/sampi/js/chat-data.txt');
    let file = await res.text();
    const lines = file.split("\n");
    return lines;
}

async function getChatWith(person) {
    const lines = await loadChatData();
    for (const currPerson of lines) {
        var data = currPerson.split(";");
        if (data[0] == person) {
            return data;
        }
    }
}

function getPerson(link) {
    for (const person of employeeData) {
        if (person.link == link) {
            return person;
        }
    }
}

async function loadOpenChats() {
    let messageBox = document.getElementById("chat-list");
    let chatData = await loadChatData();
    for (let chat of chatData) {
        let link = chat.split(";")[0];
        let person = await getPerson(link);
        let lastMessage = chat.split(";")[chat.split(";").length - 1].substring(0, 90);

        let a = document.createElement("a");
        a.classList.add("list-group-item");
        a.classList.add("list-group-item-action");
        a.classList.add("list-group-item-light");
        a.classList.remove("text-white")
        if (link == "nowak-adam") { //TODO
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
                        <h6 class="mb-0">${person.first_name} ${person.last_name}</h6><small class="small font-weight-bold">25 Dec</small>
                    </div>
                    <p class="font-italic mb-0 text-small">${lastMessage}</p>
                </div>
            </div>
        `;
        messageBox.appendChild(a);
    }
}

async function loadCurrentChat(person) {
    let messageBox = document.getElementById("current-chat");
    let chatData = await getChatWith(person);
    let personData = await getPerson(person);
    const currentlyLoggedIn = "kowalski-jan";
    console.log(chatData)
    for (let i = 1; i < chatData.length; i+=2) {
        if (chatData[i] === person) {
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
                        <p class="text-small mb-0 text-muted">${chatData[i+1]}</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Aug 13</p> <!--TODO -->
                </div>
            `
            messageBox.appendChild(div);
        } else if (chatData[i] === currentlyLoggedIn) {
        //     Receiver Message
            let div = document.createElement("div");
            div.classList.add("media");
            div.classList.add("w-50");
            div.classList.add("ml-auto");
            div.classList.add("mb-3");
            div.innerHTML = `
                <div class="media-body">
                    <div class="color-message  py-2 px-3 mb-2">
                        <p class="text-small mb-0 text-white">${chatData[i+1]}</p>
                    </div>
                    <p class="small text-muted">12:00 PM | Aug 13</p> <!--TODO -->
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
function keyup(e) {
    inputTextValue = e.target.value;
    if (e.keyCode == 13) {
        newMessage(inputTextValue);
    }
}
async function newMessage(message, currentChat) {
    const fs = require("fs");
    const lines = await loadChatData();
    fs.truncate('/path/to/file', 0, function(){console.log('done')})
    for (const currPerson of lines) {
        var data = currPerson.split(";");
        if (data[0] == currentChat) {
            let writeData = currPerson.substring(0, currPerson.length-1)
                + ";" + currentlyLoggedIn + ";" + message + "\n";
            console.log(writeData);
            fs.appendFile('/sampi/js/chat-data.txt', writeData, (err) => {
                if (err) throw err;
            })
        } else {
            let writeData = currPerson;
            fs.appendFile('/sampi/js/chat-data.txt', writeData, (err) => {
                if (err) throw err;
            })
        }
    }
    loadOpenChats();
    loadCurrentChat(currentChat);
}