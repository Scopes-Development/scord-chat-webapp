        function warnMax() {
            var popup = document.getElementById("popupWarning");
            popup.classList.toggle("show");
        }

        function setFriend() {
            let friendName = document.getElementById("friendName").value;

            if (friendName.length > 32) {
                warnMax();
                return
            }

            var info = JSON.parse(localStorage.getItem('myStorage'));
            userName = info.username

            var data = {
                "username": userName,
                "friend": friendName
            };

            localStorage.setItem('myStorage', JSON.stringify(data));
            alert(`Now chatting with ${friendName}`)
            window.location.replace("chat.html")

        }

        const hotKeys = (e) => {
            let windowEvent = window.event ? event : e;

            if (windowEvent.keyCode == 13) {
                setFriend();
            }
        }

        document.onkeypress = hotKeys;