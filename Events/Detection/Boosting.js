const { GuildMember, MessageEmbed, MessageAttachment, WebhookClient } = require("discord.js");
const Canvas = require("canvas");

module.exports = {
    name: "guildMemberUpdate",
    /**
     * 
     * @param {GuildMember} oldMember 
     * @param {GuildMember} newMember 
     */
    async execute(oldMember, newMember) {
        const { guild } = newMember;

        if(!oldMember.premiumSince && newMember.premiumSince) {

            const Welcomer = new WebhookClient({
                id: "953433018557685820",
                token: "ZhOBiunPfHHhFQ7fYessWTcF4Biz4M-inGH-NGk1_J8ZOHnUitAg_VQTU2pK2za32lus",
    
            });

            const Thankyou = new MessageEmbed()
            .setColor("PURPLE")
            .setAuthor({name: "SERVER IMPULSIONADO!", iconURL: "https://support.sudomemo.net/wp-content/uploads/2020/12/Reason-4-Nitro-Booster-Exclusives-970x546.png"})

            const canvas = Canvas.createCanvas(800, 250);
            const ctx = canvas.getContext("2d");

            const background = await Canvas.loadImage("./Structures/Images/boostimg.png");
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = "#9B59B6";
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            ctx.font = "38px cursive";
            ctx.textAlign = "center";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(newMember.displayName, canvas.width / 2, canvas.height / 1.2);

            const avatar = await Canvas.loadImage(newMember.user.displayAvatarURL({format: "jpg"}));
            
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(avatar, 25, 25, 200, 200);

            const attachment = new MessageAttachment(canvas.toBuffer(), "boostimg.png");

            Thankyou.setDescription(`Obrigado por impulsionares o server!`)
            Thankyou.setImage(`attachment://booster.png`);

            await Welcomer.send({embeds: [Thankyou], files: [attachment]}).catch((err) => console.log(err));
            
            Thankyou.setDescription(`Obrigado por dares boost ao servidor! A tua ajuda é apreciada.`)
            newMember.send({embeds: [Thankyou]});
        }
    }
}