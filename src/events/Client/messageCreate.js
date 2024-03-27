const { EmbedBuilder, PermissionsBitField, codeBlock } = require("discord.js");
const client = require(`${process.cwd()}/index.js`);
const chalk = require('chalk');
const ccmd = chalk.hex('#00ffcb');
const cred = chalk.hex('#ff0000');

module.exports = {
  name: "messageCreate"
};

client.on('messageCreate', async (message) => {
  if (message?.author?.bot) return;
  if (!message?.guild) return;

  let prefix = process.env.PREFIX;

  if (!message.content.toLowerCase().startsWith(prefix)) return;

  const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  const cmdName = cmd
  if (cmd.length == 0) return;
  let conteudo = '';
  if (!args.slice(0).join(" ")) { conteudo = 'Nenhum argumento'; } else { conteudo = args.slice(0).join(" "); }

  let command = client.prefix_commands.get(cmd) || client.prefix_commands.find((cmd) => cmd.config.aliases && cmd.config.aliases.includes(cmdName));

  if (!command) return;

  if (command) {
    if (command.permissions) {
      if (!message.member.permissions.has(PermissionsBitField.resolve(command.permissions || []))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Você não está autorizado de usar este comando.`)
            .setColor("Red")
        ]
      })
    };

    try {
      command.run(client, message, args, prefix);
      log('Prefix', `${cmd}`, `${message.author.username}`, `${message.author.id}`, `${message.guild.name}`, `${message.guild.id}`, conteudo, message)
    } catch (error) {
      console.error(error);
      logf('Prefix', `${cmd}`, `${message.author.username}`, `${message.author.id}`, `${message.guild.name}`, `${message.guild.id}`, conteudo, message)
    };

  }
});

function log(type, command, authortag, authorid, servername, serverid, conteudo, message) {
  console.log(`[${ccmd('Command Manager')}, ${ccmd(type)}]: ${command} | ${authortag} (${authorid}) | ${servername} (${serverid})`)
}

function logf(type, command, authortag, authorid, servername, serverid, conteudo, message) {
  console.log(`[${cred('Command Manager')}, ${cred(type)}]: ${command} | ${authortag} (${authorid}) | ${servername} (${serverid})`)
}

function logm(type, authortag, authorid, servername, serverid, conteudo, message) {
  console.log(`[${ccmd('Command Manager')}, ${ccmd(type)}]: ${authortag} (${authorid}) | ${servername} (${serverid})`)
}