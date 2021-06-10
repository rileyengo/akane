exports.run = (Discord, client, message, args) => {
	client.on('message', message => {
		if (command === 'avatar') {
			if (!message.mentions.users.size) {
				return message.channel.send(`<${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
			}
			const taggedUser = message.mentions.users.first(); 
		}
	});
}
