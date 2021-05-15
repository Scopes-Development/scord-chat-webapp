const { readdirSync } = require("fs") // Loading "fs" package function
const ascii = require("ascii-table") // Loading tables package 

const table = new ascii("Events") // Creating table

table.setHeading("Load Status", "Event") // Setting table heading

module.exports = (client) => {
    const events = readdirSync("./events/").filter(file => file.endsWith(".js"))

    for (const file of events) {
        try {
            let pull = require(`./../events/${file}`)

            if (pull.name && typeof pull.event !== "string") {
                table.addRow("✖", file)
                continue
            }

            pull.event = pull.event || file.replace(".js", "")
            client.on(pull.event, pull.run.bind(null, client))
            table.addRow("✔", file)
        } catch (err) {
            console.log(err)
            table.addRow("Error", file)
        }
    }
    console.log(table.toString())
}