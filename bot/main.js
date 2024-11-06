const { Client, GatewayIntentBits } = require('discord.js');

const { token } = require('./config.json');

const { readyEvent } = require('./events/ready.js');
const { voiceStateUpdateEvent } = require('./events/voiceStateUpdate.js');

const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildVoiceStates,
            // GatewayIntentBits.GuildMessages,
            // GatewayIntentBits.MessageContent,
        ]
    }
);

readyEvent(client);
voiceStateUpdateEvent(client);
client.login(token);