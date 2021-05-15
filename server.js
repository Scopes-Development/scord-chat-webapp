const express = require("express")
const { port } = require("./config/config")
const app = express()

module.exports = (client) => {
    app.use(express.static(`${__dirname}/public`))

    app.set("view engine", "ejs")

    app.get("/", (req, res) => {
        res.render("index.ejs")
    })

    app.get("/login", (req, res) => {
        res.render("login.ejs")
    })

    app.listen(port)
}