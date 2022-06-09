module.exports = {
    id: "confirm-close",
    async execute(interaction) {
        interaction.reply({
            content: 'Encerramento do ticket cancelado !',
            components: []
        });
    }
}