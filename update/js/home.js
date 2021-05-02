function warnMax() {
    const max = document.getElementById("wMax")
    max.classList.toggle("show", true)
}

function warnMin() {
    const min = document.getElementById("wMin")
    min.classList.toggle("show", true)
}

function createAccount() {
    const inserted = document.getElementById("userNameCreate").value

    if (inserted.length > 32) return warnMax()
    if (inserted.length < 6) return warnMin()
    const data = {
        "username": inserted,
        "friend": null
    }

    localStorage.setItem('myStorage', JSON.stringify(data))
    alert(`Logged in as ${insertedUserName}!`)
    window.location.replace("friends.html")
}

const hotKeys = (e) => {
    const windowEvent = window.event ? event : e
    if (windowEvent.keyCode == 13) createAccount()
}

document.onkeypress = hotKeys