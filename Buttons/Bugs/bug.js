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

        const sv = new SelectMenuComponent()
            .setCustomId('sv')
            .setPlaceholder('Servidor')
            .addOptions({
                label: "Geral",
                description: "Bug geral",
                value: "first_option",
            }, {
                label: "Competitivo",
                description: "Bug no servidor de Competitivo",
                value: 'second_option',
            }, {
                label: "Retakes",
                description: "Bug no servidor de Retakes",
                value: 'third_option',
            }, {
                label: "AWP",
                description: "Bug no servidor de AWP",
                value: 'fourth_option',
            }, {
                label: "Discord",
                description: "Bug no servidor de Discord",
                value: 'fifth_option',
            })

        modal.addComponents(sv, descricao);


        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    },
};