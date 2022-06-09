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
        if (modal.customId !== "sugestao-modal") return;

        await modal.deferReply({ ephemeral: true });

        const descricao = modal.getTextInputValue("descricao");

        const servidores = modal.getSelectMenuValues('sv');

        const Geral = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Sugestão:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const Comp = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "Competitivo" }, { name: "Sugestão:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const Retakes = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "Retakes" }, { name: "Sugestão:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const awp = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "AWP" }, { name: "Sugestão:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const discord = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "Discord" }, { name: "Sugestão:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        if ( servidores == "first_option")
            await client.channels.fetch('983895498282913862').then(channel => channel.send({ embeds: [Geral] }));
        if ( servidores == "second_option")
            await client.channels.fetch('983895498282913862').then(channel => channel.send({ embeds: [Comp] }));
        if ( servidores == "third_option")
            await client.channels.fetch('983895498282913862').then(channel => channel.send({ embeds: [Retakes] }));
        if ( servidores == "fourth_option")
            await client.channels.fetch('983895498282913862').then(channel => channel.send({ embeds: [awp] }));
        if ( servidores == "fifth_option")
            await client.channels.fetch('983895498282913862').then(channel => channel.send({ embeds: [discord] }));
        
        modal.followUp({ content: "Sugestão enviada!" })
    }
}