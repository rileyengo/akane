exports.run = (Discord, client, message, args) => {
    message.channel.send("pong! `" + + Math.round(client.ws.ping) + "`").catch(console.error);
}
