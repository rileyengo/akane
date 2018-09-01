
module.exports.embed = new Discord.RichEmbed();
let member = message.mentions.members.first();
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
