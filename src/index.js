import dotenv from 'dotenv';
dotenv.config();

import { Client, IntentsBitField } from 'discord.js';
import QuotesList from './Data/quotes.js';
import MonsterGifs from './Data/gifs.js';
// import GetTime from './Assets/time.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const date = new Date();
date.setMinutes(date.getMinutes());
date.setHours(date.getHours());
date.setDate(date.getDate());
date.setMonth(date.getMonth());


client.on('ready', (c) => {
    console.log(`🟩 ${c.user.tag} is ready`);
});

client.on('interactionCreate', (inter) => {
    if (!inter.isChatInputCommand()) return;

    if (inter.commandName === 'talk-to-me') {
        const randomQuote = QuotesList[Math.floor(Math.random() * QuotesList.length)].quote;
        inter.reply(`${randomQuote}`);
    }
    if (inter.commandName === 'show-me') {
        const randomGif = MonsterGifs[Math.floor(Math.random() * MonsterGifs.length)].gif;
        inter.reply(`${randomGif}`);
    }
    if (inter.commandName === 'say') {
        const message = inter.options.get('message').value
        inter.reply(`\`\`\`${message}\`\`\``);
    }

    console.log(`/${inter.commandName} command triggered by ${inter.user.username} in ${inter.member.guild.name} at {${date.toString()}}`);
    //console.log(inter);
    
    
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;
    if (msg.content.toLocaleLowerCase() === 'monster'){
        msg.channel.send('```\nMe? Don’t be ridiculous\n```');
    }

    console.log(`${msg.author.username} said "${msg.content}" in ${msg.member.guild.name} at {${date.toString()}}`);
});

client.login(process.env.TOKEN);