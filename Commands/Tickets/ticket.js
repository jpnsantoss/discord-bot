const { MessageEmbed, MessageActionRow, MessageButton, Message } = require("discord.js");

module.exports = {
    name: "tickets",
    description: "Envia embed dos tickets.",
    permission: "ADMINISTRATOR",

    async execute(interaction) {

        const { user } = interaction;

        const Embed = new MessageEmbed()
            .setColor('6d6ee8')
            .setAuthor({ name: 'SUPORTE', iconURL: "https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png" })
            .setDescription('**Precisas de ajuda?** \n Clica no botão \`\`ABRIR TICKET\`\` para receberes suporte individual. \n\n Quando o ticket é aberto, deves **selecionar a categoria** que se adequa mais à tua necessidade.')
            .setFooter({ text: "GamingZone", iconURL: user.avatarURL() })

        const row = new MessageActionRow();
        row.addComponents(
            new MessageButton()
            .setCustomId('open-ticket')
            .setLabel('ABRIR TICKET')
            .setEmoji('✉️')
            .setStyle('PRIMARY'),
        )
        interaction.channel.send({ embeds: [Embed], components: [row] });
        await interaction.reply({ content: "Embed enviado!", ephemeral: true });
    }
}