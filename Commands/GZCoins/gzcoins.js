const { MessageEmbed, MessageActionRow, MessageButton, Client } = require("discord.js");

module.exports = {
    name: "gzcoins",
    description: "Envia um embed de gzcoins.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
            .setTitle("**O que são as GZ Coins 🪙 ?**")
            .setDescription("A nossa comunidade criou um sistema de economia inovador no CS:GO, as GZ Coins. Este sistema permite comprares os teus modelos de jogador, armas personalizadas e muitas outras vantagem, entre elas o GZ Pass Premium, que pode ser comprado com GZ Coins, tudo isto gratuitamente.")
            .addFields({ name: "Como posso ganhar GZ Coins?", value: "As GZ Coins são ganham nos nossos servidores, completa as missões, sobe de nível e resgata todas as rewards." })
            .setColor("#ffeb00")

        const Baixo = new MessageEmbed()
            .setTitle("**Posso comprar mais GZ Coins?**")
            .setDescription("Sim, para que seja mais facil juntares GZ Coins podes fazer um deposito e assim fazer compras na Gaming Zone, para além disso estas a ajudar a comunidade a desenvolver-se e tornar-se mais forte.")
            .addFields({ name: "Tabela de Preços:", value: "1,000 GZ Coins - **0.99€**\n3,000 GZ Coins - **2.50€**\n7,500 GZ Coins - **5.00€**\n20,000 GZ Coins - **10.00€**\n50,000 GZ Coins - **20.00€**\n\nApenas os <@&978584706318757920> podem fazer vendas na nossa comunidade." })
            .setColor("#c31313")

        const Comprar = new MessageActionRow();

        Comprar.addComponents(
            new MessageButton()
            .setCustomId('open-ticket')
            .setStyle("SUCCESS")
            .setEmoji("🛒")
            .setLabel("Comprar")
        );

        const Metodos = new MessageActionRow();

        Comprar.addComponents(
            new MessageButton()
            .setCustomId("metodos")
            .setStyle("PRIMARY")
            .setEmoji("💳")
            .setLabel("Pagamentos e Condições")
        );

        client.channels.fetch('980132844024262736').then(channel => channel.send({ embeds: [Embed] }));
        client.channels.fetch('980132844024262736').then(channel => channel.send({ embeds: [Baixo], components: [Comprar] }));
        await interaction.reply({ content: "Embed enviado!", ephemeral: true });
    }
}