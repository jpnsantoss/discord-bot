const { CommandInteraction, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "anuncio",
    description: "Envia um anúncio para o servidor.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "titulo",
            description: "Titulo do anúncio",
            type: "STRING",
            required: true
        },
        {
            name: "descricao",
            description: "Escreve o anuncio que queres que seja enviado",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute (interaction, client) {

        const { options, user } = interaction;


        const Message = options.getString("descricao")
        const Title = options.getString("titulo")
        const Embed = new MessageEmbed()
        .setColor("RED")
        .setAuthor({name: user.tag, iconURL: user.avatarURL({dynamic: true, size: 512})})
        .setTitle(`${Title}`)
        .setThumbnail("https://cdn-icons-png.flaticon.com/512/326/326031.png")
        .setDescription(`${Message}`)
        .setTimestamp();

        interaction.channel.send({content: "||@everyone||", embeds: [Embed]});
        interaction.reply({content: "Anúncio enviado!", ephemeral: true});

    }
}