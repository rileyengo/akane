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

client.login(process.env.NDgzODM5ODEwMDU4ODQ2MjA4.Dmbq5A.r6qg_aKYbS3S8YBUIXAT6DASdaw);//where BOT_TOKEN is the token of our bot