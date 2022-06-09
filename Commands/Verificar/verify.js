const { MessageEmbed, MessageActionRow, MessageButton, Message } = require("discord.js");

module.exports = {
    name: "verify",
    description: "Envia embed de regras e botão para auto-role",
    permission: "ADMINISTRATOR",

    async execute(interaction) {

        const Embed = new MessageEmbed()
        .setColor("RED")
        .setAuthor({name: 'Bem-Vindo à Gaming Zone!', iconURL: 'https://cdn.discordapp.com/attachments/942119051914793020/981345519181922304/unknown.png'})
        .setThumbnail("https://cdn.discordapp.com/attachments/942119051914793020/981344688571306055/031e807c-c5d4-49c9-bc3c-5ff3afde119f.png")
        .setTitle("REGRAS DO DISCORD")
        .setDescription(`Quebrar qualquer uma destas regras poderá resultar na edição ou remoção da sua mensagem sem qualquer aviso e dependendo da quebra da regra, também poderá resultar num banimento temporário ou definitivo do nosso discord\n\n
        <:1_:980517465597550602> Respeitar todos os Membros da nossa comunidade. 
        <:2_:980517465052307497> Não faças spam. 
        <:3_:980517465421385738> Racismo e xenofobia não são permitidos. 
        <:4_:980517465484329000> A publicidade é proibida. 
        <:5_:980517465199104051> Não é permitido aproveitares-te de potenciais erros no servidor. 
        <:6_:980517465408802816> Não tentes enganar outros jogadores. 
        <:7_:980517465379446844> Respeitar qualquer decisão de um staff. 
        <:8_:980517465329115206>  Todos os comentários sexistas são proibidos.`)
        .setFooter({text: "🔻 Clica neste botão para teres acederes ao nosso discord!"});

        const row = new MessageActionRow();
        row.addComponents(
            new MessageButton()
            .setCustomId("verificar")
            .setLabel("Aceitar")
            .setStyle("SUCCESS")
            .setEmoji("✔️"),
        )
        interaction.channel.send({embeds: [Embed], components: [row]});
        await interaction.reply({content: "Embed enviado!", ephemeral: true});
    }
}