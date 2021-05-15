const { MessageEmbed } = require("discord.js")
const channelSchema = require("./../../models/set-channel")
const { botName, botAvatar, hexError, hexSuccess } = require("./../../config/config")

module.exports = {
    name: "set-channel",

    run: async(args, client, msg) => {
        const { channel } = msg

        const embed1 = new MessageEmbed()
        .setAuthor(botName, botAvatar)
        .setColor(hexSuccess)
        .setTitle("Success")
        .setDescription(`New chatbot channel is ${target}.`)
        channel.send(embed)

        if (!msg.member.hasPermission("MANAGE_CHANNELS")) {
            const embed = new MessageEmbed()
            .setAuthor(botName, botAvatar)
            .setColor(hexError)
            .setTitle("Permissions Error")
            .setDescription("To use this command, you need `MANAGE_CHANNELS` permission.")
            channel.send(embed)
        } else {
            const target = msg.mentions.channels.first() || client.channels.cache.get(args[0]) || msg.channel

            channelSchema.findOne({ Guild: msg.guild.id }, async(data) => {
                if (data) {
                    await channelSchema.findOneAndDelete({ Guild: msg.guild.id })
                    data = new channelSchema({
                        Guild: msg.guild.id,
                        Channel: target.id
                    })
                    data.save()
                    channel.send(embed1)
                } else {
                    data = new channelSchema({
                        Guild: msg.guild.id,
                        Channel: target.id
                    })
                    data.save()
                    channel.send(embed1)
                }
            })
        }
    }
}