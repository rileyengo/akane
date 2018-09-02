 exports.run = (client, message, args) => {
	const randomQuote = require("./quotes.js");
	message.channel.send(randomQuote.quote)
}
