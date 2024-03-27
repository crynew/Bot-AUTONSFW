const { EmbedBuilder } = require("discord.js");
const client = require(`${process.cwd()}/index.js`);
const chalk = require('chalk');
const ccmd = chalk.hex('#00ffcb');
const cred = chalk.hex('#ff0000');

module.exports = {
  name: "interactionCreate"
};

client.on('interactionCreate', async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = client.slash_commands.get(interaction.commandName);
    let nome = ''
    try {

      if (interaction.options.getSubcommand()) { nome = `${interaction.commandName} ${interaction.options.getSubcommand()}` }

    } catch (err) { nome = interaction.commandName }

    if (!command) return;

    try {
      command.run(client, interaction);
      log('Slash', `${nome}`, `${interaction.user.username}`, `${interaction.user.id}`, `${interaction.guild.name}`, `${interaction.guild.id}`, interaction)

    } catch (e) {
      console.error(e)
      logf('Slash', `${nome}`, `${interaction.user.username}`, `${interaction.user.id}`, `${interaction.guild.name}`, `${interaction.guild.id}`, interaction)
    };
  };

  if (interaction.isUserContextMenuCommand()) {
    const command = client.user_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction);
      log('User', `${interaction.commandName}`, `${interaction.user.username}`, `${interaction.user.id}`, `${interaction.guild.name}`, `${interaction.guild.id}`, interaction)
    } catch (e) {
      console.error(e)
      logf('User', `${interaction.commandName}`, `${interaction.user.username}`, `${interaction.user.id}`, `${interaction.guild.name}`, `${interaction.guild.id}`, interaction)
    };
  };

  if (interaction.isMessageContextMenuCommand()) {
    const command = client.message_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction);
      log('Message', `${interaction.commandName}`, `${interaction.user.username}`, `${interaction.user.id}`, `${interaction.guild.name}`, `${interaction.guild.id}`, interaction)

    } catch (e) {
      console.error(e)
      logf('Message', `${interaction.commandName}`, `${interaction.user.username}`, `${interaction.user.id}`, `${interaction.guild.name}`, `${interaction.guild.id}`, interaction)
    };
  };


});


function log(type, command, authortag, authorid, servername, serverid, interaction) {
  console.log(`[${ccmd('Command Manager')}, ${ccmd(type)}]: ${command} | ${authortag} (${authorid}) | ${servername} (${serverid})`)
}
function logf(type, command, authortag, authorid, servername, serverid, interaction) {
  console.log(`[${cred('Command Manager')}, ${cred(type)}]: ${command} | ${authortag} (${authorid}) | ${servername} (${serverid})`)
}