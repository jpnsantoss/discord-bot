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

        const Nome = modal.getTextInputValue("nome");
        const Steam = modal.getTextInputValue("steam");

        const Embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Nome: ${Nome} \n Steam: ${Steam}`)
        .setTimestamp();

        await client.channels.fetch('983798948265357414').then(channel => channel.send({embeds: [Embed]}));

        modal.followUp({
            embeds: [
                new MessageEmbed()
                .setColor("GREEN")
                .setDescription("Candidatura Submetida.")
            ]
        })
    }
}