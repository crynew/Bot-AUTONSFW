const Discord = require("discord.js");
const { PermissionsBitField, ActionRowBuilder, ButtonBuilder, ComponentType } = require('discord.js');
let parse = require("parse-duration");
const moment = require("moment");
moment.locale('pt-br');
require("moment-duration-format");
const ms = require('ms');

const {
	JsonDatabase,
  } = require("wio.db");
  const db = new JsonDatabase({
	databasePath:"databases/myJsonDatabase.json"
  });

module.exports = {
    config: {
        name: "menu",
        aliases: ["painel"],
        description: "Configure o meu prefixo.",
        category: "ADM",
        usage: null
    },
    permissions: null,
    owner: false,
    run: async (client, message, args) => {

        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return await message.reply({ content: `${message.author}, você precisa da permissão de **ADMINISTRADOR** para executar esta função.`, ephemeral: true });
        } else if (!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({ content: `${message.author}, eu preciso da permissão de **ADMINISTRADOR** para executar esta função.`, ephemeral: true });

        let embed = new Discord.EmbedBuilder()
        .setTitle(`${client.user.username}`)
        .setDescription(`Bem-vindo(a) ao Menu de Configuração do seu Servidor **${message.guild.name}**`)
        .addFields(
            { name: 'Administrador:', value: `${message.author}` }
              )
       .setThumbnail(message.guild.iconURL({ size: 2048 }))

       const menu = new Discord.ActionRowBuilder()
       .addComponents(
           new Discord.StringSelectMenuBuilder()
               .setCustomId('menu')
               .setPlaceholder('Nada selecionado.')
               .addOptions(
                   {
                       label: 'Configuração',
                       description: 'Painel de Configuração',
                       value: 'configM',
                   }
               )
       );

        const MESSAGE = await message.channel.send({ embeds: [embed], components: [menu] });
        const filter = (i) => i.user.id === message.author.id;
        const collector = MESSAGE.createMessageComponentCollector({ filter });

        collector.on('collect', async (b) => {

            if (b.customId == 'voltarMenu') {

                b.deferUpdate();
                
                let embed = new Discord.EmbedBuilder()
                .setTitle(`${client.user.username}`)
                .setDescription(`Bem-vindo(a) ao Menu de Configuração do seu Servidor **${message.guild.name}**`)
                .addFields(
                    { name: 'Administrador:', value: `${message.author}` }
                      )
               .setThumbnail(message.guild.iconURL({ size: 2048 }))
    
               MESSAGE.edit({ embeds: [embed], components: [menu] });
            }

            if (b.customId == 'menu') {

                if (b.values[0] === 'configM') {

                    b.deferUpdate()
    
                    let embedPC = new Discord.EmbedBuilder()
                        .setTitle(`${client.user.username} - Configuração`)
                        .addFields(
                            { name: `Configurações`, value: `> 4K Images: \n> Pussy´s Images: \n> Anal Images: \n> Boobs Images: \n> Porn GIF´s Images: \n> Feet Images: \n> Hentai Images: \n> Hentai Ass Images: \n> Hentai´s Kitsune´s Images: \n> Hentai Midriff Image: \n> Hentai Neko Images: \n> Yaoi Images:`, inline: true }
                        )
                        .setThumbnail(message.guild.iconURL({ size: 2048 }))
    
                    const button = new Discord.ActionRowBuilder()
                        .addComponents(
                            new Discord.ButtonBuilder()
                                .setLabel("Servidor ( Só basta clicar )")
                                .setCustomId("server")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("4K")
                                .setCustomId("4k")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Pussy")
                                .setCustomId("pussy")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Anal")
                                .setCustomId("anal")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Boobs")
                                .setCustomId("boobs")
                                .setStyle(Discord.ButtonStyle.Secondary))
    
                    const button2 = new Discord.ActionRowBuilder()
                        .addComponents(
                            new Discord.ButtonBuilder()
                                .setLabel("Hentai")
                                .setCustomId("hentai")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Hentai ( Ass )")
                                .setCustomId("hentaiass")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Hentai ( Kitsune )")
                                .setCustomId("hentaikit")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Hentai ( Midriff )")
                                .setCustomId("hentaimid")
                                .setStyle(Discord.ButtonStyle.Secondary),
                            new Discord.ButtonBuilder()
                                .setLabel("Hentai ( Neko )")
                                .setCustomId("hentaineko")
                                .setStyle(Discord.ButtonStyle.Secondary))

                    const button3 = new Discord.ActionRowBuilder()
                        .addComponents(
                        new Discord.ButtonBuilder()
                            .setLabel("Porn Gifs")
                            .setCustomId("pgifs")
                            .setStyle(Discord.ButtonStyle.Secondary),
                        new Discord.ButtonBuilder()
                            .setLabel("Feet")
                            .setCustomId("feet")
                            .setStyle(Discord.ButtonStyle.Secondary),
                        new Discord.ButtonBuilder()
                            .setLabel("Yaoi")
                            .setCustomId("yaoi")
                            .setStyle(Discord.ButtonStyle.Secondary)
                        )
    
                    const back = new Discord.ActionRowBuilder()
                        .addComponents(
                            new Discord.ButtonBuilder()
                                .setEmoji('1222395542542483526')
                                .setCustomId("voltarMenu")
                                .setStyle(Discord.ButtonStyle.Danger))
    
                    await MESSAGE.edit({ embeds: [embedPC], components: [button, button2, button3, back] })
    
                }


            }

        })
    }
}