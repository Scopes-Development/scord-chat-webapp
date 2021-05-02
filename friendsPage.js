function warnMax() {
    const max = document.getElementById("wMax")
    max.classList.toggle("show", true)
}

function warnMin() {
    const min = document.getElementById("wMin")
    min.classList.toggle("show", true)
}

function removeWarnMax() {
    const max = document.getElementById("wMax")
    max.classList.toggle("show", false)
}

function removeWarnMin() {
    const min = document.getElementById("wMin")
    min.classList.toggle("show", false)
}

function setFriend() {
    let friendName = document.getElementById("friendName").value;

    if (friendName.length > 32) {
        warnMax()
        setTimeout(removeWarnMax, 3000)
        return
    }
    if (friendName.length < 6) {
        warnMin()
        setTimeout(removeWarnMin, 3000)
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