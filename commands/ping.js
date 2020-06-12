exports.run = (Discord, client, message, args) => {
    message.channel.send("🏓 Pong!").then((sentMessage) => sentMessage.edit("🏓 Pong! `" + Math.round(client.ping) + "ms`"))
}