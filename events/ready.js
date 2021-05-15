const chalk = require("chalk")
const mongoose = require("mongoose")
const { port } = require("../config/config")
const log = console.log

module.exports.run = (client) => {

    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hour = now.getHours()
    if(seconds<=9) seconds="0"+seconds
    if(minutes<=9) minutes="0"+minutes
    if(hour<=9) hour="0"+hour
    if(day<=9) day="0"+day
    if(month<=9) month="0"+month
  
    log(chalk.gray("╔═════════════════════════╗"))
    log(chalk.gray(
      "║       " +
      chalk.hex("#F77C00").bold("Login Date:") +
      "       ║"
    ))
    log(chalk.gray(
      "║  " +
      chalk.hex("#AAFF00")(day + "." + month + "." + year + " | " + hour + ":" + minutes + ":" + seconds) +
      "  ║"
    ))
    log(chalk.gray("║                         ║"))
    log(chalk.gray(
      "║      " +
      chalk.hex("#F77C00").bold("Login Status:") +
      "      ║"
    ))
    log(chalk.gray(
      "║        " +
      chalk.hex("#AAFF00")("Logged in") +
      "        ║"
    ))
    log(chalk.gray("║                         ║"))
    log(chalk.gray(
      "║      " +
      chalk.hex("#F77C00").bold("Logged in as:") +
      "      ║"
    ))
    log(chalk.gray(
      "║        " +
      chalk.hex("#AAFF00")(`${client.user.tag}`) +
      "       ║"
    ))
    log(chalk.gray("║                         ║"))
    log(chalk.gray(
      "║         " +
      chalk.hex("#FA9300").bold("MongoDB") +
      "         ║"
    ))
    log(chalk.gray(
      "║      " +
      chalk.hex("#F77C00").bold("Login Status:") +
      "      ║"
    ))
    mongoose.connect("mongodb+srv://Scord:ScordUltraPass@cluster0.qz2ax.mongodb.net/Data", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }).then(() => {
      log(chalk.gray(
        "║        " +
        chalk.hex("#AAFF00")("Connected") +
        "        ║"
      ))
    }).then(() => {
      log(chalk.gray("║                         ║"))
      log(chalk.grey(
        "║     " +
        chalk.hex("#FA9300").bold("Listening port:") +
        "     ║"
      ))
      log(chalk.gray(
        "║          " +
        chalk.hex("#AAFF00")(`${port}`) +
        "           ║"
      ))
      log(chalk.gray("╚═════════════════════════╝"))
    })
}