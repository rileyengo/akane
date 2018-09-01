const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	client.user.setPresence({ game: { name: 'Ranma 1/2', type: 1 } });
});
client.on('message', message => {
	const prefix = '!';
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const responseObject = {
		"ayy": "LMAOO",
		"lmao": "AYY",
		"no u": "NO U"
	};
    if (command === 'ping') {
        message.reply('pong');
    }
    if (command === 'shampoo') {
        message.reply('我爱你! Wo ai ni!');
    }
    if (command === 'quote') {
		const randomQuote = require("./quotes.js");
		message.channel.send(randomQuote.quote)
    }
    if (message.content === 'ayy') {
        message.channel.send('LMAOO'); 
    }
	if (command === 'fruits') {
		message.react('🍎');
		message.react('🍊');
		message.react('🍇');
	}
	if (command === 'hug') {
    	message.reply('love you, bae! <3');
		message.react('✨')
		message.react('💖')
		message.react('💕')
	}
	if (command === `music`) {
		require("./music/default-volume.js");
		require("./music/max-length.js");
		require("./music/max-songs.js");
		require("./music/pause.js");
		require("./music/play.js");
		require("./music/queue.js");
		require("./music/stop.js");
		require("./music/skip.js");
	}
	if (command === `server`) {
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
    	// message.channel.send(`Server name: ${message.guild.name}#${message.guild.discriminator}\nTotal members: ${message.guild.memberCount}`);
	}
	if (command === `user`) {
		let member = message.mentions.members.first();
		const embed = new Discord.RichEmbed()
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
	if (command === "kick") {
		let member = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		member.kick(reason);
		message.reply('Successfully kicked ${user.tag}!');
	} /*
	if (command === "say"){
		let text = args.slice(1).join(" ");
		message.delete();
		message.channel.send(text);
	}
	if (command === "addrole"){
		let role = message.guild.roles.find("name", "Team Mystic");
		let member = message.mentions.members.first();
		member.addRole(role).catch(console.error);
	}
	if (command === "removerole"){
		let role = message.guild.roles.find("name", "Team Mystic");
		let member = message.mentions.members.first();
		member.removeRole(role).catch(console.error);
	} 
	if (command === "ban") {
		let member = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		member.ban(reason);
	} */
	if (command === 'avatar') {
    	message.reply(message.author.avatarURL);
  	} 
	if (responseObject[message.content]) {
		message.channel.send(responseObject[message.content]);
	} 
	/* SEE BETA BRANCH FOR THIS ONE
	if (command === 'trivia') {
		const questions = ["What is the name of BTS' third Love Yourself album?", "http://yahoo.com", "http://msn.com", "http://apple.com"];
		const question = questions[Math.floor(Math.random() * favorites.length)];
		message.channel.send(questions)
			.then(() => {
			message.channel.awaitMessages(response => response.content === 'test', {
				max: 1,
				time: 30000,
				errors: ['time'],
			})
				.then((collected) => {
				message.channel.send(`The collected message was: ${collected.first().content}`);
			})
				.catch(() => {
				message.channel.send('There was no collected message that passed the filter within the time limit!');
			});
		});
	} 
  if (message.content.startsWith('!avatar ')) {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
   const user = message.mentions.users.first();
       if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
             if (member) {
              message.reply(message.user.avatarURL);
             }
      }
  } */
	// !info
	if (command === 'info') {
		message.channel.send({embed: {
		color: 0xe24b4b,
		author: {
		  name: client.user.username,
		  icon_url: client.user.avatarURL
		},
		title: "Akane",
		url: "https://github.com/Americhino/akane",
		description: "A smol multipurpose bot!",
		fields: [{
			name: "About Akane",
			value: "A small multipurpose bot maintained by [Americhino](https://github.com/Americhino)."
		  }
		],
		timestamp: new Date(),
		footer: {
		  icon_url: client.user.avatarURL,
		  text: "© 2018 Americhino"
		}
	  }
	});
	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); // sorry to disappoint y'all
