const { MessageEmbed, Message, Client } = require("discord.js");

module.exports = {
    name: "messageDelete",
    /**
     * 
     * @param {Message} message 
     * @param {Client} client
     */
    execute(message, client) {
        if (message.author.bot) return;

        const Log = new MessageEmbed()
            .setColor("#36393f")
            .setDescription(`📕 Uma [mensagem](${message.url}) de ${message.author.tag} foi **removida**.\n
        **Mensagem:**\n ${message.content ? message.content : "None"}`.slice(0, 4096))

        if (message.attachments.size >= 1) {
            Log.addField(`Anexos:`, `${message.attachments.map(a => a.url)}`, true)
        }

        client.channels.fetch('978584751810162708').then(channel => channel.send({ embeds: [Log] }));
    }
}