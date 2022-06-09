const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  id: 'close-ticket',
  async execute(interaction, client) {

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('confirm-close')
        .setLabel('Fechar o ticket')
        .setStyle('DANGER'),
        new MessageButton()
        .setCustomId('no')
        .setLabel('Anular o encerramento')
        .setStyle('SECONDARY'),
    );

    const verif = await interaction.reply({
        content: 'Tens a certeza que desejas fechar o ticket ?',
        components: [row]
    });
  },
};