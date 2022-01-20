const { Client, Intents } = require("discord.js");
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const { Token } = require("./config.env");

client.once("ready", () => {
    console.log("CryptoWatcher is online!");
});

client.login(Token);