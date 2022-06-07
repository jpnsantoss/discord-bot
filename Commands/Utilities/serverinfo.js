const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Embed com Informação do servidor",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const { guild } = interaction;

        const { createdTimestamp, ownerId, description, members, memberCount, channels, emojis, stickers } = guild;

        const Embed = new MessageEmbed()
        .setColor("BLURPLE")
        .setAuthor({name: guild.name, iconURL: guild.iconURL({dynamic: true})})
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addFields(
            {
                name: "GERAL",
                value: [
                    `Nome: ${guild.name}`,
                    `Criado: <t:${parseInt(createdTimestamp / 1000)}:R></t:$>`,
                    `Dono: <@${ownerId}>`,
                    `Descrição: ${description}`
                ].join("\n")
            },
            {
                name: "🌍 | USUÁRIOS",
                value: [
                    `- Membros: ${members.cache.filter((m) => !m.user.bot).size}`,
                    `- Bots: ${members.cache.filter((m) => m.user.bot).size}`,
                    `Total: ${memberCount}`
                ].join("\n")
            },
            {
                name: "📘  | CANAIS",
                value: [
                    `- Texto: ${channels.cache.filter((c) => c.type === "GUILD_TEXT").size}`,
                    `- Voz: ${channels.cache.filter((c) => c.type === "GUILD_VOICE").size}`,
                    `- Categorias: ${channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}`,
                    `- Novidades: ${channels.cache.filter((c) => c.type === "GUILD_NEWS").size}`,
                    `Total: ${channels.cache.size}`
                ].join("\n")
            },
            {
                name: "🤡 | EMOJIS & STICKERS",
                value: [
                    `- Animados: ${emojis.cache.filter((e) => e.animated).size}`,
                    `- Estáticos: ${emojis.cache.filter((e) => !e.animated).size}`,
                    `- Stickers: ${stickers.cache.size}`,
                    `Total: ${stickers.cache.size + emojis.cache.size}`
                ].join("\n")
            },
            {
                name: "🔮 | NITRO",
                value: [
                    `- Tier: ${guild.premiumTier.replace("TIER_", "")}`,
                    `- Boosts: ${guild.premiumSubscriptionCount}`,
                    `- Boosters: ${members.cache.filter((m) => m.premiumSince).size}`
                ].join("\n")
            }
        )
        .setFooter({text: "Atualizado: "}).setTimestamp();
        interaction.reply({embeds: [Embed]})
    }
}