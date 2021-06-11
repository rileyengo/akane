exports.run = (Discord, client, message, args) => {
	const randomQuote = require("./data/quotes.js");
	const embed = new Discord.MessageEmbed()
		.setTitle("**Random Quote**")
  		.setDescription('```js\n\"' + randomQuote.quote + '```')
	  	.setColor(5301186)
  		.setTimestamp()
	  	.setFooter(message.author.tag, message.author.displayAvatarURL())
		message.channel.send({embed});
}
