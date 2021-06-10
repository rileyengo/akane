exports.run = (Discord, client, message, args) => {
    const ping = m.createdTimestamp - message.createdTimestamp
    message.channel.send("🏓 Pong!").then((sentMessage) => sentMessage.edit("🏓 Pong! `" + ping + "ms`"))
}

