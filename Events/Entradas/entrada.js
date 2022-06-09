const { MessageEmbed, GuildMember, MessageAttachment, Client } = require("discord.js");
const Canvas = require("canvas");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     * @param {Client} client 
     */
    async execute(member, client) {
        const { user, guild } = member;

        client.channels.cache.get('978584724597514270').setName(`🌍・Membros: ${guild.memberCount}`)

        const Welcome = new MessageEmbed()
            .setColor("DARKER_GREY")
            .setDescription(`
        **━━━━━━ㅤﾠBem-Vindo à Gaming Zone!ﾠㅤ━━━━━━**
        **ㅤㅤㅤㅤㅤㅤㅤㅤㅤwww.gamingzone.pt**
        **━━━━━━━━━━━━━━━━━━━━━━━━━━**
        **ㅤㅤ<a:arrow:980895610574094346>〢Nomeㅤㅤㅤㅤㅤㅤㅤﾠ<a:arrow:980895610574094346>〢**${member}
        **ㅤㅤ<a:arrow:980895610574094346>〢Criadaㅤㅤㅤㅤㅤㅤㅤ <a:arrow:980895610574094346>〢 **<t:${parseInt(user.createdTimestamp / 1000)}:R>
        **ㅤㅤ<a:arrow:980895610574094346>〢Membrosㅤㅤㅤㅤㅤㅤ<a:arrow:980895610574094346>〢 **${guild.memberCount}
        **━━━━━━━━━━━━━━━━━━━━━━━━━━ **`);

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext("2d");

        const background = await Canvas.loadImage("./Structures/Images/background.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.font = '35px Berlin Sans FB';
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(`${member.displayName}`, canvas.width / 3, canvas.height / 1.6);

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg" }));

        ctx.beginPath();
        ctx.arc(125, 125, 80, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(avatar, 25, 25, 200, 200);

        const attachment = new MessageAttachment(canvas.toBuffer(), "boostimg.png");

        Welcome.setImage(`attachment://booster.png`);

        await client.channels.fetch('978584731052552212').then(channel => channel.send({ embeds: [Welcome], files: [attachment] }).catch((err) => console.log(err)));

        // Welcome.setDescription(`Obrigado por dares boost ao servidor! A tua ajuda é apreciada.`)
        // member.send({embeds: [Welcome]});
    }
}