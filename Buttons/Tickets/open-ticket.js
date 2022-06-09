let hastebin = require('hastebin');

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
            parent: client.config.parentOpened,
            topic: interaction.user.id,
            permissionOverwrites: [{
                    id: interaction.user.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                },
                {
                    id: client.config.roleSupport,
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

            const embed = new client.discord.MessageEmbed()
                .setColor('6d6ee8')
                .setAuthor({ name: 'Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png' })
                .setDescription('Escolhe uma categoria para o teu ticket!')
                .setFooter({ text: 'Coding Zone - PT', iconURL: client.user.avatarURL() })
                .setTimestamp();

            const row = new client.discord.MessageActionRow()
                .addComponents(
                    new client.discord.MessageSelectMenu()
                    .setCustomId('category')
                    .setPlaceholder('Escolhe a categoria do ticket')
                    .addOptions([{
                            label: 'Comprar um Serviço',
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
                                .setColor('6d6ee8')
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

        //Botão Terminado.

        // if (interaction.customId == "close-ticket") {
        //     const guild = client.guilds.cache.get(interaction.guildId);
        //     const chan = guild.channels.cache.get(interaction.channelId);

        //     const row = new client.discord.MessageActionRow()
        //         .addComponents(
        //             new client.discord.MessageButton()
        //             .setCustomId('confirm-close')
        //             .setLabel('Fechar o ticket')
        //             .setStyle('DANGER'),
        //             new client.discord.MessageButton()
        //             .setCustomId('no')
        //             .setLabel('Anular o encerramento')
        //             .setStyle('SECONDARY'),
        //         );

        //     const verif = await interaction.reply({
        //         content: 'Tens a certeza que desejas fechar o ticket ?',
        //         components: [row]
        //     });

        //     const collector = interaction.channel.createMessageComponentCollector({
        //         componentType: 'BUTTON',
        //         time: 10000
        //     });

        //     collector.on('collect', i => {
        //         if (i.customId == 'confirm-close') {
        //             interaction.editReply({
        //                 content: `Ticket fechado por <@!${interaction.user.id}>`,
        //                 components: []
        //             });

        //             chan.edit({
        //                     name: `closed-${chan.name}`,
        //                     permissionOverwrites: [{
        //                             id: client.users.cache.get(chan.topic),
        //                             deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        //                         },
        //                         {
        //                             id: "978584706318757920",
        //                             allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        //                         },
        //                         {
        //                             id: interaction.guild.roles.everyone,
        //                             deny: ['VIEW_CHANNEL'],
        //                         },
        //                     ],
        //                 })
        //                 .then(async() => {
        //                     const embed = new client.discord.MessageEmbed()
        //                         .setColor('6d6ee8')
        //                         .setAuthor({ name: 'Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png' })
        //                         .setDescription('```Desejas eleminar o ticket?```')
        //                         .setFooter({ text: 'Coding Zone - PT', iconURL: client.user.avatarURL() })
        //                         .setTimestamp();

        //                     const row = new client.discord.MessageActionRow()
        //                         .addComponents(
        //                             new client.discord.MessageButton()
        //                             .setCustomId('delete-ticket')
        //                             .setLabel('Excluir Ticket')
        //                             .setEmoji('🗑️')
        //                             .setStyle('DANGER'),
        //                         );

        //                     chan.send({
        //                         embeds: [embed],
        //                         components: [row]
        //                     });
        //                 });

        //             collector.stop();
        //         };
        //         if (i.customId == 'no') {
        //             interaction.editReply({
        //                 content: 'Encerramento do ticket cancelado !',
        //                 components: []
        //             });
        //             collector.stop();
        //         };
        //     });

        //     collector.on('end', (i) => {
        //         if (i.size < 1) {
        //             interaction.editReply({
        //                 content: 'Encerramento do ticket cancelado !',
        //                 components: []
        //             });
        //         };
        //     });
        // };

        // if (interaction.customId == "delete-ticket") {
        //     const guild = client.guilds.cache.get(interaction.guildId);
        //     const chan = guild.channels.cache.get(interaction.channelId);

        //     interaction.reply({
        //         content: 'A Salvar as mensagens...'
        //     });

        //     chan.messages.fetch().then(async(messages) => {
        //         let a = messages.filter(m => m.author.bot !== true).map(m =>
        //             `${new Date(m.createdTimestamp).toLocaleString('pt-PT')} - ${m.author.username}#${m.author.discriminator}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`
        //         ).reverse().join('\n');
        //         if (a.length < 1) a = "Nothing"
        //         hastebin.createPaste(a, {
        //                 contentType: 'text/plain',
        //                 server: 'https://hastebin.com'
        //             }, {})
        //             .then(function(urlToPaste) {
        //                 const embed = new client.discord.MessageEmbed()
        //                     .setAuthor({ name: 'Logs Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png' })
        //                     .setDescription(`📰 Logs do Ticket \`${chan.id}\` criado por <@!${chan.topic}> e apagado por <@!${interaction.user.id}>\n\nLogs: [**Clica aqui para ver as logs**](${urlToPaste})`)
        //                     .setColor('2f3136')
        //                     .setTimestamp();

        //                 const embed2 = new client.discord.MessageEmbed()
        //                     .setAuthor({ name: 'Logs Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png' })
        //                     .setDescription(`📰 Logs do teu ticket \`${chan.id}\`: [**Clica aqui para ver as logs**](${urlToPaste})`)
        //                     .setColor('2f3136')
        //                     .setTimestamp();

        //                 client.channels.cache.get(client.config.logsTicket).send({
        //                     embeds: [embed]
        //                 });
        //                 client.users.cache.get(chan.topic).send({
        //                     embeds: [embed2]
        //                 }).catch(() => { console.log('I can\'t dm him :(') });
        //                 chan.send('A apagar o canal...');

        //                 setTimeout(() => {
        //                     chan.delete();
        //                 }, 5000);
        //             });
        //     });
        // };
    },
};