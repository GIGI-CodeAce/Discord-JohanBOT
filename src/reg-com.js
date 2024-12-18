import dotenv from 'dotenv';
import { REST, Routes, ApplicationCommandOptionType } from 'discord.js';

dotenv.config();

const commands = [
    {
        name: 'talk-to-me',
        description: 'How can you talk with someone that doesnt exist?',
    },
    {
        name: 'show-me',
        description: 'A representation of the truth',
    },
    {
        name: 'say',
        description: 'Make me say anything',
        options: [
             {
                 name: 'message',
                 description: 'Message you want',
                 type: ApplicationCommandOptionType.String,
                 required: true,
             },
            ]
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );
        console.log('Slash commands registered successfully!');
    } catch (error) {
        console.error('Error registering slash commands:', error);
    }
})();
