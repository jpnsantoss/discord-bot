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
        if(modal.customId !== "sugestao-modal") return;

        await modal.deferReply({ ephemeral: true });

        const descricao = modal.getTextInputValue("descricao");

        const Embed = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({name: modal.user.tag, iconURL: modal.user.displayAvatarURL({dynamic: true})})
            .addFields(
                {name: "Sugestão:", value: descricao},
                {name: "Estado", value: "Pendente"}
            )
            .setTimestamp();

        const M = await client.channels.fetch('983895498282913862').then(channel => channel.send({ embeds: [Embed] }));
        M.react("<:thumbsUp:983901031815581756>");
        M.react("<:thumbsDown:983901030339203074>");

        modal.followUp({ content: "Sugestão enviada!" })
    }
}