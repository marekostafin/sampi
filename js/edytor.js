let editor = null
function loadEditor() {
    editor = new FroalaEditor('#editor', {
        height: 400
    });
}

function validate() {
    if(document.getElementById("editor-title").value === "") {
        return false;
    } else if(document.getElementById("formFile").value === "") {
        return false;
    } else if(editor.html.get() === "") {
        return false;
    }
    return true;
}

function articlePreview() {
    if(validate() == true) {
        window.alert("Udało się!");
    } else {
        window.alert("Uzupełnij brakujące informacje!");
    }
}