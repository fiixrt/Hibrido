const Discord = require('discord.js');
const { EmbedBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Sirve para ver el avatar de un usuario.",
    PERMISSIONS: [],
    BOT_PERMISSIONS: ["Administrator"],
    OWNER: false,

    async execute(client, message, args, prefix) {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let png = user.avatarURL({ format: 'PNG', dynamic: true, size: 1024 })
        let jpg = user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        let webp = user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })


        const avatar = new EmbedBuilder()
            .setAuthor({ name: "Avatar de " + user.tag, iconURL: user.displayAvatarURL({ dynamic: true }) })
            .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setFooter({ text: `Pedido por: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor("Random")
            .setTimestamp()

        message.reply({
            embeds: [avatar], components: [new ActionRowBuilder().addComponents(
                [
                    new Discord.ButtonBuilder().setStyle("5").setEmoji("📷").setLabel("PNG").setURL(`${png}`),
                    new Discord.ButtonBuilder().setStyle("5").setEmoji("📷").setLabel("JPG").setURL(`${jpg}`),
                    new Discord.ButtonBuilder().setStyle("5").setEmoji("📷").setLabel("WEBP").setURL(`${webp}`),
                ]
            )]
        })
    }
}