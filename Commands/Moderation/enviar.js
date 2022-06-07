const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const guildMemberAdd = require("../../Events/Member/guildMemberAdd");

module.exports = {
    name: "enviar",
    description: "Envia uma mensagem para o servidor.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "tipo",
            description: "Tipo de mensagem",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Embed",
                    value: "embed"
                },
                {
                    name: "Mensagem",
                    value: "mensagem"
                }
            ]
        },
        {
            name: "texto",
            description: "Escreve o texto da mensagem que queres que seja enviada",
            type: "STRING",
            required: true
        },
        {
            name: "titulo",
            description: "Titulo do embed",
            type: "STRING",
            required: false
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute (interaction, client) {

        const { options } = interaction;

        const choices = options.getString("tipo");

        const Title = options.getString("titulo");
        const Mensagem = options.getString("texto");

        switch(choices) {
            case "embed" : {
                const Embed = new MessageEmbed()
                .setColor("RED")
                .setAuthor({name: "Nova Mensagem", iconURL: "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_960_720.png"})
                .setDescription(Mensagem)
                .setTimestamp();

                if (Title) Embed.setTitle(Title);

                interaction.channel.send({embeds: [Embed]});

                interaction.reply({content: "Mensagem Enviada.", ephemeral: true});
            }
            break;
            case "mensagem" : {
                if (Title) {
                    interaction.channel.send({content: `**${Title}** \n\n ${Mensagem}`});
                } else {
                    interaction.channel.send({content: Mensagem});
                }
                interaction.reply({content: "Mensagem Enviada.", ephemeral: true});
            }
            break;
        }
    }
}