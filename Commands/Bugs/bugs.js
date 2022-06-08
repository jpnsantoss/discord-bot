const { MessageEmbed, MessageActionRow, MessageButton, Client } = require("discord.js");

module.exports = {
    name: "bugs",
    description: "Envia um embed de bugs.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
            .setAuthor({ name: "Bugs", iconURL: "https://media.discordapp.net/attachments/942119051914793020/984117415258509322/lady-beetle_1f41e_1.png" })
            .setTitle("Reporta um bug!")
            .setDescription("Encontras-te algum erro nos nossos servidores? Ajuda-nos a resolver, explica detalhadamente o que aconteceu.")
            .setFooter({ text: "🔽 Clica neste botão para enviares o teu bug!" })
            .setColor("RED")

        const Row = new MessageActionRow();

        Row.addComponents(
            new MessageButton()
            .setCustomId("bug")
            .setStyle('SUCCESS')
            .setEmoji('🐞')
            .setLabel("Reportar BUG!")
        );

        client.channels.fetch('978584747418730536').then(channel => channel.send({ embeds: [Embed], components: [Row] }));
        await interaction.reply({ content: "Embed enviado!", ephemeral: true });
    }
}