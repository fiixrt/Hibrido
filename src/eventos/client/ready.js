module.exports = client => {
    console.log(`Seción iniciada como ${client.user.tag}`.bgCyan);

    if(client?.application?.commands){
        client.application.commands.set(client.slashArray);
        console.log(`(/) ${client.slashCommands.size} Comandos publicados!`.green);
    }
}