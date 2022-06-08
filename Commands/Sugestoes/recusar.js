const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "recusar",
    description: "Recusa a sugestão.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "messageid",
            description: "Id da Sugestão.",
            type: "STRING",
            required: true,
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     * @param {Message} message
     */
    async execute(interaction, client) {

        const { options } = interaction;

        const messageId = options.getString("messageid");

        const suggestionChannel = client.channels.cache.get('983895498282913862');
        const embedMessage = await suggestionChannel.messages.fetch(messageId);
        const Embed = embedMessage.embeds[0];

        if(!Embed) return;
        
        Embed.fields[1] = {name: "Estado:", value: "Rejeitada", inline: true};
        embedMessage.edit({embeds: [Embed.setColor("RED")], components: []});
        embedMessage.reactions.removeAll()
        return interaction.reply({content: "Sugestão Rejeitada", ephemeral: true})

        const user = await client.users.cache.find(
            (u) => u.tag === Embed.author.name
        );

        user.send("A tua sugestão foi recusada :(");
    }
}