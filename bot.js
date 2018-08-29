const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
				var randomLoveYourself = 'They call me artist, but they can\'t all me idol :)', 'It\'s in our DNA ;)', 'fAKE loVE';
    if (message.content === '!ping') {
        message.reply('pong');
    }
    if (message.content === '!shampoo') {
        message.reply('我爱你！ Wo ai ni!');
    }
    if (message.content === '!loveyourself') {
        message.reply(randomLoveYourself);
    }
    if (['shampoo', 'ukyo', 'kodachi', 'kuno'].indexOf(message.content) === -1) {
        message.reply('Hmph.'); 
    }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); // sorry to disappoint y'all
