const { MessageEmbed } = require("discord.js")
const chalk = require("chalk")
const { botName, botAvatar, hexError, hexNormal, prefix } = require("./../config/config")
const channelSchema = require("./../models/set-channel")

module.exports.run = async(client, msg) => {
    const { channel, guild } = msg




    let sChannel
    const dbChannel = await channelSchema.findOne({ Guild: msg.guild.id }).catch(err => console.log(err))
    if (data) {
        sChannel = dbChannel
    } else {
        sChannel = undefined
    }
    // if (sChannel = undefined) return





    
    if (!guild || msg.author.bot) return

    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).trim().split(/ + /g)

        const cmdName = args.shift().toLowerCase()
        const cmd = client.commands.get(cmdName)
        if (!client.commands.has(cmd)) return msg.react("839824026906132500")

        try {
            cmd.run(args, client, msg)
        } catch (err) {
            console.log(chalk.red(err))
            const embed = new MessageEmbed()
            .setAuthor(botName, botAvatar)
            .setColor(hexError)
            .setTitle("Error")
            .setDescription("An error has ocured.")
            channel.send(embed)
        }
    } else {
        return
    }
}