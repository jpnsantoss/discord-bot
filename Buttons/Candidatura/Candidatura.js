const { Modal, TextInputComponent, showModal, SelectMenuComponent } = require("discord-modals");
const { ButtonInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    id: "candidatura",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const modal = new Modal()
            .setCustomId("cand-modal")
            .setTitle("Candidatura");

        const primeiraPergunta = new TextInputComponent()
            .setCustomId("steam")
            .setLabel("Link Steam")
            .setStyle("SHORT")
            .setPlaceholder("Qual é a tua Steam?")
            .setRequired(true);

        const segundaPergunta = new TextInputComponent()
            .setCustomId("idade")
            .setLabel("Idade")
            .setStyle("SHORT")
            .setPlaceholder("Quantos anos tens?")
            .setRequired(true);

        const terceiraPergunta = new TextInputComponent()
            .setCustomId("disponibilidade")
            .setLabel("Disponibilidade")
            .setStyle("SHORT")
            .setPlaceholder("Quantas horas tens disponivéis por dia?")
            .setRequired(true);

        const quartaPergunta = new TextInputComponent()
            .setCustomId("comunidades")
            .setLabel("Comunidades")
            .setStyle("SHORT")
            .setPlaceholder("Já foste staff de alguma comunidade? Se sim quais?")
            .setRequired(true);

        const quintaPergunta = new TextInputComponent()
            .setCustomId("servidor")
            .setLabel("Servidor")
            .setStyle("SHORT")
            .setPlaceholder("Em que servidores mais jogas?")
            .setRequired(true);


        modal.addComponents(primeiraPergunta, segundaPergunta, terceiraPergunta, quartaPergunta, quintaPergunta);


        showModal(modal, {
            client: client,
            interaction: interaction,
        });
    },
};