exports.run = (Discord, client, message, args) => {
	const questions = require("./trivia/questions.js");
	const question = questions.Questions[Math.floor(Math.random() * Math.floor(questions.Questions.length))];
	const answer = questions.Answers[question]
	let member = message.mentions.members.first();
	const embed = new Discord.RichEmbed()
		.setTitle(member.user.tag)
		.setAuthor(member.user.username, member.user.displayAvatarURL)
		.setColor(16272203)
		.setFooter(member.user.username, member.user.displayAvatarURL)
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
