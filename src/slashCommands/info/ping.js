const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
        .setDescription("Sirve para ver el ping del bot"),

    async execute(client, interaction, prefix) {
        let values = {
            "high": 200,
            "medium": 100,
            "low": 50
        }

        let ping = Date.now() - interaction.createdTimestamp

        let color;
        if (ping > values.high) {
            color = '🔴'
        } else if (ping > values.medium) {
            color = '🟡'
        } else {
            color = '🟢'
        }

        let colores;
        if (ping > values.high) {
            colores = 'df0101'
        } else if (ping > values.medium) {
            colores = 'df7401'
        } else {
            colores = '01df01'
        }

        let embed = new Discord.EmbedBuilder()
            .setColor(colores)
            .setTitle(`Ping ${client.user.username}\n`)
            .addFields(
                { name: '**❯ Ping | :**', value: `> ${color} \`|\` Mi ping es ${ping}ms\n` },
                { name: '**❯ API | :**', value: `> 🛰️ \`|\` Ping DiscordAPI: ${client.ws.ping} ms` }
            )
            .setTimestamp()

        interaction.reply({ embeds: [embed] })
    }
}