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
	let commandFile = require(`./commands/${command}.js`);
	commandFile.run(Discord, client, message, args);
});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); // sorry to disappoint y'all
