if ($(message.mentions).exists()) {
	module.exports.member = message.mentions.members.first();
	module.exports.embed = new Discord.RichEmbed()
		.setTitle(member.user.tag)
		.setAuthor(member.user.username, member.user.displayAvatarURL)
		.setColor(0x00AE86)
		.setFooter(member.user.username, member.user.displayAvatarURL)
		// .setImage("http://i.imgur.com/yVpymuV.png")
		.setThumbnail(member.user.avatarURL)
		.setTimestamp()
		.addField("Nickname",
			member.displayName)
		.addField("User ID",
			member.id)
		.addField("Joined Guild",
			member.joinedAt)
		.addField("Created at",
			member.user.createdAt)
		.addField("Status",
			member.presence.status)
		.addField("Bot",
			member.user.bot)
		.addField("Presence",
			member.user.presence.name)
} else {
	module.exports.embed = new Discord.RichEmbed()
		.setTitle(message.author.tag)
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		.setColor(0x00AE86)
		.setFooter(message.author.username, message.author.displayAvatarURL)
		// .setImage("http://i.imgur.com/yVpymuV.png")
		.setThumbnail(member.user.avatarURL)
		.setTimestamp()
		.addField("Nickname",
			message.author.displayName)
		.addField("User ID",
			message.author.id)
		.addField("Joined Guild",
			message.author.joinedAt)
		.addField("Created at",
			message.author.createdAt)
		.addField("Status",
			message.author.presence.status)
		.addField("Bot",
			message.author.bot)
		.addField("Presence",
			message.author.presence.name)
}
