const { Modal } = require("discord-modals");
const { MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "modalSubmit",
    /**
     * 
     * @param {Modal} modal 
     * @param {Client} client
     */
    async execute(modal, client) {
        if (modal.customId !== "anuncio-modal") return;

        await modal.deferReply({ ephemeral: true });

        const tipo = modal.getSelectMenuValues('tipo');
        const numero = modal.getTextInputValue('numero')
        const titulo = modal.getTextInputValue("titulo");
        const descricao = modal.getTextInputValue("descricao");

        const Geral = new MessageEmbed()
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .setColor("RED")
            .setTitle(`${titulo}`)
            .setDescription(`${descricao}`)
            .setTimestamp();

        const Staff = new MessageEmbed()
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .setColor("RED")
            .setTitle(`${titulo}`)
            .setDescription(`${descricao}`)
            .setTimestamp();

        const Novidade = new MessageEmbed()
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .setTitle(`Update nº ${numero}`)
            .setColor("ORANGE")
            .setDescription(`${descricao}`)
            .setTimestamp();

        if (tipo == "geral")
            await client.channels.fetch('978584733917261834').then(channel => channel.send({ embeds: [Geral] }));

        if (tipo == "staff")
            await client.channels.fetch('978584748387598356').then(channel => channel.send({ embeds: [Staff] }));

        if (tipo == "novidade")
            await client.channels.fetch('978584736186400788').then(channel => channel.send({ embeds: [Novidade] }));

        modal.followUp({
            embeds: [
                new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Anúncio Enviado!`)
            ]
        })
    }
}