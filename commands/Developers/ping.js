const { MessageEmbed } = require("discord.js")
const { botAvatar, botName, hexError, hexNormal, owners } = require("./../../config/config")

module.exports = {
    name: "ping",

    run: async(args, client, msg) => {
        const { channel } = msg

        if (owners.includes(msg.author.id)) {
            const embed = new MessageEmbed()
            .setAuthor(botName, botAvatar)
            .setColor(hexNormal)
            .setTitle("Pinging...")
            channel.send(embed).then(m => {
                const embed = new MessageEmbed()
                .setAuthor(botName, botAvatar)
                .setColor(hexNormal)
                .setTitle("Ping")
                .addField("Bot ping:", `${Date.now() - msg.createdTimestamp}ms`)
                .addField("Discord API ping:", `${client.ws.ping}ms`)
                m.edit(embed)
            })
        } else {
            const embed = new MessageEmbed()
            .setAuthor(botName, botAvatar)
            .setColor(hexError)
            .setTitle("Error")
            .setDescription("Only bot owners can use this command.")
            channel.send(embed)
        }
    }
}