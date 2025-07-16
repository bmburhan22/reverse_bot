"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env.DISCORD_TOKEN;
const watchWord = process.env.WATCH_WORD || '+';
const clientId = process.env.CLIENT_ID;
if (!token || !clientId) {
    throw new Error('Missing DISCORD_TOKEN or CLIENT_ID in environment variables.');
}
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
client.once('ready', () => {
    console.log(`Bot is online as ${client.user?.tag}`);
});
client.on('messageCreate', async (message) => {
    if (message.author.bot)
        return;
    if (message.content.startsWith(watchWord)) {
        const toReverse = message.content.slice(watchWord.length).trim();
        if (toReverse.length === 0)
            return;
        const reversed = toReverse.split('').reverse().join('');
        let thread = message.hasThread ? message.thread : null;
        if (!thread) {
            thread = await message.startThread({
                name: `Reverse: ${toReverse.substring(0, 20)}`,
                autoArchiveDuration: 60,
            });
        }
        await thread.send(reversed);
    }
});
client.login(token);
