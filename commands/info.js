exports.run = (Discord, client, message, args) => {
		const embed = new Discord.RichEmbed()
		.setTitle(client.user.username)
		.setColor(0x00AE86)
		.setFooter(message.author.tag, message.author.displayAvatarURL)
		.setThumbnail(client.user.avatarURL)
		.setDescription("A small multipurpose Discord bot maintained by [Americhino](https://github.com/Americhino).")
		.setTimestamp()
		message.channel.send({embed});
}
