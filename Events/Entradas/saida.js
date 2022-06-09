const { MessageEmbed, GuildMember, Client } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
	 * @param {Client} client
     */
    execute(member, client) {
        const { user, guild } = member;

        client.channels.cache.get('978584724597514270').setName(`🌍・Membros: ${guild.memberCount}`);

        const Bye = new MessageEmbed()
        .setColor("RED")
        .setAuthor({ name: user.tag, iconURL: user.avatarURL({dynamic: true, size: 512})})
        .setDescription(`${member} saiu do servidor!`)

        client.channels.fetch('978584751810162708').then(channel => channel.send({embeds: [Bye]}));
    }
}
