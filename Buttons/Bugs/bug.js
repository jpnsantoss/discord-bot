const { Modal, TextInputComponent, showModal, SelectMenuComponent } = require("discord-modals");
const { ButtonInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    id: "bug",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const modal = new Modal()
            .setCustomId("bug-modal")
            .setTitle("BUG");

        const descricao = new TextInputComponent()
            .setCustomId("descricao")
            .setLabel("Descrição")
            .setStyle("LONG")
            .setPlaceholder("Qual é o bug que queres reportar?")
            .setRequired(true);

        modal.addComponents(descricao);


        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    },
};