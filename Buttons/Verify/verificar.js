module.exports = {
    id: "verificar",
    execute(interaction) {
        
        const { member } = interaction;

        if(member.roles.cache.has('978584717693681685')) return interaction.reply({content: "Já aceitaste as regras anteriormente.", ephemeral: true});

        member.roles.add("978584717693681685");
        return interaction.reply({content: "Regras Aceites! Agora tens acesso total ao servidor! 🎉", ephemeral: true});
    }
}