exports.run = (Discord, command, client, message, args) => {
		const embed = new Discord.MessageEmbed()
		.setTitle(client.user.username)
		.setColor(0x00AE86)
		.setFooter(message.author.tag, message.author.displayAvatarURL())
		.setThumbnail(client.user.avatarURL())
		.setDescription("A small multipurpose Discord bot maintained by [Americhino](https://github.com/Americhino). \n Named after [**Akane Tendo**](https://ranma.wikia.com/wiki/Akane_Tendo) from the 90s anime **Ranma 1/2**.")
		.setTimestamp()
		message.channel.send({embed});
}
