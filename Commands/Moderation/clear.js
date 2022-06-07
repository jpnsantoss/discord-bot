const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "clear",
    description: "Deletes a specified number of messages from a channel or a target.",
    permission: "MANAGE_MESSAGES",
    options: [
        {
            name: "quantidade",
            description: "Escolhe o número de mensagens que desejas apagar.",
            type: "NUMBER",
            required: true
        },
        {
            name: "alvo",
            description: "Escolhe o alvo para apagar as suas mensagens.",
            type: "USER",
            required: false
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute (interaction) {
        const { channel, options } = interaction;

        const Amount = options.getNumber("quantidade");
        const Target = options.getMember("alvo");

        const Messages = await channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor("LUMINOUS_VIVID_PINK");

        if(Target) {
            let i = 0;
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id && Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`🧹 Foram apagadas ${messages.size} mensagens de ${Target}.`);
                interaction.reply({embeds: [Response], ephemeral: true});
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messages => {
                Response.setDescription(`🧹 Foram apagadas ${messages.size} mensagens deste canal.`);
                interaction.reply({embeds: [Response], ephemeral: true});
            })
        }
    }
}