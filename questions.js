module.exports.Questions = "Trivia by Americhino"
   module.exports.QText   = QSelect(); // The questions
   module.exports.QAnswer = module.exports.QText; // The correct answers
function QSelect() {
	const Options = new Array("norway", "hungary", "cyprus", "libya", "kenya", "nigeria", "columbia", "barbados", "australia", "pakistan", "spain", "england", "ireland", "sweden", "denmark", "poland", "italy", "india", "canada", "portugal",);
	const Questions = {
   // OK, set the questions
   "norway": "What is the capital of Norway?",
   "hungary": "What is the capital of Hungary?",
   "cyprus": "What is the capital of Cyprus?",
   "libya": "What is the capital of Libya?",
   "kenya": "What is the capital of Kenya?",
   "nigeria": "What is the capital of Nigeria?",
   "columbia": "What is the capital of Columbia?",
   "barbados": "What is the capital of Barbados?",
   "australia": "What is the capital of Australia?",
   "pakistan": "What is the capital of Pakistan?",
   "spain": "What is the capital of Spain?",
   "england": "What is the capital of England?",
   "ireland": "What is the capital of Ireland?",
   "sweden": "What is the capital of Sweden?",
   "denmark": "What is the capital of Denmark?",
   "poland": "What is the capital of Poland?",
   "italy": "What is the capital of Italy?",
   "india": "What is the capital of India?",
   "canada": "What is the capital of Canada?",
   "portugal": "What is the capital of Portugal?",
	};
	const Answers = {
   // Set the correct answers
   "norway": "Oslo",
   "hungary": "Budapest",
   "cyprus": "Nicosia",
   "libya": "Tripoli",
   "kenya": "Nairobi",
   "nigeria": "Lagos",
   "columbia": "Bogota",
   "barbados": "Bridgetown",
   "australia": "Canberra",
   "pakistan": "Islamabad",
   "spain": "Madrid", // No cheating!
   "england" : "London",
   "ireland": "Dublin",
   "sweden": "Stockholm",
   "denmark": "Copenhagen",
   "poland": "Warsaw",
   "italy": "Rome",
   "india": "New Delhi",
   "canada": "Ottawa",
   "portugal": "Lisbon",
		
	}
	module.exports.question = Questions[Math.floor(Math.random() * Options.length)]
	module.exports.answer = Answers[module.exports.question]
}
