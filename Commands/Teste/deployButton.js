const { MessageEmbed, MessageActionRow, MessageButton, CommandIteraction } = require("discord.js");

module.exports = {
    name: "deploybuttons",
    description: "Teste.",
    permission: "ADMINISTRATOR",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    
    execute(interaction) {
        const Embed = new MessageEmbed()
        .setDescription("Click the **Answer** button to provide your age.")
        .setColor("GREEN")

        const Row = new MessageActionRow();

        Row.addComponents(
            new MessageButton()
            .setCustomId("age-submit")
            .setStyle("SUCCESS")
            .setLabel("Answer")
        );

        interaction.reply({ embeds: [Embed], components: [Row] });
    }
}