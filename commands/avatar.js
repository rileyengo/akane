exports.run = (Discord, command, client, message, args) => {
		let member = message.mentions.members.first();
		const avatar = member.user.displayAvatarURL() || message.author.displayAvatarURL() ;
		const embed = new Discord.MessageEmbed()
			.setTitle(member.user.tag)
			.setAuthor(member.user.username, message.author.displayAvatarURL())
			.setColor(0x00AE86)
		message.channel.send({files: [avatar], embed: {embed}});
}
