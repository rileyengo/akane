exports.run = (client, message, args) => {
	let member = message.mentions.members.first();
	const embed = new Discord.RichEmbed()
		.setTitle(member.user.tag)
		.setAuthor(member.user.username, member.user.displayAvatarURL)
		.setColor(0x00AE86)
		.setImage(member.user.avatarURL)
		message.channel.send({embed});
}
