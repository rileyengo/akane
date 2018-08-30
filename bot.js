const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    console.log('I am ready!'); /*
	client.user.setActivity('Ranma 1/2', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error); */
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
 // If the message content starts with "!kick"
 if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('that user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('you didn\'t mention the user to kick!');
    }
  }
   // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'Misbehavior',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('you didn\'t mention the user to ban!');
    }
  }
  // If message is '!avatar'
  if (message.content === '!avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  } /*
  if (message.content.startsWith('!avatar ')) {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
   const user = message.mentions.users.first();
       if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
             if (member) {
              message.reply(message.user.avatarURL);
             }
      }
  } */
});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); // sorry to disappoint y'all
