exports.run = (client, message, args) => {
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
