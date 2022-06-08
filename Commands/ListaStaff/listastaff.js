const { MessageEmbed, MessageActionRow, MessageButton, Client } = require("discord.js");

module.exports = {
    name: "listastaff",
    description: "Envia um embed de staff e candidatura.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
            .setTitle("<a:1097dotanimatedred:983917835799658507> **LISTA STAFF**")
            .setDescription("**DONO** - Responsável máximo.\n\n> ORYGEN\n> JPLAYS\n> qWeR\n\n**SUB-DONO** - Responsável pela administração.\n\n> StomperG\n\n**ADMIN** - Responsável pela coordenação e gestão de staff.\n\n> Lantejoula\n> Kotinha\n\n**MOD GERAL** - Responsável por auxiliar as atividades diárias.\n\n> \n\n**MOD** - Responsável pelo bom funcionamento dos servidores.\n\n> Maneka")
            .setColor("RED")

        const Row = new MessageActionRow();

        Row.addComponents(
            new MessageButton()
            .setCustomId("candidatura")
            .setStyle("DANGER")
            .setEmoji("📩")
            .setLabel("CANDIDATA-TE")
        );

        client.channels.fetch('978584740816896020').then(channel => channel.send({ embeds: [Embed], components: [Row] }));
        await interaction.reply({ content: "Embed enviado!", ephemeral: true });
    }
}