exports.run = (Discord, client, message, args) => {
const randomFruits = new Array("🍎", "🍊", "🍇", "🍑", "🍊", "🍓", "🍍", "🍉", "🍌", "🍒", "🍋", "🍏", "🍐",)
const fruit = randomFruits[Math.floor(Math.random() * Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(randomFruits.length))))))))))];
	message.react(fruit);
	message.react(fruit);
	message.react(fruit);
}
