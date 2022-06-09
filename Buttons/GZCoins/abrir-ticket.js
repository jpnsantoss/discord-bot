const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");

module.exports = {
    id: 'abrir-ticket',
    async execute(interaction, client) {
        let hasRole = interaction.member.roles.cache.some(role => role.name === 'No Support')

        if (!interaction.isButton()) return;
        if (hasRole) {
            return interaction.reply({
                content: 'Não tens acesso ao suporte via discord !',
                ephemeral: true
            });
        };
        if (client.guilds.cache.get(interaction.guildId).channels.cache.find(c => c.topic == interaction.user.id)) {
            return interaction.reply({
                content: 'Já tens um ticket criado !',
                ephemeral: true
            });
        };

        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            parent: "984493679538495518",
            topic: interaction.user.id,
            permissionOverwrites: [{
                    id: interaction.user.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
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
            type: 'text',
        }).then(async c => {
            interaction.reply({
                content: `Ticket criado! <#${c.id}>`,
                ephemeral: true
            });

            const embed = new MessageEmbed()
                .setColor('RED')
                .setAuthor({ name: 'Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png' })
                .setDescription(`<@!${interaction.user.id}> Abriu um ticket de: **COMPRAS**`)
                .setFooter({ text: 'Gaming Zone', iconURL: client.user.avatarURL() })
                .setTimestamp();

            const row = new MessageActionRow();

            row.addComponents(
                new MessageButton()
                .setCustomId('close-ticket')
                .setLabel('Fechar o ticket')
                .setEmoji('899745362137477181')
                .setStyle('DANGER'),
            );

            msg = await c.send({
                content: `<@!${interaction.user.id}>`,
                embeds: [embed],
                components: [row]
            });
        });
    },
};