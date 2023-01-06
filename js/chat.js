async function loadChat() {
    const res = await fetch('/sampi/js/chat-data.csv');
    let file = await res.text();
    const fileArray = file.split(";");
    console.log(fileArray);
}