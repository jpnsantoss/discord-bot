const { CommandInteraction, Client } = require("discord.js");
const { Modal, TextInputComponent, showModal, SelectMenuComponent } = require("discord-modals");

module.exports = {
    name: "anuncio",
    description: "Envia um anúncio para o servidor.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute (interaction, client) {

        const modal = new Modal()
            .setCustomId("anuncio-modal")
            .setTitle("Anúncio");

        const tipo = new SelectMenuComponent()
        .setCustomId('tipo')
        .setPlaceholder('Tipo de Anúncio')
        .addOptions(
          {
            label: "Geral",
            description: "Anúncio para todos os membros.",
            value: "geral",
            emoji: "🌍"
          },
          {
            label: "Staff",
            description: "Anúncio para a staff.",
            value: "staff",
            emoji: "⛔"
          },
          {
            label: "Novidade",
            description: "Novidade nos Servidores.",
            value: "novidade",
            emoji: "📰"
          }
        );

        const numero = new TextInputComponent()
            .setCustomId("numero")
            .setLabel("Número")
            .setStyle("SHORT")
            .setPlaceholder("Número do Anuncio")
            .setRequired(false);

        const titulo = new TextInputComponent()
            .setCustomId("titulo")
            .setLabel("Titulo")
            .setStyle("SHORT")
            .setPlaceholder("Titulo do Anúncio")
            .setRequired(false);

        const descricao = new TextInputComponent()
            .setCustomId("descricao")
            .setLabel("Descrição")
            .setStyle("LONG")
            .setPlaceholder("Descrição do Anúncio")
            .setRequired(true);

       

        modal.addComponents(tipo, numero, titulo, descricao);


        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    }
}