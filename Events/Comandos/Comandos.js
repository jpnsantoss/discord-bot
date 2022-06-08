const { MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {Client} client
     */
    async execute(interaction, client) {

        if (!interaction.isSelectMenu()) return;

        if (interaction.customId === 'select') {

            await interaction.deferReply({ ephemeral: true });

            const COMP = new MessageEmbed()
                .setColor("ORANGE")
                .setAuthor({ name: "COMP" })
                .setTimestamp();

            const RETAKES = new MessageEmbed()
                .setColor("ORANGE")
                .setAuthor({ name: "RETAKES" })
                .setTimestamp();

            const AWP = new MessageEmbed()
                .setColor("ORANGE")
                .setAuthor({ name: "awp" })
                .setTimestamp();

            const DI = new MessageEmbed()
                .setColor("ORANGE")
                .setAuthor({ name: "RETAKEadsasdS" })
                .setTimestamp();

            if (interaction.values[0] == "first_option")
                interaction.followUp({ embeds: [COMP] })

            if (interaction.values[0] == "second_option")
                interaction.followUp({ embeds: [RETAKES] })

            if (interaction.values[0] == "third_option")
                interaction.followUp({ embeds: [AWP] })

            if (interaction.values[0] == "fourth_option")
                interaction.followUp({ embeds: [DI] })
        }
    }
}