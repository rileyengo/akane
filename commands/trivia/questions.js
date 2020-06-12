/* @submodule		Akane/Questions
 * @description		Collection of questions for Akane's !trivia command.
 * @todo			Make it switch questions every time the user does !trivia
*/
module.exports.Questions = "World Capitals Trivia by Americhino"
	module.exports.QText   = QSelect(); // The questions
	module.exports.QAnswer = module.exports.QText; // The correct answers
function QSelect() {
	module.exports.Questions = new Array("Norway", "Hungary", "Cyprus", "Libya", "Kenya", "Nigeria", "Columbia", "Barbados", "Australia", "Pakistan", "Spain", "United Kingdom", "Ireland", "Sweden", "Denmark", "Poland", "Italy", "India", "Canada", "Portugal", "South Korea", "Japan", "China", "Indonesia", "France", "Serbia", "Russia", "Ukraine", "United States", "Thailand", "Philippines", "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "Georgia", "Iran", "Iraq", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Papua New Guinea", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Turkey", "Turkmenistan", "United Arab Emirates (UAE)", "Uzbekistan", "Vietnam", "Yemen",);
	module.exports.Answers = {
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
	"United Kingdom" : "London",
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
	"United States": "Washington, D.C.",
	"Thailand": "Bangkok",
	"Philippines": "Manila",
	"Afghanistan": "Kabul",
	"Armenia": "Yerevan",
	"Azerbaijan": "Baku",
	"Bangladesh": "Dhaka",
	"Bhutan": "Thimpu",
	"Brunei": "Bandar Seri Begawan",
	"Cambodia": "Phnom Penh",
	"East Timor": "Dili",
	"Georgia": "Tbilisi",
	"Iran": "Tehran",
	"Iraq": "Baghdad",
	"Israel": "Jerusalem",
	"Jordan": "Amman",
	"Kazakhstan": "Nur-Sultan",
	"Kuwait": "Kuwait City",
	"Kyrgyzstan": "Bishkek",
	"Laos": "Vientiane",
	"Lebanon": "Beirut",
	"Malaysia": "Kuala Lumpur",
	"Maldives": "Male",
	"Mongolia": "Ulaanbataar",
	"Myanmar": "Naypiydaw",
	"Nepal": "Kathmandu",
	"North Korea": "Pyongyang", // ahahhhah pog
	"Oman": "Muscat",
	"Papua New Guinea": "Port Moresby",
	"Qatar": "Doha",
	"Saudi Arabia": "Riyadh",
	"Singapore": "Singapore",
	"Sri Lanka": "Sri Jayawardenepura Kotte", // rip in pieces non-geography nerds and non-sri lankans
	"Syria": "Damascus",
	"Taiwan": "Taipei", // urg don't sue me pro-china people srry
	"Tajikistan": "Dushanbe",
	"Turkey": "Ankara",
	"Turkmenistan": "Ashgabat",
	"United Arab Emirates (UAE)": "Abu Dhabi",
	"Uzbekistan": "Tashkent",
	"Vietnam": "Hanoi",
	"Yemen": "Sana'a",
	}
}
