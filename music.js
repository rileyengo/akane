const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "<auth_token>" // Recommended to load from json file.
 
Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});
 
music(Bot);
Bot.login(process.env.BOT_TOKEN);
