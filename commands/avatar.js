exports.run = (Discord, client, message, args) => {
		let member = message.mentions.users.first() || message.author;
		const embed = new Discord.MessageEmbed()
			// .setTitle(member.user.tag)
			// .setImage(member.user.displayAvatarURL()) // I KNOW THIS IS THE CRUCIAL PART JEEZ
			.setAuthor(member.user.username, message.author.displayAvatarURL())
			.setColor(0x00AE86)
		message.channel.send({embed});
}
