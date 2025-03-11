document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("chat-ext-input").addEventListener("keydown", sendMessage);
});

function sendMessage(e) {
    if (e.key !== "Enter") {
        return;
    }
    const message = document.getElementById("chat-ext-input").value;
    document.getElementById("chat-ext-input").value = "";
    console.log(message);
}
