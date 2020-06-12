exports.run = (Discord, client, message, args, command) => {
    client.on('messageUpdate', (oldMessage, newMessage) => {

        if (oldMessage.content === 'Pinging...') {
    
            var oldMessageTimestamp = oldMessage.createdTimestamp;
            var newMessageTimestamp = newMessage.editedTimestamp;
    
            newMessage.edit(`🏓 Pong!\nPonged back the ping in ${Math.floor(newMessageTimestamp - oldMessageTimestamp)} milliseconds!`);
        }
    });
    
    client.on('message', message => {
    
        if (command === `ping`) {
    
            message.channel.send('🏓 Pinging...').then(message => {
    
                message.edit('Pong!\nPonged back the ping in milliseconds!');
            })
        }
    });
}
