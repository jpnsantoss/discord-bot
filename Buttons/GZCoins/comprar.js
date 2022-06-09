const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    id: "comprar",
    execute(interaction) {

        const { member } = interaction;

        const Embed = new MessageEmbed()
            .setColor("RED")
            .setAuthor({ name: 'Bem-Vindo à Gaming Zone!', iconURL: 'https://cdn.discordapp.com/attachments/942119051914793020/981345519181922304/unknown.png' })
            .setThumbnail("https://cdn.discordapp.com/attachments/942119051914793020/981344688571306055/031e807c-c5d4-49c9-bc3c-5ff3afde119f.png")
            .setTitle("Tens a certeza?")
            .setDescription(`Este botão irá abrir um ticket no departamento de compras.`)
            .setFooter({ text: "🔻 Clica neste botão para teres abrir ticket!" });

        const row = new MessageActionRow();

        row.addComponents(
            new MessageButton()
            .setCustomId('abrir-ticket')
            .setLabel('Confirmar')
            .setStyle('SUCCESS')
            .setEmoji('✔️'),
        );

        return interaction.reply({ embeds: [Embed], components: [row], ephemeral: true });
    }
}