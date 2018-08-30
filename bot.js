const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    if (message.content === '!ping') {
        message.reply('pong');
    }
    if (message.content === '!shampoo') {
        message.reply('我爱你! Wo ai ni!');
    }
    if (message.content === '!loveyourself') {
        message.reply('You can\'t stop me loving myself!');
    }
    if (message.content === 'ayy') {
        message.reply('lmao'); 
    }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); // sorry to disappoint y'all
