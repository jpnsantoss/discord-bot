const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, Client } = require("discord.js")
const DB = require("../../Structures/Schemas/SuggestDB");

module.exports = {
    name: "sugestao",
    description: "Faz uma sugestão!",
    options: [
        {
            name: "descricao",
            description: "Descreve a tua sugestão.",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const { options, guildId, member, user } = interaction;
        const Suggestion = options.getString("descricao");

        const Embed = new MessageEmbed()
        .setColor("ORANGE")
        .setAuthor({name: user.tag, iconURL: user.displayAvatarURL({dynamic: true})})
        .addFields(
            {name: "Sugestão:", value: Suggestion},
            {name: "Estado", value: "Pendente"}
        )
        .setTimestamp();
        
        const Buttons = new MessageActionRow();
        Buttons.addComponents(
            new MessageButton().setCustomId("suggest-accept").setLabel("Aceitar").setStyle("SUCCESS"),
            new MessageButton().setCustomId("suggest-decline").setLabel("Recusar").setStyle("DANGER")
        )

        try {

            const M = await client.channels.fetch('950879751260766258').then(channel => channel.send({embeds: [Embed], components: [Buttons]}));
            interaction.reply({content: "Sugestão enviada!", ephemeral: true});
            M.react("<:Approve:952279081683136612>");
            M.react("<:Reject:952279081355984936>");

            await DB.create({GuildID: guildId, MessageID: M.id, Details: [
                {
                    MemberID: member.id,
                    Suggestion: Suggestion
                }
            ]})

        } catch (err) {
            console.log(err);
        }
    }
}