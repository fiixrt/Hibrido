const { EmbedBuilder } = require('discord.js');

module.exports = {
    DESCRIPTION: "Recarga los archivos del bot",
    OWNER: true,

    async execute(client, message, args, prefix) {
        let option = "Comandos, Eventos y handlers";

        try {
            switch (args[0]?.toLowerCase()) {
                case "commands":
                case "comandos": {
                    option = "Comandos"
                    await client.loadCommands();
                }

                    break;

                case "slashcommands":
                case "slash": {
                    option = "Comandos Diagonales"
                    await client.loadSlashCommands();
                }

                    break;

                case "handlers": {
                    option = "Handlers"
                    await client.loadHandlers();
                }

                    break;

                case "events":
                case "eventos": {
                    option = "Eventos"
                    await client.loadEvents();
                }

                    break;

                default:{
                    await client.loadEvents();
                    await client.loadHandlers();
                    await client.loadSlashCommands();
                    await client.loadCommands();
                }
                    break;
            }

            message.reply({
                embeds: [
                    new EmbedBuilder()
                    .addFields({name: `<:checkicon:1017992941530271775> ${option} Recargados!`, value: `> *Okey*`})
                    .setColor(process.env.COLOR)
                ]
            });

        } catch (e) {
            message.reply({ content: `**Ha ocurrido un error al recargar los archivos!.**\n*Mira la consola para mas detalle!.*` })
            console.log(e);
        }
    }
}