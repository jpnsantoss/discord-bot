const { Modal } = require("discord-modals");
const { MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "modalSubmit",
    /**
     * 
     * @param {Modal} modal 
     * @param {Client} client
     */
    async execute(modal, client) {
        if (modal.customId !== "bug-modal") return;

        await modal.deferReply({ ephemeral: true });

        const descricao = modal.getTextInputValue("descricao");

        const Embed = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Bug:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        await client.channels.fetch('984117499639525427').then(channel => channel.send({ embeds: [Embed] }));

        modal.followUp({ content: "Bug enviado!" })
    }
}