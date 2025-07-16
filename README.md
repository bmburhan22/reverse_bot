# Reverse Bot

A Discord bot that listens for messages starting with a configurable watch word (default: `+`) and replies in a thread with the reversed message.

## Setting Up Your Discord Bot

1. **Create a Bot Application:**
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click "New Application" and give it a name.

2. **Add a Bot to the Application:**
   - In your application, go to the "Bot" tab on the left.
   - Click "Add Bot" and confirm.
   - (Optional) Set your bot's username and icon.

3. **Get Your Bot Token:**
   - In the "Bot" tab, click "Reset Token" or "Copy" to get your bot token.
   - **Keep this token secret!**
   - Paste this token into your `.env` file as `DISCORD_TOKEN`.

4. **Invite the Bot to Your Server:**
   - In the "General Information" tab, copy the "Client ID" (you do not need to add this to your `.env`).
   - Use the following URL, replacing `YOUR_CLIENT_ID` with your actual client ID:
     ```
     https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=1049600
     ```
   - Open this URL in your browser, select your server, and authorize the bot.
   - The permission number above gives the bot permission to read and send messages, create threads, and manage messages. Adjust as needed for your use case.

---

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
# Discord Bot Token
DISCORD_TOKEN=your_discord_bot_token_here

# The watch word to trigger the bot (default is '+')
WATCH_WORD=+
```

## How to Use

1. **Add your `.env` file:**
   - Copy the example above into a file named `.env` in the project root.
   - Fill in your Discord bot token and (optionally) change the watch word.

2. **Install dependencies:**
   - Run:
     ```sh
     npm install
     ```
   - This will install all required packages listed in `package.json`.

3. **Build the bot:**
   - Run:
     ```sh
     npm run build
     ```
   - This will compile `src/bot.ts` to `dist/bot.js` and `dist/bot.d.ts`.

4. **Run the bot:**
   - For development:
     ```sh
     npm start
     ```
   - With PM2 (for production):
     ```sh
     npm run pm2
     ```

## How It Works

- The bot listens for messages starting with the `WATCH_WORD` (default: `+`).
- When triggered, it replies in a thread with the reversed message content.
- The watch word can be changed by editing the `.env` file.
- The main entry point is `dist/bot.js`.

---

**Enjoy your reverse bot!** 