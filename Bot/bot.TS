import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.once('redy', () => {
    console.log('Put your messages here since bot logged in ${client.user?.tag}`');
});
client.on('message.Create', (Message) => {
    if (Message.content.toLowerCase() === '!Hello') {
        Message.reply('Hello, ${message.author.username}!`');
    }
})


client.login('YOUR_BOT_TOEKN');