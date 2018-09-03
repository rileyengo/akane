exports.run = (Discord, client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}
