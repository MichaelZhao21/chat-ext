document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("chat-ext-input").addEventListener("keydown", sendMessage);

    const animals = ["albatross", "alligator", "alpaca", "anteater", "antelope", "armadillo", "baboon", "badger", "bald eagle", "bat", "bear", "beaver", "bird", "bison", "black bear", "boa", "boa constrictor", "boar", "buffalo", "butterfly", "camel", "capybara", "cat", "cheetah", "chimpanzee", "chipmunk", "cobra", "cow", "coyote", "crab", "crane", "crocodile", "crow", "deer", "dog", "dolphin", "dove", "dragonfly", "duck", "eagle", "echidna", "elephant", "elk", "emu", "falcon", "ferret", "fish", "flamingo", "flicker", "fox", "gazelle", "gecko", "giraffe", "gnu", "goat", "goose", "gorilla", "grizzly bear", "groundhog", "gull", "harbor seal", "hawk", "hedgehog", "hen", "hippopotamus", "honey badger", "hyena", "iguana", "insect", "jackal", "jaguar", "kangaroo", "killer whale", "koala", "komodo dragon", "lemming", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "magpie", "manatee", "mockingbird", "mongoose", "monkey", "moose", "mouse", "opossum", "orca", "ostrich", "otter", "owl", "ox", "peacock", "pelican", "penguin", "pigeon", "platypus", "porcupine", "possum", "puma", "python", "rabbit", "raccoon", "rat", "rattlesnake", "rhinoceros", "salmon", "seal", "sea lion", "shark", "sheep", "skunk", "sloth", "snake", "sparrow", "spider", "squirrel", "starfish", "swan", "tapir", "tarantula", "tiger", "tortoise", "turkey", "turtle", "viper", "vulture", "wagtail", "wallaby", "whale", "wolf", "wombat", "woodpecker", "yak", "zebra"];
    window.chatUsername = animals[Math.floor(Math.random() * animals.length)];

    // Create websocket connection
    window.chatSocket = new WebSocket(`ws://localhost:8080/ws?name=${window.chatUsername}`);

    chatSocket.onmessage = function (event) {
        const log = document.getElementById("chat-ext-display");
        const message = document.createElement("div");
        message.innerText = event.data;

        var doScroll = log.scrollTop > log.scrollHeight - log.clientHeight - 1;
        log.appendChild(message);
        if (doScroll) {
            log.scrollTop = log.scrollHeight - log.clientHeight;
        }
    };

    chatSocket.onclose = function (event) {
        console.log("Chat socket closed");
    };

    chatSocket.onerror = function (event) {
        console.error("Chat socket error");
    };

    document.getElementById("chat-ext-close").addEventListener("click", function () {
        if (document.getElementById("chat-ext-display").style.display === "none") {
            document.getElementById("chat-ext-display").style.display = "block";
            document.getElementById("chat-ext-input-area").style.display = "flex";
            document.getElementById("chat-ext-close").innerText = "x";
        } else {
            document.getElementById("chat-ext-display").style.display = "none";
            document.getElementById("chat-ext-input-area").style.display = "none";
            document.getElementById("chat-ext-close").innerText = "+";
        }
    });
});

async function sendMessage(e) {
    if (e.key !== "Enter") {
        return;
    }

    const message = document.getElementById("chat-ext-input").value;
    document.getElementById("chat-ext-input").value = "";

    // Send message to server
    chatSocket.send(message);
}
