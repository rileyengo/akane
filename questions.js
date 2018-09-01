module.exports.Questions = "Trivia by Americhino"
   module.exports.QText   = new Array(1); // The questions
   module.exports.QAnswer = new Array(1); // The correct answers
   module.exports.QSelect = QSelect

   // Umm try to make QSelect a thing
   function QSelect() { Math.floor(Math.random() * module.exports.QText.length) }
   // OK, set the questions
   this.QText[0] = "What is the capital of Norway?";
   this.QText[1] = "What is the capital of Hungary?";
   this.QText[2] = "What is the capital of Cyprus?";
   this.QText[3] = "What is the capital of Libya?";
   this.QText[4] = "What is the capital of Kenya?";
   this.QText[5] = "What is the capital of Nigeria?";
   this.QText[6] = "What is the capital of Columbia?";
   this.QText[7] = "What is the capital of Barbados?";
   this.QText[8] = "What is the capital of Australia?";
   this.QText[9] = "What is the capital of Pakistan?";
   this.QText[10] = "What is the capital of Spain?";
   this.QText[11] = "What is the capital of England?";
   this.QText[12] = "What is the capital of Ireland?";
   this.QText[13] = "What is the capital of Sweden?";
   this.QText[14] = "What is the capital of Denmark?";
   this.QText[15] = "What is the capital of Poland?";
   this.QText[16] = "What is the capital of Italy?";
   this.QText[17] = "What is the capital of India?";
   this.QText[18] = "What is the capital of Canada"?;
   this.QText[19] = "What is the capital of Portugal?";
   // Set the correct answers
   this.QAnswer[0] = "Oslo";
   this.QAnswer[1] = "Budapest";
   this.QAnswer[2] = "Nicosia";
   this.QAnswer[3] = "Tripoli";
   this.QAnswer[4] = "Nairobi";
   this.QAnswer[5] = "Lagos";
   this.QAnswer[6] = "Bogota";
   this.QAnswer[7] = "Bridgetown";
   this.QAnswer[8] = "Canberra";
   this.QAnswer[9] = "Islamabad";
   this.QAnswer[10] = "Madrid"; // No cheating!
   this.QAnswer[11] = "London";
   this.QAnswer[12] = "Dublin";
   this.QAnswer[13] = "Stockholm";
   this.QAnswer[14] = "Copenhagen";
   this.QAnswer[15] = "Warsaw";
   this.QAnswer[16] = "Rome";
   this.QAnswer[17] = "New Delhi";
   this.QAnswer[18] = "Canada";
   this.QAnswer[19] = "Portugal";
