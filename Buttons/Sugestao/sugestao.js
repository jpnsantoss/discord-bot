const { Modal, TextInputComponent, showModal, SelectMenuComponent } = require("discord-modals");
const { ButtonInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    id: "sugestao",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const modal = new Modal()
            .setCustomId("sugestao-modal")
            .setTitle("Sugestão");

        const descricao = new TextInputComponent()
            .setCustomId("descricao")
            .setLabel("Descrição")
            .setStyle("LONG")
            .setPlaceholder("Qual é a tua Sugestão?")
            .setRequired(true);

        modal.addComponents(descricao);


        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    },
};