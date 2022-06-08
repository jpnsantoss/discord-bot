const { MessageEmbed, MessageActionRow, MessageButton, Client } = require("discord.js");

module.exports = {
    name: "sugestoes",
    description: "Envia um embed de sugestoes.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
        .setAuthor({ name: "Sugestões", iconURL: "https://media.discordapp.net/attachments/942119051914793020/983882214993449050/thought-balloon_1f4ad.png" })
        .setTitle("Faz a tua sugestão!")
        .setDescription("Mudavas alguma coisa nos servidores ou tens alguma ideia genial que possa ajudar a comunidade?")
        .setFooter({text: "🔽 Clica neste botão para enviares a tua sugestão!"})
        .setColor("RED")

        const Row = new MessageActionRow();

        Row.addComponents(
            new MessageButton()
            .setCustomId("sugestao")
            .setStyle('DANGER')
            .setEmoji('💭')
            .setLabel("Fazer Sugestão!")
        );

        client.channels.fetch('978584746521153576').then(channel => channel.send({ embeds: [Embed], components: [Row] }));
        await interaction.reply({content: "Embed enviado!", ephemeral: true});
    }
}