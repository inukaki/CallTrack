const { Client, GatewayIntentBits } = require('discord.js');

const { token } = require('./config.json');

const { readyEvent } = require('./events/ready.js');

const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            // GatewayIntentBits.GuildMessages,
            // GatewayIntentBits.MessageContent,
        ]
    }
);

readyEvent(client);
client.login(token);