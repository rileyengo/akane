module.exports.Questions = "Trivia by Americhino"
   module.exports.QText   = QSelect(); // The questions
   module.exports.QAnswer = module.exports.QText; // The correct answers
	function QSelect() {
	const Questions = 
   // OK, set the questions
   "0" = "What is the capital of Norway?";
   "1" = "What is the capital of Hungary?";
   "2" = "What is the capital of Cyprus?";
   "3" = "What is the capital of Libya?";
   "4" = "What is the capital of Kenya?";
   "5" = "What is the capital of Nigeria?";
   "6" = "What is the capital of Columbia?";
   "7" = "What is the capital of Barbados?";
   "8" = "What is the capital of Australia?";
   "9" = "What is the capital of Pakistan?";
   "10" = "What is the capital of Spain?";
   "11" = "What is the capital of England?";
   "12" = "What is the capital of Ireland?";
   "13" = "What is the capital of Sweden?";
   "14" = "What is the capital of Denmark?";
   "15" = "What is the capital of Poland?";
   "16" = "What is the capital of Italy?";
   "17" = "What is the capital of India?";
   "18" = "What is the capital of Canada?";
   "19" = "What is the capital of Portugal?";
	};
	const Answers = {
   // Set the correct answers
   "0" = "Oslo";
   "1" = "Budapest";
   "2" = "Nicosia";
   "3" = "Tripoli";
   "4" = "Nairobi";
   "5" = "Lagos";
   "6" = "Bogota";
   "7" = "Bridgetown";
   "8" = "Canberra";
   "9" = "Islamabad";
   "10" = "Madrid"; // No cheating!
   "11" = "London";
   "12" = "Dublin";
   "13" = "Stockholm";
   "14" = "Copenhagen";
   "15" = "Warsaw";
   "16" = "Rome";
   "17" = "New Delhi";
   "18" = "Ottawa";
   "19" = "Lisbon";
		
	}
	const question = Questions[Math.floor(Math.random() * Questions.length)]
	const answer = Question
}
