async function loadChatData() {
    const res = await fetch('/sampi/js/chat-data.csv');
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
    console.log(chatData);
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