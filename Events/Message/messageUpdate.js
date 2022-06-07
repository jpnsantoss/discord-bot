const  { MessageEmbed, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageUpdate",
    /**
     * 
     * @param {Message} oldMessage 
     * @param {Message} newMessage 
     */
    execute(oldMessage, newMessage) {
        if(oldMessage.author.bot) return;

        if(oldMessage.content === newMessage.content) return;

        const Count = 1950;

        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.lenght > 1950 ? " ..." : "")
        const Edited = newMessage.content.slice(0, Count) + (newMessage.content.lenght > 1950 ? " ..." : "")

        const Log = new MessageEmbed()
        .setColor("#36393f")
        .setDescription(`📘 Uma [mensagem](${newMessage.url}) de ${newMessage.author} foi **editada** em ${newMessage.channel}). \n
        **Original**:\n \`\`\`${Original}\`\`\` \n**Editada**:\n \`\`\`${Edited}\`\`\``.slice("0", "4096"))
        .setFooter({ text: `Membro: ${newMessage.author.tag} | ID: ${newMessage.author.id}`});

        new WebhookClient({url: "https://discord.com/api/webhooks/952612480864096276/_xlKoUyCWuH5f0u3cY7lqFWsKkOCgwFHc2iZqkzR9miNGo3S7Vmx0NN88e_Aao2vbFh_"}
        ).send({embeds: [Log]}).catch((err) => console.log(err));
    }
}