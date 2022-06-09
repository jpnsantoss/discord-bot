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
                .setColor("RED")
                .setTitle("Comandos dos servidores de Competitivo")
                .setDescription("<a:1097dotanimatedred:983917835799658507> **Skins e Facas**\n> `!ws` - Abre o menu de skins\n> `!knife` `!kf` - Abre o menu de facas\n> `!nametag <nome>` - Adicionar nametag a tua arma\n> `!seed <valor>` - Escolhe o Pattern da tua skin\n\n<a:1097dotanimatedred:983917835799658507> **Luvas**\n> `!gloves` `!glove` - Abre o menu de luvas\n>  `!luvas` `!luva` - Abre o menu de luvas\n\n<a:1097dotanimatedred:983917835799658507> **Agentes**\n> `!agents` `!agentes` - Abre o menu de agentes\n\n<a:1097dotanimatedred:983917835799658507> **Stickers**\n> `!sticker` `!stickers` `!autocolantes` - Abre o menu de stickers\n\n<a:1097dotanimatedred:983917835799658507> **Reports**\n> `!report` `!reportar` - Abre o menu de reports\n> `!call` `!calladmin` - Abre o menu de reports\n\n<a:1097dotanimatedred:983917835799658507> **Mapa**\n> `!rtv` - Votar para mudar de mapa\n\n<a:1097dotanimatedred:983917835799658507> **Rank**\n> `!rank` - Abre o menu do rank\n> `!pontos` - Mostra quantos pontos tens no servidor\n> `!rankseason` - Abre o menu do rank da season\n> `!rankglobal` - Abre o menu do rank da season\n> `!top` - Mostra o top de pontos\n> `!topseason` - Mostra o top de ponto da season\n\n<a:1097dotanimatedred:983917835799658507> **Desistir**\n> `!surrender` `!gg` - Votar para desistir da partida\n\n<a:1097dotanimatedred:983917835799658507> **Mensagens privadas**\n> `!msg` `!pm` - Abre o menu das mensagens\n\n<a:1097dotanimatedred:983917835799658507> **Links**\n> `!website` - Envia o link do nosso website\n> `!steam` - Envia o link do nosso grupo steam\n> `!discord` - Envia o link do nosso discord\n\n<a:1097dotanimatedred:983917835799658507> **GZ Coins**\n> `!gzcoins` - Mostra quantas GZCoins tens\n> `!bonusdiario` `!daily` - Recebe um bónus diário")
                .setTimestamp();

            const RETAKES = new MessageEmbed()
                .setColor("RED")
                .setTitle("Comandos dos servidores de Retakes")
                .setDescription("<a:1097dotanimatedred:983917835799658507> **Skins e Facas**\n> `!ws` - Abre o menu de skins\n> `!knife` `!kf` - Abre o menu de facas\n> `!nametag <nome>` - Adicionar nametag a tua arma\n> `!seed <valor>` - Escolhe o Pattern da tua skin\n\n<a:1097dotanimatedred:983917835799658507> **Luvas**\n> `!gloves` `!glove` - Abre o menu de luvas\n>  `!luvas` `!luva` - Abre o menu de luvas\n\n<a:1097dotanimatedred:983917835799658507> **Agentes**\n> `!agents` `!agentes` - Abre o menu de agentes\n\n<a:1097dotanimatedred:983917835799658507> **Stickers**\n> `!sticker` `!stickers` `!autocolantes` - Abre o menu de stickers\n\n<a:1097dotanimatedred:983917835799658507> **Reports**\n> `!report` `!reportar` - Abre o menu de reports\n> `!call` `!calladmin` - Abre o menu de reports\n\n<a:1097dotanimatedred:983917835799658507> **Mapa**\n> `!rtv` - Votar para mudar de mapa\n\n<a:1097dotanimatedred:983917835799658507> **Rank**\n> `!rank` - Abre o menu do rank\n> `!pontos` - Mostra quantos pontos tens no servidor\n> `!rankseason` - Abre o menu do rank da season\n> `!rankglobal` - Abre o menu do rank da season\n> `!top` - Mostra o top de pontos\n> `!topseason` - Mostra o top de ponto da season\n\n<a:1097dotanimatedred:983917835799658507> **Mensagens privadas**\n> `!msg` `!pm` - Abre o menu das mensagens\n\n<a:1097dotanimatedred:983917835799658507> **Links**\n> `!website` - Envia o link do nosso website\n> `!steam` - Envia o link do nosso grupo steam\n> `!discord` - Envia o link do nosso discord\n\n<a:1097dotanimatedred:983917835799658507> **GZ Coins**\n> `!gzcoins` - Mostra quantas GZCoins tens\n> `!bonusdiario` `!daily` - Recebe um bónus diário")
                .setTimestamp();

            const AWP = new MessageEmbed()
                .setColor("RED")
                .setTitle("Comandos dos servidores de AWP")
                .setDescription("<a:1097dotanimatedred:983917835799658507> **Skins e Facas**\n> `!ws` - Abre o menu de skins\n> `!knife` `!kf` - Abre o menu de facas\n> `!nametag <nome>` - Adicionar nametag a tua arma\n> `!seed <valor>` - Escolhe o Pattern da tua skin\n\n<a:1097dotanimatedred:983917835799658507> **Luvas**\n> `!gloves` `!glove` - Abre o menu de luvas\n>  `!luvas` `!luva` - Abre o menu de luvas\n\n<a:1097dotanimatedred:983917835799658507> **Agentes**\n> `!agents` `!agentes` - Abre o menu de agentes\n\n<a:1097dotanimatedred:983917835799658507> **Stickers**\n> `!sticker` `!stickers` `!autocolantes` - Abre o menu de stickers\n\n<a:1097dotanimatedred:983917835799658507> **Reports**\n> `!report` `!reportar` - Abre o menu de reports\n> `!call` `!calladmin` - Abre o menu de reports\n\n<a:1097dotanimatedred:983917835799658507> **Mapa**\n> `!rtv` - Votar para mudar de mapa\n\n<a:1097dotanimatedred:983917835799658507> **Rank**\n> `!rank` - Abre o menu do rank\n> `!pontos` - Mostra quantos pontos tens no servidor\n> `!rankseason` - Abre o menu do rank da season\n> `!rankglobal` - Abre o menu do rank da season\n> `!top` - Mostra o top de pontos\n> `!topseason` - Mostra o top de ponto da season\n\n<a:1097dotanimatedred:983917835799658507> **Mensagens privadas**\n> `!msg` `!pm` - Abre o menu das mensagens\n\n<a:1097dotanimatedred:983917835799658507> **Links**\n> `!website` - Envia o link do nosso website\n> `!steam` - Envia o link do nosso grupo steam\n> `!discord` - Envia o link do nosso discord\n\n<a:1097dotanimatedred:983917835799658507> **GZ Coins**\n> `!gzcoins` - Mostra quantas GZCoins tens\n> `!bonusdiario` `!daily` - Recebe um bónus diário")
                .setTimestamp();
                
            if (interaction.values[0] == "first_option")
                interaction.followUp({ embeds: [COMP] })

            if (interaction.values[0] == "second_option")
                interaction.followUp({ embeds: [RETAKES] })

            if (interaction.values[0] == "third_option")
                interaction.followUp({ embeds: [AWP] })

        }
    }
}