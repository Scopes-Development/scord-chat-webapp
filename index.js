        function warnMax() {
            var popup = document.getElementById("popupWarning");
            popup.classList.toggle("show");
        }

        function createAccount() {
            let insertedUserName = document.getElementById("userNameCreate").value;

            if (insertedUserName.length > 32) {
                warnMax();
                return
            }

            var info = JSON.parse(localStorage.getItem('myStorage'));

            var data = {
                "username": insertedUserName,
                "friend": null
            };

            localStorage.setItem('myStorage', JSON.stringify(data));
            alert(`Logged in as ${insertedUserName}`)
            window.location.replace("friends.html")

        }

        const hotKeys = (e) => {
            let windowEvent = window.event ? event : e;

            if (windowEvent.keyCode == 13) {
                createAccount();
            }
        }

        document.onkeypress = hotKeys;