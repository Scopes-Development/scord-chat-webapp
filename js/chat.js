var data = JSON.parse(localStorage.getItem('myStorage'));
var myUserName = data.username;
const friendUserName = data.friend;

const trigger = [
    //0 
    ["hi", "hey", "hello", "wassup"],
    //1
    ["how are you", "how are things"],
    //2
    ["what is going on", "what is up"],
    //3
    ["happy", "good", "well", "fantastic", "cool", "great"],
    //4
    ["bad", "bored", "tired", "sad"],
    //5
    ["tell me story", "tell me joke"],
    //6
    ["thanks", "thank you"],
    //7
    ["bye", "good bye", "goodbye"],
    //8
    ["what are you doing", "what you doing"],
];

const reply = [
    //0 
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    //1
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    //2
    [
        "Nothing much",
        "Exciting things!"
    ],
    //3
    ["Glad to hear it"],
    //4
    ["Why?", "Cheer up buddy"],
    //5
    ["What about?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    ["Goodbye", "See you later"],
    //8
    ["Meh, nothing much", "Watching some videos", "playing games", "watching a movie"]
];

var shouldBeReplaced = ["!", "?", ".", "'", "&", "@", "%", "^", "#", "*", "(", ")", "-", "_", "="]

var shouldBeRemoved = {
    "im doing ": "",
    "im ": ""
}

function compare(triggerArray, replyArray, text) {
    let item;


    for (letter of text) {
        if (shouldBeReplaced.includes(letter)) {
            text = text.replace(letter, "")
        }
    }

    text = text.replace(/im doing |im /gi, function(matched) {
        return shouldBeRemoved[matched]
    });

    console.log(text)

    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}

var emojis = {
    ":heart:": "❤",
    ":joy:": "😂",
    ":rofl:": "🤣",
    ":weary:": "😩",
    ":cat:": "🐱"
};

function replyToUser(text) {
    let textInput = compare(trigger, reply, text);
    let author_name = document.createElement('div');
    let new_message = document.createElement('div');
    if (textInput === undefined) {
        message = "Sorry, I couldn't understand what you said.";
    } else {
        message = textInput;
    }

    new_message.innerHTML = message;
    new_message.style.fontFamily = "Tahoma";
    new_message.style.fontSize = "13px";
    author_name.innerHTML = `<strong>${friendUserName}</strong> — ${todayDate}`
    author_name.style.fontFamily = "sans-serif";
    container = document.getElementById("Messages");
    container.appendChild(author_name);
    container.appendChild(new_message);

    window.setInterval(function() {
        var elem = document.getElementById('Messages');
        elem.scrollTop = elem.scrollHeight;
    }, 5000);
}

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();

var todayDate = `${y}/${m}/${d}`

document.getElementById("textMsg").placeholder = `Message @${friendUserName}`

document.getElementById("friendChattingWith").innerHTML = "@" + friendUserName

function sendMsg() {

    let textInput = document.getElementById("textMsg").value;
    let author_name = document.createElement('div');
    let new_message = document.createElement('div');

    text = textInput.replace(/:heart:|:joy:|:rofl|:weary:|:cat:/gi, function(matched) {
        return emojis[matched]
    });

    if (text === "") {
        return
    }

    var message = text;

    new_message.innerHTML = message;
    new_message.style.fontFamily = "Tahoma";
    new_message.style.fontSize = "13px";
    author_name.innerHTML = `<strong>${myUserName}</strong> — ${todayDate}`
    author_name.style.fontFamily = "sans-serif";
    container = document.getElementById("Messages");
    container.appendChild(author_name);
    container.appendChild(new_message);

    setTimeout(replyToUser, 300, message.toLowerCase());

    window.setInterval(function() {
        var elem = document.getElementById('Messages');
        elem.scrollTop = elem.scrollHeight;
    }, 5000);

    document.getElementById("textMsg").value = "";
}

const hotKeys = (e) => {
    let windowEvent = window.event ? event : e;

    if (windowEvent.keyCode == 13) {
        sendMsg();
    }
}

document.onkeypress = hotKeys;