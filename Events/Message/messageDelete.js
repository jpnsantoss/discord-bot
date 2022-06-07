const { MessageEmbed, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageDelete",
    /**
     * 
     * @param {Message} message 
     */
    execute(message) {
        if(message.author.bot) return;

        const Log = new MessageEmbed()
        .setColor("#36393f")
        .setDescription(`📕 Uma [mensagem](${message.url}) de ${message.author.tag} foi **removida**.\n
        **Mensagem:**\n ${message.content ? message.content : "None"}`.slice(0, 4096))

        if(message.attachments.size >= 1) {
            Log.addField(`Anexos:`, `${message.attachments.map(a => a.url)}`, true)
        }

        new WebhookClient({url: "https://discord.com/api/webhooks/952612480864096276/_xlKoUyCWuH5f0u3cY7lqFWsKkOCgwFHc2iZqkzR9miNGo3S7Vmx0NN88e_Aao2vbFh_"}
        ).send({embeds: [Log]}).catch((err) => { console.log(err) });
    }
}