const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    OWNER: true,
    CMD: new SlashCommandBuilder()
        .setDescription("Recargar los archivos del bot.")
        .addStringOption(option =>
            option.setName("modulo")
                .setDescription("Modulo a recargar")
                .addChoices(
                    { name: "Comandos", value: "comandos" },
                    { name: "Comandos Diagonales", value: "slash" },
                    { name: "Eventos", value: "events" },
                    { name: "Handlers", value: "handlers" },
                )
        ),

    async execute(client, interaction, prefix) {
        let args = interaction.options.getString("modulo");
        let option = "Comandos, Eventos y handlers";

        try {
            switch (args?.toLowerCase()) {
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

                default: {
                    await client.loadEvents();
                    await client.loadHandlers();
                    await client.loadSlashCommands();
                    await client.loadCommands();
                }
                    break;
            }

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .addFields({ name: `<:checkicon:1017992941530271775> ${option} Recargados!`, value: `> *Okey*` })
                        .setColor(process.env.COLOR)
                ]
            });

        } catch (e) {
            interaction.reply({ content: `**Ha ocurrido un error al recargar los archivos!.**\n*Mira la consola para mas detalle!.*` })
            console.log(e);
        }
    }
}