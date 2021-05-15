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

function createAccount() {
    const insertedUserName = document.getElementById("userNameCreate").value

    if (insertedUserName.length > 32) {
        warnMax()
        setTimeout(removeWarnMax, 3000)
        return
    }
    if (insertedUserName.length < 6) {
        warnMin()
        setTimeout(removeWarnMin, 3000)
        return
    }
    const data = {
        "username": insertedUserName,
        "friend": null
    }

    localStorage.setItem('myStorage', JSON.stringify(data))
    alert(`Logged in as ${insertedUserName}!`)
    window.location.replace("./friends/index.html")
}

const hotKeys = (e) => {
    const windowEvent = window.event ? event : e
    if (windowEvent.keyCode == 13) createAccount()
}

document.onkeypress = hotKeys