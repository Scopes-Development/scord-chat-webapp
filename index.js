const { Client, Collection } = require("discord.js")
const { token } = require("./config/config")
const client = new Client()

client.commands = new Collection()
client.aliases = new Collection()
client.categories = new Collection();

["commands", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
})

require("./server")(client)

client.login(token)