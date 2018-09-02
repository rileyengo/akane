exports.run = (client, message, args) => {
let member = message.mentions.members.first();
	const embed = new Discord.RichEmbed()
		.setTitle(message.guild.name)
		.setAuthor(message.guild.name, message.guild.iconURL)
		.setColor(0x00AE86)
		.setFooter(message.author.tag, message.author.displayAvatarURL)
		// .setImage("http://i.imgur.com/yVpymuV.png")
		.setThumbnail(message.guild.iconURL)
		.setTimestamp()
		.addField("Owner",
			message.guild.owner.toString())
		.addField("ID",
			message.guild.id)
		.addField("Region",
			message.guild.region)
		.addField("Created at",
			message.guild.createdAt)
		.addField("Channels",
			message.guild.channels)
		.addField("Users",
			message.guild.memberCount)
		.addField("Roles",
			message.guild.roles);
		message.channel.send({embed});
}
