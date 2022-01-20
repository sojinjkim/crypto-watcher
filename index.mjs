import dotenv from "dotenv";
dotenv.config();

import { Client, Intents } from "discord.js";
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const BOT_TOKEN = process.env.BOT_TOKEN;

client.once("ready", () => {
    console.log("CryptoWatcher is online!");
});

client.login(BOT_TOKEN);