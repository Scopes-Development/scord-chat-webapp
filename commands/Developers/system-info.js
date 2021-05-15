const { MessageEmbed } = require("discord.js")
const osu = require("node-os-utils")
const { botAvatar, botName, hexNormal } = require("./../../config/config")

const cpu = osu.cpu
const ram = osu.mem

module.exports = {
    name: "system-info",
    aliases: ["s-info", "system-i", "s-i", "si"],

    run: async(args, client, msg) => {
        const { channel } = msg

        const Cmodel = cpu.model()
        const cCores = cpu.count()
        const cUsage = await cpu.usage()

        const rTotal = ram.totalMem()
        const { usedMemMb } = await ram.used()
        const rUsed = (usedMemMb / 1000).toFixed(2)

        const embed = new MessageEmbed()
        .setAuthor(botName, botAvatar)
        .setColor(hexNormal)
        .setTitle("System Info")
        .addField("CPU:", [
            `**CPU Model:** ${Cmodel}`,
            `**CPU Cores:** ${cCores}`,
            `**CPU Usage:** ${cUsage}%`,
        ])
        .addField("RAM:", [
            `**RAM Total:** ${(rTotal / 1048576 / 1000).toFixed(2)}GB`,
            `**RAM Usage:** ${rUsed}GB`
        ])
        channel.send(embed)
    }
}