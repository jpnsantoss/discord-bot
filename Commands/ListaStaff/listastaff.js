const { MessageEmbed, MessageActionRow, MessageButton, Client } = require("discord.js");

module.exports = {
    name: "listastaff",
    description: "Envia um embed de staff e candidatura.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
        .setDescription("Click the **Answer** button to provide your age.")
        .setColor("GREEN")

        const Row = new MessageActionRow();

        Row.addComponents(
            new MessageButton()
            .setCustomId("candidatura")
            .setStyle("SUCCESS")
            .setLabel("Answer")
        );

        client.channels.fetch('978584740816896020').then(channel => channel.send({ embeds: [Embed], components: [Row] }));
        await interaction.reply({content: "Embed enviado!", ephemeral: true});
    }
}