exports.run = (Discord, client, message, args) => {
	const questions = require("./trivia/questions.js");
	const question = questions.Questions[Math.floor(Math.random() * Math.floor(questions.Questions.length))];
	const answer = questions.Answers[question]
	const embed = new Discord.MessageEmbed()
		.setTitle("🗺 World Capitals")
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setColor(16272203)
		.setTimestamp()
		.setDescription('📍 **What is the capital of ' + question + '?** \n You have 15 seconds to answer, **case-sensitive**.')
    message.channel.send({embed})
		.then(() => {
		message.channel.awaitMessages(response => response.content === answer, {
			max: 1,
			time: 15000,
			errors: ['time'],
		})
		.then((collected) => {
			const embed = new Discord.MessageEmbed()
				.setTitle("✅ Correct!")
				.setAuthor(message.author.username, message.author.displayAvatarURL())
				.setColor(6734080)
				.setTimestamp()
				.setFooter(message.author.username, message.author.displayAvatarURL())
				.setDescription('The answer was **' + answer + '**.')
			message.channel.send({embed})
		})
		.catch(() => {
			const embed = new Discord.MessageEmbed()
				.setTitle("❌ Incorrect!")
				.setAuthor(message.author.username, message.author.displayAvatarURL())
				.setColor(13632027)
				.setTimestamp()
				.setFooter(message.author.username, message.author.displayAvatarURL())
				.setDescription('The answer was **' + answer + '**.')
			message.channel.send({embed})
		});
	}); 
}
