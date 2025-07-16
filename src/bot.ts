import { Client, GatewayIntentBits, Message } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const watchWord = process.env.WATCH_WORD || '+';

if (!token) {
  throw new Error('Missing DISCORD_TOKEN in environment variables.');
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Bot is online as ${client.user?.tag}`);
});

client.on('messageCreate', async (message: Message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(watchWord)) {
    const toReverse = message.content.slice(watchWord.length).trim();
    if (toReverse.length === 0) return;
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