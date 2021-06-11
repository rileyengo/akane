exports.run = (Discord, client, message, args) => {
		let member = message.mentions.members.first() || message.author;
		const embed = new Discord.MessageEmbed()
			.setTitle(member.user.tag)
			.setAuthor(member.user.username, member.user.displayAvatarURL())
			.setColor(0x00AE86)
			.setFooter(message.author.tag, message.author.displayAvatarURL())
			// .setImage("http://i.imgur.com/yVpymuV.png")
			.setThumbnail(member.user.avatarURL())
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
				member.user.bot);
			message.channel.send({embed});
	}
