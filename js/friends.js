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
    const friendName = document.getElementById("friendName").value

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

    const info = JSON.parse(localStorage.getItem("myStorage"))
    userName = info.userName

    const data = {
        "username": userName,
        "friend": friendName
    }

    localStorage.setItem("myStorage", JSON.stringify(data))
    alert(`Now chatting with ${friendName}!`)
    window.location.replace("./../chat/index.html")
}

const hotKeys = (e) => {
    const windowEvent = window.event ? event : e
    if (windowEvent.keyCode == 13) setFriend()
}

document.onkeypress = hotKeys