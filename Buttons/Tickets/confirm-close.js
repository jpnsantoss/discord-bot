const { Client, MessageEmbed, MessageActionRow, MessageButton  } = require("discord.js");

module.exports = {
    id: "confirm-close",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {

        const guild = client.guilds.cache.get(interaction.guildId);
        const chan = guild.channels.cache.get(interaction.channelId);

        interaction.reply({
            content: `Ticket fechado por <@!${interaction.user.id}>`,
            components: []
        });
        
        chan.edit({
            name: `closed-${chan.name}`,
            permissionOverwrites: [
            {
                id: client.users.cache.get(chan.topic),
                deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
                id: "978584706318757920",
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
                id: interaction.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
            },
            ],
        })
        .then(async () => {
            const embed = new MessageEmbed()
            .setColor('6d6ee8')
            .setAuthor({name: 'Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png'})
            .setDescription('```Desejas eleminar o ticket?```')
            .setFooter({text: 'Coding Zone - PT', iconURL: client.user.avatarURL()})
            .setTimestamp();

            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('delete-ticket')
                .setLabel('Excluir Ticket')
                .setEmoji('🗑️')
                .setStyle('DANGER'),
            );

            chan.send({
            embeds: [embed],
            components: [row]
            });
        });
    }
}