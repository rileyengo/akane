exports.run = (Discord, client, message, args) => {
	const questions = require("./trivia/questions.js");
	const question = questions.Questions[Math.floor(Math.random() * Math.floor(questions.Questions.length))];
	const answer = questions.Answers[question]
	const embed = new Discord.RichEmbed()
		.setTitle("World Capitals")
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		.setColor(16272203)
		.setTimestamp()
		.setDescription('**What is the capital of' + question + '?** \n You have 15 seconds to answer.')
    message.channel.send({embed})
		.then(() => {
		message.channel.awaitMessages(response => response.content === answer, {
			max: 1,
			time: 15000,
			errors: ['time'],
		})
			.then((collected) => {
			message.channel.send('✅ Correct! The answer was ' + answer + '.');
		})
		.catch(() => {
			message.channel.send('❌ Wrong! The correct answer was ' + answer + '.');
		});
	}); 
}
