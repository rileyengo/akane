 exports.run = (client, message, args) => {
	const randomQuote = require("./data/quotes.js");
	const embed = {
  	'title': "**Random Quote**",
  	'description': '```js\n\"' + randomQuote.quote + '```',
  	'color': 5301186,
  	'timestamp': '2018-09-02T22:48:28.432Z',
  	'footer': {
    	'icon_url': message.author.displayAvatarURL,
    	'text': message.author.tag
  	}
};
	message.channel.send(embed)
}
