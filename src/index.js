import dotenv from 'dotenv';
dotenv.config();

import { Client, IntentsBitField } from 'discord.js';
import QuotesList from './quotes.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`🟩 ${c.user.tag} is ready`);
});

client.on('interactionCreate', (inter) => {
    if (!inter.isChatInputCommand()) return;

    if (inter.commandName === 'talk-to-me') {
        const randomQuote = QuotesList[Math.floor(Math.random() * QuotesList.length)].quote;
        inter.reply(`${randomQuote}`);
    }

    console.log(`/${inter.commandName} command triggered`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    console.log(`${msg.author.username} said "${msg.content}"`);
});

client.login(process.env.TOKEN);
