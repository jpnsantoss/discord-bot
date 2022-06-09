const { ButtonInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ButtonInteraction} interaction
     */
    execute(interaction, client) {
        if(!interaction.isButton()) return;
        const Button = client.buttons.get(interaction.customId);

        if(Button.permission && !interaction.member.permissions.has(Button.permission))
        return interaction.reply({content: "Não tens permissão para usar este botão.", ephemeral: true});

        if(Button.ownerOnly && interaction.member.id !== interaction.guild.ownerId)
        return interaction.reply({content: "Não és o Dono.", ephemeral: true});

        Button.execute(interaction, client);
    }
}