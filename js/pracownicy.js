var styles = `
    #avatar{
        width: 95%;
        margin: 5px;
        left: 0;
        right: 0;
        border-radius: 50%;
        border: 10px solid #ffffff;
    }
    
    #scroll{
        height 10%;
        overflow-y: scroll;
    }
`

function loadEmployees() {
    console.log("Loading employees...")
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    let container = document.getElementById("employee-list")
    for (const employee of employeeData) {
        let li = document.createElement("li")
        li.style.border = 'solid 3px'
        li.style.backgroundColor = 'white';
        li.style.listStyle = 'none'
        li.style.marginBottom = "10px"

        let buttons = document.createElement("div")
        let employeeForm = document.createElement("form")
        employeeForm.action="/sampi/pages/pracownicy/" + employee.link + ".html"
        let employeeButton = document.createElement("button")
        employeeButton.id="button"+employee.link
        employeeButton.className = "btn btn-outline-dark mt-1 mb-1 col-9"
        employeeButton.innerText = "Zobacz profil"
        employeeForm.appendChild(employeeButton)
        buttons.appendChild(employeeForm)

        let avatarDiv = document.createElement("div")
        let avatar = document.createElement("img");
        avatar.src="/sampi/style/img/avatar-" + employee.link + ".png"
        avatar.id="avatar"
        avatarDiv.appendChild(avatar)

        li.id = employee.first_name + " " + employee.last_name;

        li.innerHTML = `
        <div class="row container-fluid">
            <div class="col-sm-1 p-0">
                ${avatarDiv.innerHTML}
            </div>
            <div class="head col-sm-7 p-1" style="margin-left: 10px;">
                <h4 style="padding-top: 1%" id="name">${employee.first_name} ${employee.last_name}</h4>
                <div class="col-sm p-0 h6">Adres e-mail: ${employee.email}</div>
                <div class="col-sm p-0 h6">Lokalizacja: &nbsp ${employee.location}</div>
            </div>
            <div class="col-sm-3 text-center" style="margin-left: 5%; margin-top: 2.5%">
                ${buttons.innerHTML}
                <script></script>
            </div>
        </div>
        `;

        container.appendChild(li)
    }
}

function findEmployees(inp) {
    inp.addEventListener("input", function(e) {
        var val = this.value;
        let container = document.getElementById("employee-list");
        var children = container.getElementsByTagName("li");
        for (let i = children.length - 1; i >= 0; i--) {
            if (!(children[i].id.toLowerCase()).includes(val.toLowerCase())) {
                container.removeChild(children[i]);
            }
        }
    });

    inp.addEventListener("keydown", function (e){
        var val = this.value;
        let container = document.getElementById("employee-list");
        var children = container.getElementsByTagName("li");
        if (e.key === "Enter") {
            container.innerHTML = ``;
            loadEmployees();
            this.value = "";
        } else if (e.key === "Backspace") {
            container.innerHTML = ``;
            loadEmployees();
            for (let i = children.length - 1; i >= 0; i--) {
                if (!(children[i].id.toLowerCase()).includes(val.toLowerCase())) {
                    container.removeChild(children[i]);
                }
            }
        }
    });
}