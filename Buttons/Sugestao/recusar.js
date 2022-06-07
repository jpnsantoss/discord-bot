const DB = require("../../Structures/Schemas/SuggestDB");

module.exports = {
    id: "suggest-decline",
    execute(interaction) {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content: "Apenas STAFF tem permissão para aceitar/rejeitar sugestões!", ephemeral: true});

        const { guildId, customId, message } = interaction;

        DB.findOne({GuildID: guildId, MessageID: message.id}, async(err, data) => {
            if(err) throw err;
            if(!data) return interaction.reply({content: "No data was found in the database", ephemeral: true});

            const Embed = message.embeds[0];
            if(!Embed) return;

            Embed.fields[1] = {name: "Estado:", value: "Rejeitada", inline: true};
            message.edit({embeds: [Embed.setColor("RED")], components: []});
            message.reactions.removeAll()
            return interaction.reply({content: "Sugestão Rejeitada", ephemeral: true})
        })
    }
    
}