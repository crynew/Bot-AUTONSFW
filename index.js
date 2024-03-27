const { Client, Partials, Collection, PermissionsBitField, GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");
const dotenv = require('dotenv').config();
const { createWinstonLogger } = require(`${process.cwd()}/src/structures/Logger.js`);
const fs = require('fs');
const axios = require('axios')

const {
 JsonDatabase
 } = require('wio.db')
const db = new JsonDatabase({ databasePath: 'databases/myJsonDatabase.json' })

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ]
});
const logs = require('discord-logs');
logs(client);

client.prefix_commands = new Collection();
client.prefix_aliases_commands = new Collection();
client.slash_commands = new Collection();
client.events = new Collection();

client.prefix = process.env.PREFIX;
client.logger = createWinstonLogger(
  {
    handleExceptions: true,
    handleRejections: true,
  },
  client,
);

module.exports = client;

["PrefixCommands", "AppCommands", "Events"].forEach((file) => {
  require(`${process.cwd()}/src/handlers/${file}`)(client);
});

//



client.login(process.env.TOKEN);