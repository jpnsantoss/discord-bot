const { MessageEmbed } = require("discord.js");
let hastebin = require('hastebin');

module.exports = {
  id: 'delete-ticket',
  async execute(interaction, client) {
	
    const guild = client.guilds.cache.get(interaction.guildId);
    const chan = guild.channels.cache.get(interaction.channelId);

    interaction.reply({
        content: 'A Salvar as mensagens...'
    });

    chan.messages.fetch().then(async (messages) => {
        let a = messages.filter(m => m.author.bot !== true).map(m =>
            `${new Date(m.createdTimestamp).toLocaleString('pt-PT')} - ${m.author.username}#${m.author.discriminator}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`
        ).reverse().join('\n');
        if (a.length < 1) a = "Nothing"
        hastebin.createPaste(a, {
                contentType: 'text/plain',
                server: 'https://hastebin.com'
            }, {})
            .then(function (urlToPaste) {
                const embed = new MessageEmbed()
                    .setAuthor({name: 'Logs Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png'})
                    .setDescription(`📰 Logs do Ticket \`${chan.id}\` criado por <@!${chan.topic}> e apagado por <@!${interaction.user.id}>\n\nLogs: [**Clica aqui para ver as logs**](${urlToPaste})`)
                    .setColor('2f3136')
                    .setTimestamp();

                const embed2 = new MessageEmbed()
                    .setAuthor({name: 'Logs Ticket', iconURL: 'https://images.emojiterra.com/twitter/v13.1/512px/1f39f.png'})
                    .setDescription(`📰 Logs do teu ticket \`${chan.id}\`: [**Clica aqui para ver as logs**](${urlToPaste})`)
                    .setColor('2f3136')
                    .setTimestamp();

                client.channels.cache.get("978584751810162708").send({
                    embeds: [embed]
                });
                client.users.cache.get(chan.topic).send({
                    embeds: [embed2]
                }).catch(() => {console.log('I can\'t dm him :(')});
                chan.send('A apagar o canal...');

                setTimeout(() => {
                    chan.delete();
                }, 5000);
            });
        });
    },
};
