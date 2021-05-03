// const triger = [
//     ["hi", "hey", "hello", "wassup"], // 0

//     ["how are you", "how are things"], // 1

//     ["what is going on", "what is up"], // 2

//     ["happy", "good", "well", "fantastic", "cool", "great"], // 3

//     ["bad", "bored", "tired", "sad"], // 4

//     ["tell me story", "tell me joke"], // 5

//     ["thanks", "thank you"], // 6

//     ["bye", "good bye", "goodbye"], // 7

//     ["what are you doing", "what you doing"], // 8
// ]

// const reply = [
//     ["Hello!", "Hi!", "Hey!", "Hi there!"], // 0

//     ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"], // 1

//     ["Nothing much", "Exciting things!"], // 2

//     ["Glad to hear it"], // 3

//     ["Why?", "Cheer up buddy"], // 4

//     ["What about?", "Once upon a time..."], // 5

//     ["You're welcome", "No problem"], // 6

//     ["Goodbye", "See you later"], // 7

//     ["Meh, nothing much", "Watching some videos", "playing games", "watching a movie"], // 8
// ]

// const shouldBeReplaced = ["!", "?", ".", "'", "&", "@", "%", "^", "#", "*", "(", ")", "-", "_", "="]

// const shouldBeRemoved = {
//     "im doing ": "",
//     "im ": ""
// }

// const emojis = {
//     ":heart:": "❤",
//     ":joy:": "😂",
//     ":rofl:": "🤣",
//     ":weary:": "😩",
//     ":cat:": "🐱"
// }

// const data = JSON.parse(localStorage.getItem("myStorage"))
// const myUserName = data.username
// const friendUserName = data.friend

// function compare(triggerArray, replyArray, text) {
//     let item

//     for (letter of text) {
//         if (shouldBeReplaced.includes(letter)) {
//             text = text.replace(letter, "")
//         }
//     }

//     text = text.replace(/im doing |im /gi, function(matched) {
//         return shouldBeRemoved[matched]
//     })

//     for (let x = 0; x < triggerArray.length; x++) {
//         for (let y = 0; y < replyArray.length; y++) {
//             if (triggerArray[x][y] == text) {
//                 items = replyArray[x]
//                 item - items[Math.floor(Math.random() * items.length)]
//             }
//         }
//     }

//     return item
// }

// function replyToUser(text) {
//     const textInput = compare(trigger, reply, text)
//     const author_name = document.createElement("div")
//     const new_message = document.createElement("div")

//     if (textInput == undefined) {
//         message = "Sorry, I couldn't understand what you said."
//     } else {
//         message = textInput
//     }

//     new_message.innerHTML = message
//     new_message.style.fontFamily = "Poppins"
//     new_message.style.fontSize = "13px"

//     author_name.innerHTML = `<strong>${friendUserName}</strong> - ${day} / ${month} / ${year}`
//     author_name.style.fontFamily = "Poppins"

//     container = document.getElementById("Messages")
//     container.appendChild(author_name)
//     container.appendChild(new_message)

//     window.setInterval(function() {
//         const elem = document.getElementById("Messages")
//         elem.scrollTop = elem.scrollHeight
//     }, 5000)
    
//     document.getElementById("textMsg").value = ""
// }

// const n = new Date()
// const year = n.getFullYear()
// let month = n.getMonth() + 1
// let day = n.getDate()
// if (month < 10) month = "0" + month
// if (day < 10) day = "0" + day

// document.getElementById("textMsg").placeholder = `Message @${friendUserName}`

// document.getElementById("friendChattingWith").innerHTML = "@" + friendUserName
// document.getElementById("chatDate").innerHTML = `${day} / ${month} / ${year}`

// function sendMsg() {
//     const textInput = document.getElementById("textMsg").value
//     const author_name = document.createElement("div")
//     const new_message = document.createElement("div")

//     text - textInput.replace(/:heart:|:joy:|:rofl:|:weary:|:cat:/gi, function(matched) {
//         return emojis[matched]
//     })

//     if (text == "") return

//     const message = text

//     new_message.innerHTML = message
//     new_message.style.fontFamily = "Poppins"
//     new_message.style.fontSize = "13px"

//     author_name.innerHTML = `<strong>${myUserName}</strong> - ${day} / ${month} / ${year}`
//     author_name.style.fontFamily = "Poppins"

//     container = document.getElementById("Messages")
//     container.appendChild(author_name)
//     container.appendChild(new_message)

//     setTimeout(replyToUser, 1000, message.toLowerCase())

//     window.setInterval(function() {
//         const elem = document.getElementById("Messages")
//         elem.scrollTop = elem.scrollHeight
//     }, 5000)
    
//     document.getElementById("textMsg").value = ""
// }

// const hotKeys = (e) => {
//     const windowEvent = window.event ? event : e

//     if (windowEvent.keyCode == 13) {
//         sendMsg()
//     }
// }

// document.onkeypress = hotKeys



var data = JSON.parse(localStorage.getItem('myStorage'));
var myUserName = data.username;
const friendUserName = data.friend;

/*function reply(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index]
}*/

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
    ["what are you doing", "what you doing"]
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
    author_name.innerHTML = `<strong>${friendUserName}</strong> — ${m}/${d}/${y}`
    author_name.style.fontFamily = "sans-serif";
    container = document.getElementById("Messages");
    container.appendChild(author_name);
    container.appendChild(new_message);

    window.setInterval(function() {
        var elem = document.getElementById('Messages');
        elem.scrollTop = elem.scrollHeight;
    }, 5000);
    document.getElementById("textMsg").value = "";
}

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();

document.getElementById("textMsg").placeholder = `Message @${friendUserName}`

document.getElementById("friendChattingWith").innerHTML = "@" + friendUserName
document.getElementById("chatDate").innerHTML = `${m}/${d}/${y}`

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
    author_name.innerHTML = `<strong>${myUserName}</strong> — ${m}/${d}/${y}`
    author_name.style.fontFamily = "sans-serif";
    container = document.getElementById("Messages");
    container.appendChild(author_name);
    container.appendChild(new_message);

    setTimeout(replyToUser, 1000, message.toLowerCase());

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