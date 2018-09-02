exports.run = (client, message, args) => {
	const questions = require("./questions.js");
    message.reply('Trivia time! What is the capital of ' + questions.question + '? \n You have 15 seconds to answer.')
		.then(() => {
		message.channel.awaitMessages(response => response.content === questions.answer, {
			max: 1,
			time: 15000,
			errors: ['time'],
		})
			.then((collected) => {
			message.channel.send('✅ Correct! The answer was ' + questions.answer + '.');
		})
		.catch(() => {
			message.channel.send('❌ Wrong! The correct answer was ' + questions.answer + '.');
		});
	});
}
