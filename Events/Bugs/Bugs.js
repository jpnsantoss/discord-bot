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
        if (modal.customId !== "bug-modal") return;

        await modal.deferReply({ ephemeral: true });

        const descricao = modal.getTextInputValue("descricao");

        const servidores = modal.getSelectMenuValues('sv');

        const Geral = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Bug:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const Comp = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "Competitivo" }, { name: "Bug:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const Retakes = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "Retakes" }, { name: "Bug:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const awp = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "AWP" }, { name: "Bug:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        const discord = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
            .addFields({ name: "Servidor:", value: "Discord" }, { name: "Bug:", value: descricao }, { name: "Estado:", value: "Pendente" })
            .setTimestamp();

        if ( servidores == "first_option")
            await client.channels.fetch('984117499639525427').then(channel => channel.send({ embeds: [Geral] }));
        if ( servidores == "second_option")
            await client.channels.fetch('984117499639525427').then(channel => channel.send({ embeds: [Comp] }));
        if ( servidores == "third_option")
            await client.channels.fetch('984117499639525427').then(channel => channel.send({ embeds: [Retakes] }));
        if ( servidores == "fourth_option")
            await client.channels.fetch('984117499639525427').then(channel => channel.send({ embeds: [awp] }));
        if ( servidores == "fifth_option")
            await client.channels.fetch('984117499639525427').then(channel => channel.send({ embeds: [discord] }));
        

        modal.followUp({ content: "Bug enviado!" })
    }
}