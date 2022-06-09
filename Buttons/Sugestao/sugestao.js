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

        const sv = new SelectMenuComponent()
            .setCustomId('sv')
            .setPlaceholder('Servidor')
            .addOptions({
                label: "Geral",
                description: "Sugestão geral",
                value: "first_option",
            }, {
                label: "Competitivo",
                description: "Sugestão para o servidor de Competitivo",
                value: 'second_option',
            }, {
                label: "Retakes",
                description: "Sugestão para o servidor de Retakes",
                value: 'third_option',
            }, {
                label: "AWP",
                description: "Sugestão para o servidor de AWP",
                value: 'fourth_option',
            }, {
                label: "Discord",
                description: "Sugestão para o servidor de Discord",
                value: 'fifth_option',
            })
            

        modal.addComponents(sv, descricao);


        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    },
};