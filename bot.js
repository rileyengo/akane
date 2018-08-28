const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!ping') {
        message.reply('pong');
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDgzODM5ODEwMDU4ODQ2MjA4.Dmdevg.gtEB5cW_hzZP1CcH4Fn38e46HjY);//where BOT_TOKEN is the token of our bot