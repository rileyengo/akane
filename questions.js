/* @submodule		Akane/Questions
 * @description		Collection of questions for Akane's !trivia command.
 * @todo			Make it switch questions every time the user does !trivia
*/
module.exports.Questions = "World Capitals Trivia by Americhino"
	module.exports.QText   = QSelect(); // The questions
	module.exports.QAnswer = module.exports.QText; // The correct answers
function QSelect() {
	const Questions = new Array("Norway", "Hungary", "Cyprus", "Libya", "Kenya", "Nigeria", "Columbia", "Barbados", "Australia", "Pakistan", "Spain", "England", "Ireland", "Sweden", "Denmark", "Poland", "Italy", "India", "Canada", "Portugal", "South Korea", "Japan", "China", "Indonesia", "France", "Serbia",);
	const Answers = {
	"Norway": "Oslo",
	"Hungary": "Budapest",
	"Cyprus": "Nicosia",
	"Libya": "Tripoli",
	"Kenya": "Nairobi",
	"Nigeria": "Lagos",
	"Columbia": "Bogota",
	"Barbados": "Bridgetown",
	"Australia": "Canberra",
	"Pakistan": "Islamabad",
	"Spain": "Madrid", // No cheating!
	"England" : "London",
	"Ireland": "Dublin",
	"Sweden": "Stockholm",
	"Denmark": "Copenhagen",
	"Poland": "Warsaw",
	"Italy": "Rome",
	"India": "New Delhi",
	"Canada": "Ottawa",
	"Portugal": "Lisbon",
	"South Korea": "Seoul",
	"Japan": "Tokyo",
	"China": "Beijing",
	"Indonesia": "Jakarta",
	"France": "Paris",
	"Serbia": "Belgrade",
	"Russia": "Moscow",
	"Ukraine": "Kiev",
	}
	module.exports.question = Questions[Math.floor(Math.random() * Math.floor(Math.floor(Math.floor(Math.floor(Questions.length)))))]
	module.exports.answer = Answers[module.exports.question]
}
