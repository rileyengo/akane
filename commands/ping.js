exports.run = (Discord, client, message, args) => {
    message.channel.send("Ping?").then(setTimeout(function(){ 
        (sentMessage) => sentMessage.edit("Pong! `" + Math.round(client.ping) + "ms`");
    }, 2000))
}