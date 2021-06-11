exports.run = (Discord, client, message, args) => {
	const randomQuote = require("./data/quotes.js");
	const embed = new Discord.MessageEmbed()
		.setTitle("**Random Quote**")
  		.setDescription('```js\n\"' + randomQuote.quote + '```')
	  	.setColor(5301186)
  		.setTimestamp()
	  	.setFooter(message.author.displayAvatarURL(), message.author.tag)
		message.channel.send({embed});
}
