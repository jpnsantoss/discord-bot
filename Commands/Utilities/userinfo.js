const { ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "userinfo",
    type: "USER",
    context: true,
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
    async execute(interaction) {
        const target = await interaction.guild.members.fetch(interaction.targetId);

        const Response = new MessageEmbed()
        .setColor("BLURPLE")
        .setAuthor({ name: target.user.tag, iconURL: target.user.avatarURL({dynamic: true, size: 512})})
        .setThumbnail(target.user.avatarURL({dynamic: true, size: 512}))
        .addField("ID", `${target.id}`, true)
        .addField("Cargos", `${target.roles.cache.map(r => r).join(" ").replace("@everyone", "") || "None"}`)
        .addField("Membro desde:", `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, true)
        .addField("User do discord desde:", `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`, true)
        

        interaction.reply({embeds: [Response], ephemeral: true})
    }
}
