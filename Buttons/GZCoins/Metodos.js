const { MessageEmbed } = require("discord.js");

module.exports = {
    id: "metodos",
    execute(interaction) {

        const { member } = interaction;

        const Embed = new MessageEmbed()
            .setColor("RED")
            .setAuthor({ name: 'Bem-Vindo à Gaming Zone!', iconURL: 'https://cdn.discordapp.com/attachments/942119051914793020/981345519181922304/unknown.png' })
            .setThumbnail("https://cdn.discordapp.com/attachments/942119051914793020/981344688571306055/031e807c-c5d4-49c9-bc3c-5ff3afde119f.png")
            .setTitle("Métodos de Pagamento:")
            .setDescription(`-1 \n -2 \n -3`)
            .setFooter({ text: "🔻 Clica neste botão para teres acederes ao nosso discord!" });

        return interaction.reply({ embeds: [Embed], ephemeral: true });
    }
}