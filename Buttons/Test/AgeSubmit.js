const { Modal, TextInputComponent, showModal } = require("discord-modals");
const { ButtonInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    id: "age-submit",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const modal = new Modal()
        .setCustomId("age-modal")
        .setTitle("Age Selector");

        const primeiraPergunta = new TextInputComponent()
        .setCustomId("nome")
        .setLabel("Nome")
        .setStyle("SHORT")
        .setPlaceholder("Qual é o teu nome?")
        .setRequired(true);

        const segundaPergunta = new TextInputComponent()
        .setCustomId("steam")
        .setLabel("Link Steam")
        .setStyle("SHORT")
        .setPlaceholder("Qual é a tua Steam?")
        .setRequired(true);

        modal.addComponents(primeiraPergunta, segundaPergunta);
        

        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    },
};