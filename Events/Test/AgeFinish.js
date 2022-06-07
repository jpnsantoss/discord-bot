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

        await modal.deferReply({ ephemeral: true });

        const Nome = modal.getTextInputValue("disponibilidade");
        const Idade = modal.getTextInputValue("idade");
        const Steam = modal.getTextInputValue("steam");
        const Comunidades = modal.getTextInputValue("comunidades");
        const Servidor = modal.getTextInputValue("servidor");

        const Embed = new MessageEmbed()
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .setColor("ORANGE")
            .setDescription(`**Steam:** ${Steam} \n\n **Idade:** ${Idade} \n\n **Disponibilidade:** ${Nome} \n\n **Comunidades:** ${Comunidades} \n\n **Servidor:** ${Servidor}`)
            .setTimestamp();

        await client.channels.fetch('983798948265357414').then(channel => channel.send({ embeds: [Embed] }));

        modal.followUp({
            embeds: [
                new MessageEmbed()
                .setColor("GREEN")
                .setDescription("Candidatura Submetida.")
            ]
        })
    }
}