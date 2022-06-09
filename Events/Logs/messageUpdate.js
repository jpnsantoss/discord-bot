const { MessageEmbed, Message, Client } = require("discord.js");

module.exports = {
    name: "messageUpdate",
    /**
     * 
     * @param {Message} oldMessage 
     * @param {Message} newMessage 
     * @param {Client} client
     */
    execute(oldMessage, newMessage, client) {
        if (oldMessage.author.bot) return;

        if (oldMessage.content === newMessage.content) return;

        const Count = 1950;

        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.lenght > 1950 ? " ..." : "")
        const Edited = newMessage.content.slice(0, Count) + (newMessage.content.lenght > 1950 ? " ..." : "")

        const Log = new MessageEmbed()
            .setColor("#36393f")
            .setDescription(`📘 Uma [mensagem](${newMessage.url}) de ${newMessage.author} foi **editada** em ${newMessage.channel}). \n
        **Original**:\n \`\`\`${Original}\`\`\` \n**Editada**:\n \`\`\`${Edited}\`\`\``.slice("0", "4096"))
            .setFooter({ text: `Membro: ${newMessage.author.tag} | ID: ${newMessage.author.id}` });

        client.channels.fetch('978584751810162708').then(channel => channel.send({ embeds: [Log] }));
    }
}