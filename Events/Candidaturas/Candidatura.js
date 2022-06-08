const { Modal } = require("discord-modals");
const { MessageEmbed, Client, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "modalSubmit",
    /**
     * 
     * @param {Modal} modal 
     * @param {Client} client
     */
    async execute(modal, client) {
        if (modal.customId !== "cand-modal") return;

        await modal.deferReply({ ephemeral: true });

        const Nome = modal.getTextInputValue("disponibilidade");
        const Idade = modal.getTextInputValue("idade");
        const Steam = modal.getTextInputValue("steam");
        const Comunidades = modal.getTextInputValue("comunidades");
        const Servidor = modal.getTextInputValue("servidor");

        const Embed = new MessageEmbed()
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .setColor("ORANGE")
            .setDescription(`**Steam:** \n${Steam} \n\n **Idade:** \n${Idade} \n\n **Disponibilidade:** \n${Nome} \n\n **Comunidades:** \n${Comunidades} \n\n **Servidor:** \n${Servidor}\n\n**Estado:**\nEm análise`)
            .setTimestamp();

        const Row = new MessageActionRow();

        const aceitar = new MessageButton()
            .setCustomId("cand-aceitar")
            .setStyle("SUCCESS")
            .setLabel("ACEITAR");

        const recusar = new MessageButton()
            .setCustomId("cand-recusar")
            .setStyle("DANGER")
            .setLabel("RECUSAR");

        Row.addComponents(aceitar, recusar);

        await client.channels.fetch('983798948265357414').then(channel => channel.send({ embeds: [Embed], components: [Row] }));

        modal.followUp({
            embeds: [
                new MessageEmbed()
                .setColor("GREEN")
                .setDescription("Candidatura Submetida.")
            ]
        })
    }
}