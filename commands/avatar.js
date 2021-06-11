exports.run = (Discord, command, client, message, args) => {
		let member = message.mentions.users.first();
		const avatar = message.author.displayAvatarURL()
		const embed = new Discord.MessageEmbed()
			.setTitle(member.user.tag)
			.setAuthor(member.user.username, member.user.displayAvatarURL())
			.setColor(0x00AE86)
		if (!message.mentions.users.size) {
			return message.reply('mention a user pls');
		}
			message.channel.send({files: [avatar], embed: {embed}});
}
