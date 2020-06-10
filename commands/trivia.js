exports.run = (Discord, client, message, args) => {
	const questions = require("./trivia/questions.js");
	const question = questions.Questions[Math.floor(Math.random() * Math.floor(questions.Questions.length))];
	const answer = questions.Answers[question]
	const embed = new Discord.RichEmbed()
		.setTitle(client.user.tag)
		.setAuthor(client.user.username, client.user.displayAvatarURL)
		.setColor(16272203)
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp()
		.setDescription('Trivia time! What is the capital of' + question + '? \n You have 15 seconds to answer.')
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
