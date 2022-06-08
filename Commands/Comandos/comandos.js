const { MessageEmbed, MessageActionRow, MessageSelectMenu, Client } = require("discord.js");

module.exports = {
    name: "comandos",
    description: "Envia um embed de comandos.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
            .setAuthor({ name: "Comandos", iconURL: "https://media.discordapp.net/attachments/942119051914793020/984117415258509322/lady-beetle_1f41e_1.png" })
            .setTitle("Reporta um bug!")
            .setDescription("Encontras-te algum erro nos nossos servidores? Ajuda-nos a resolver, explica detalhadamente o que aconteceu.")
            .setFooter({ text: "🔽 Clica neste botão para enviares o teu bug!" })
            .setColor("RED")

        const row = new MessageActionRow()

        row.addComponents(
            new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('Servidor')
            .addOptions([{
                    label: 'Competitivo',
                    description: 'Lista de comandos dos servidores de competitivo',
                    value: 'first_option',
                },
                {
                    label: 'Retakes',
                    description: 'Lista de comandos dos servidores de retakes',
                    value: 'second_option',
                },
                {
                    label: 'AWP',
                    description: 'Lista de comandos dos servidores de retakes',
                    value: 'third_option',
                },
                {
                    label: 'Discord',
                    description: 'Lista de comandos dos servidores de retakes',
                    value: 'fourth_option',
                },
            ]),
        );

        client.channels.fetch('981503751892369428').then(channel => channel.send({ embeds: [Embed], components: [row] }));
        await interaction.reply({ content: "Embed enviado!", ephemeral: true });
    }
}