const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "resolvido",
    description: "Resolver Bug.",
    permission: "ADMINISTRATOR",
    options: [{
        name: "messageid",
        description: "Id do Bug.",
        type: "STRING",
        required: true,
    }],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     * @param {Message} message
     */
    async execute(interaction, client) {

        const { options } = interaction;

        const messageId = options.getString("messageid");

        const suggestionChannel = client.channels.cache.get('984117499639525427');
        const embedMessage = await suggestionChannel.messages.fetch(messageId);
        const Embed = embedMessage.embeds[0];
        if (!Embed) return;

        Embed.fields[1] = { name: "Estado:", value: "Resolvido", inline: true };
        embedMessage.edit({ embeds: [Embed.setColor("GREEN")], components: [] });
        embedMessage.reactions.removeAll()
        interaction.reply({ content: "Bug resolvido!", ephemeral: true })

        const user = await client.users.cache.find(
            (u) => u.tag === Embed.author.name
        );

        user.send("Obrigado pela ajuda! O bug que tinhas reportado já foi resolvido!");
    }
}