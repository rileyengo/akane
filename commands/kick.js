exports.run = (client, message, [mention, ...reason]) => {
const modRole = message.guild.me.hasPermission("KICK_MEMBERS");
	if (!modRole)
	return console.log("You cannot kick users.")
	return message.reply("You cannot kick users.");

	if (message.mentions.members.size === 0)
	return message.reply("Please mention a user to kick");
	
	const kickMember = message.mentions.members.first();

	kickMember.kick(reason.join(" ")).then(member => {
	message.reply(`${member.user.username} was succesfully kicked.`);
	});
};
