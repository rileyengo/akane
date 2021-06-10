const Discord = require('discord.js');
const client = new Discord.Client();
require("./music.js"); // sorry the music doesn't work
client.on('ready', () => { 
	client.user.setActivity('Ranma ½! ★', { type: 'WATCHING' }); 
//	client.user.setActivity(`with P-chan`);
});
client.on('message', message => {
	const prefix = '!';
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const responseObject = {
		// misc.
		"ayy": "LMAOO",
		"lmao": "AYY",
		// no u
		"no u": "NO U",
		"No u": "no U",
		"NO U": "no u lol",
		// pls
		"pls": "beg more",
		"plz": "beg more",
		// yes
		"yes": "nope",
		"Yes": "Nope",
		"yEs": "nOpE",
		"yeS": "nOPe",
		"yES": "nOPE",
		"YES": "NOPE",
		// no
		"no": "yeah",
		"no": "yeah",
		"No": "Yeah",
		"nO": "yEAh",
		"NO": "YEAH",
		// i-
		"i-": "Bitches be like I- Wow- I- Bitch what? Speak. Spit it the fuck out. What do you wanna say? I’m listening. We’re all waiting, and you’re doing nothing. This is nonsense, you can’t even use words anymore. Go the hell outside for once damn, goddamn, get a job or something. Idiot.",
		"I-": "Bitches be like I- Wow- I- Bitch what? Speak. Spit it the fuck out. What do you wanna say? I’m listening. We’re all waiting, and you’re doing nothing. This is nonsense, you can’t even use words anymore. Go the hell outside for once damn, goddamn, get a job or something. Idiot.",
	}; 
	if (responseObject[message.content]) {
		message.channel.send(responseObject[message.content]);
	}
	if (message.author.bot) return;
	if (message.content.indexOf(prefix) !== 0) return;
	try {
		if (command === 'info' || command === 'user' || command === 'server' || command === 'quote' || command === 'avatar' || command === 'rolelist' || command === 'addrole') {
				if (command === 'server') {
				let member = message.mentions.members.first();
				const embed = new Discord.MessageEmbed()
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
			if (command === 'user') {
				let member = message.mentions.members.first();
				const embed = new Discord.MessageEmbed()
					.setTitle(member.user.tag)
					.setAuthor(member.user.username, member.user.displayAvatarURL)
					.setColor(0x00AE86)
					.setFooter(message.author.tag, message.author.displayAvatarURL)
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
						member.user.bot);
					message.channel.send({embed});
			}
			if (command === 'info') {
				const embed = new Discord.MessageEmbed()
				.setTitle(client.user.username)
				.setColor(0x00AE86)
				.setFooter(message.author.tag, message.author.displayAvatarURL)
				.setThumbnail(client.user.avatarURL)
				.setDescription("A small multipurpose Discord bot maintained by [Americhino](https://github.com/Americhino). \n Named after [**Akane Tendo**](https://ranma.wikia.com/wiki/Akane_Tendo) from the 90s anime **Ranma 1/2**.")
				.addField("Created on", "August 28, 2018", true)
				.addField("Creator", "hyperionbalance#8580", true)
				.addField("Library", "discord.js", true)
				.setTimestamp()
				message.channel.send({embed});
			}
			if (command === 'quote') {
				const randomQuote = require("./commands/data/quotes.js");
				const quote = randomQuote.quotes[Math.floor(Math.random() * randomQuote.quotes.length)];
				const embed = new Discord.MessageEmbed()
					.setTitle('**Random Quote**')
					.setDescription('```js\n' + quote + '```')
					.setColor(5301186)
					.setTimestamp()
					.setFooter(message.author.tag, message.author.displayAvatarURL)
				message.channel.send({embed});
			}
			if (command === 'addrole') {
				if (message.mentions.length) {
					let member = message.mentions.members.first();
					let roleName = args[1];
					member.addRole(roleName);
				} else {
					message.channel.send('Please mention a user! \n The syntax is `!addrole <user> <role>`.');
				}
			}
			if (command == `rolelist`) {
				let selectedRole = message.guild.roles.find("name", args[1]);
				const embed = new Discord.MessageEmbed()
				.setTitle('Users with the ' + selectedRole + ' role:')
				.setDescription(selectedRole.members.map(m=>m.user.tag).join('\n'));
				message.channel.send({embed});    
			}
			if (command == `avatar`) {
				let member = message.mentions.members.first();
				const embed = new Discord.MessageEmbed()
					.setTitle(member.user.tag)
					.setAuthor(member.user.username, member.user.displayAvatarURL)
					.setColor(0x00AE86)
					.setImage(member.user.avatarURL)
					message.channel.send({embed});
			}
		} else {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(Discord, client, message, args);
		}
	} catch (err) {
		console.error(err);
	}
});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); // sorry to disappoint y'all
