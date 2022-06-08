const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "aceitar",
    description: "Aceita a sugestão.",
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
        
        Embed.fields[1] = {name: "Estado:", value: "Aceite", inline: true};
        embedMessage.edit({embeds: [Embed.setColor("GREEN")], components: []});
        embedMessage.reactions.removeAll()
        interaction.reply({content: "Sugestão Aceite", ephemeral: true})

        const user = await client.users.cache.find(
            (u) => u.tag === Embed.author.name
        );

        user.send("A tua sugestão foi aceite!");
    }
}