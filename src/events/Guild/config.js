const client = require(`${process.cwd()}/index.js`);
const Discord = require('discord.js')

const {
  JsonDatabase
  } = require('wio.db')
 const db = new JsonDatabase({ databasePath: 'databases/myJsonDatabase.json' })

module.exports = {
    name: "config.js"
};

client.on(Discord.Events.InteractionCreate, async function (interaction) { 

    const b = interaction;

    if (b.customId == 'server') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Servidor Liberado para uso do sistema **NSFW**`)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });

        await db.set(`server`, interaction.guild.id);
      
      }

    if (b.customId == '4k') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **4K**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canal4k_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }
      
      if (b.customId == 'pussy') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **pussy**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalpussy_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'anal') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **Anal**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalanal_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'boobs') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **boobs**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalboobs_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'pgifs') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **porn gifs**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalpgifs_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'feet') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **feet**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalfeet_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'hentai') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **hentai**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalhentai_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'hentaiass') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **hentai ( ass )**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalhentaiass_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'hentaikit') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **hentai ( kitsune )**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalhentaikit_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'hentaimid') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **hentai ( midriff )**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalhentaimid_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'hentaineko') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **hentai ( neko )**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalhentaineko_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

      if (b.customId == 'yaoi') {

        let embedCargoWl = new Discord.EmbedBuilder()
            .setDescription(`Envie no chat o canal desejado para imagens **yaoi**\nPara cancelar digite: \`cancelar\``)
      
        b.reply({ embeds: [embedCargoWl], ephemeral: true });
      
        let coletor = b.channel.createMessageCollector({ filter: mm => mm.author.id == b.user.id, max: 1 })
      
        coletor.on("collect", async (message) => {
      
            message.delete();
      
            let ee = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) ;
      
            if (message.content == "cancelar") {
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Configuração cancelada com sucesso.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            }
      
            let canal = b.guild.channels.cache.get(ee?.id)
      
            if (!canal) { 
      
                coletor.stop('Collector stopped manually');
      
                let errado = new Discord.EmbedBuilder()
                    .setDescription(`Por favor forneça um ID válido.`)
      
                return b.editReply({ embeds: [errado], ephemeral: true })
      
            } else {
      
                let embedG = new Discord.EmbedBuilder()
                    .setDescription(`Canal do sistema de **NSFW** configurado com sucesso.`)
      
                b.editReply({ embeds: [embedG], ephemeral: true });
      
                await db.set(`canalyaoi_${b.guild.id}`, canal.id);
            }
      
        }
        )
      }

})