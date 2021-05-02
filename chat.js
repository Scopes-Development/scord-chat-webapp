        var data = JSON.parse(localStorage.getItem('myStorage'));
        var myUserName = data.username;
        const friendUserName = data.friend;

        var emojis = {
            ":heart:": "❤",
            ":joy:": "😂",
            ":rofl:": "🤣",
            ":weary:": "😩",
            ":cat:": "🐱"
        };

        let n = new Date();
        let y = n.getFullYear();
        let m = n.getMonth() + 1;
        let d = n.getDate();

        document.getElementById("textMsg").placeholder = `Message @${friendUserName}`

        document.getElementById("friendChattingWith").innerHTML = "@" + friendUserName
        document.getElementById("chatDate").innerHTML = `${m}/${d}/${y}`

        msgsSent = 0

        function sendMsg() {
            if (msgsSent === 20) {
                alert("Woah! Chill for a moment before you start sending more messages.");
                msgsSent = 0;
                return
            }

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
            window.setInterval(function() {
                var elem = document.getElementById('Messages');
                elem.scrollTop = elem.scrollHeight;
            }, 5000);
            document.getElementById("textMsg").value = "";
            msgsSent += 1;
        }

        const hotKeys = (e) => {
            let windowEvent = window.event ? event : e;

            if (windowEvent.keyCode == 13) {
                sendMsg();
            }
        }

        document.onkeypress = hotKeys;