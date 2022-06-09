module.exports = {
    id: "no",
    async execute(interaction) {
        interaction.reply({
            content: 'Encerramento do ticket cancelado !',
            components: []
        });
    }
}