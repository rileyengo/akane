const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
	client.user.setPresence({ game: { name: 'Ranma 1/2', type: 0 } });
	// client.setPlayingGame('Ranma, Ranma, don\'t make me wild like you!');
	// client.user.setActivity({game: {name: "Ranma, Ranma, don't make me wild like you!", type: 0}});
});

 

client.on('message', message => {
	const prefix = '!';
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
    if (command === 'ping') {
        message.reply('pong');
    }
    if (command === 'shampoo') {
        message.reply('我爱你! Wo ai ni!');
    }
    if (command === 'loveyourself') {
	const loveYourself = ['You can\'t stop me loving myself!', 'It\'s all fAKE loVE', 'It\'s in our DNA.']
        message.channel.send(loveYourself);
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
	if (command === `server`) {
    	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	if (command === `user-info`) {
    	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	if (command === "kick") {
		let member = message.mentions.members.first();
		let reason = args.slice(1).join(" ");
		member.kick(reason);
	}
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
	}
	if (command === 'avatar') {
    	message.reply(message.author.avatarURL);
  	}
	if (command === 'trivia') {
		const QText = require("./questions.js");
		const QAnswer = require("./questions.js");
    	message.reply('Trivia time! ' + questions.QText + '\n You have 15 seconds to answer.')
			.then(() => {
			message.channel.awaitMessages(response => response.content === questions.QAnswer, {
				max: 1,
				time: 15000,
				errors: ['time'],
			})
				.then((collected) => {
				message.channel.send(`Correct! The answer was ${collected.first().content}.`);
			})
			.catch(() => {
				message.channel.send('Wrong! The correct answer was ' + QAnswer + '.');
			});
		});
  	} /*
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
