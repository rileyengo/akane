exports.run = (Discord, client, message, args) => {
    message.channel.send("🏓 Pong!").then((sentMessage) => sentMessage.edit("🏓 Pong! " +"Latency is `${msg.createdTimestamp - message.createdTimestamp}ms`. API Latency is `${Math.round(client.ws.ping)}ms`."))
}
