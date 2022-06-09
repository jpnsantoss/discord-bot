const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");

module.exports = {
    id: 'open-ticket',
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
            parent: "984493905624072232",
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
                .setDescription('Escolhe uma categoria para o teu ticket!')
                .setFooter({ text: 'Gaming Zone', iconURL: client.user.avatarURL() })
                .setTimestamp();

            const row = new MessageActionRow()

            row.addComponents(
                new MessageSelectMenu()
                .setCustomId('category')
                .setPlaceholder('Escolhe a categoria do ticket')
                .addOptions([{
                        label: 'Compras',
                        value: 'compras',
                        emoji: '💳',
                    },
                    {
                        label: 'Problemas Técnicos',
                        value: 'problemas técnicos',
                        emoji: '🔨',
                    },
                    {
                        label: 'Parcerias',
                        value: 'parcerias',
                        emoji: '💼',
                    },
                    {
                        label: 'Outros Assuntos',
                        value: 'outros assuntos',
                        emoji: '🎫',
                    },
                ]),
            );

            msg = await c.send({
                content: `<@!${interaction.user.id}>`,
                embeds: [embed],
                components: [row]
            });

            const collector = msg.createMessageComponentCollector({
                componentType: 'SELECT_MENU',
                time: 20000
            });

            collector.on('collect', i => {
                if (i.user.id === interaction.user.id) {
                    if (msg.deletable) {
                        msg.delete().then(async() => {
                            const embed = new MessageEmbed()
                                .setColor('RED')
                                .setAuthor({ name: 'Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png' })
                                .setDescription(`<@!${interaction.user.id}> Abriu um ticket de: **${i.values[0].toUpperCase()}**`)
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

                            const opened = await c.send({
                                content: `<@&978584706318757920>`,
                                embeds: [embed],
                                components: [row]
                            });

                            opened.pin().then(() => {
                                opened.channel.bulkDelete(1);
                            });
                        });
                    };
                    if (i.values[0] == 'compras') {
                        c.edit({
                            parent: "984493679538495518"
                        });
                    };
                    if (i.values[0] == 'problemas técnicos') {
                        c.edit({
                            parent: "984493905624072232"
                        });
                    };
                    if (i.values[0] == 'parcerias') {
                        c.edit({
                            parent: "984493905624072232"
                        });
                    };
                    if (i.values[0] == 'outros assuntos') {
                        c.edit({
                            parent: "984493905624072232"
                        });
                    };
                };
            });

            collector.on('end', collected => {
                if (collected.size < 1) {
                    c.send(`Nenhuma categoria selecionada. Encerramento do ticket...`).then(() => {
                        setTimeout(() => {
                            if (c.deletable) {
                                c.delete();
                            };
                        }, 5000);
                    });
                };
            });
        });
    },
};