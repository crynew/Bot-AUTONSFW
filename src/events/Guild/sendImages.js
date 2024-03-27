const client = require(`${process.cwd()}/index.js`);
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");
const fs = require('fs');
client.fs = fs;
const axios = require('axios');

const {
  JsonDatabase
  } = require('wio.db')
 const db = new JsonDatabase({ databasePath: 'databases/myJsonDatabase.json' })

module.exports = {
  name: "sendImages.js"
};

const servidor = db.get("server");
const c4k = db.get(`canal4k_${servidor}`);
const cpussy = db.get(`canalpussy_${servidor}`);
const canal = db.get(`canalanal_${servidor}`);
const cboobs = db.get(`canalboobs_${servidor}`);
const cpgif = db.get(`canalpgifs_${servidor}`);
const cfeet = db.get(`canalfeet_${servidor}`);
const chentai = db.get(`canalhentai_${servidor}`);
const cass = db.get(`canalhentaiass_${servidor}`);
const chkitsune = db.get(`canalhentaikit_${servidor}`);
const chmidriff = db.get(`canalhentaimid_${servidor}`);
const chneko = db.get(`canalhentaineko_${servidor}`);
const cyaoi = db.get(`canalyaoi_${servidor}`);

client.once('ready', async () => {
    if (c4k !== null && c4k !== undefined) {
        setInterval(send4kImage, 60000);
    }
    if (cpussy !== null && cpussy !== undefined) {
        setInterval(sendpussyImage, 60000);
    }
    if (canal !== null && canal !== undefined) {
        setInterval(sendanalImage, 60000);
    }
    if (cboobs !== null && cboobs !== undefined) {
        setInterval(sendboobsImage, 60000);
    }
    if (cfeet !== null && cfeet !== undefined) {
        setInterval(sendfeetImage, 60000);
    }
    if (chentai !== null && chentai !== undefined) {
        setInterval(sendhentaiImage, 60000);
    }
    if (cpgif !== null && cpgif !== undefined) {
        setInterval(sendpgifImage, 60000);
    }
    if (cass !== null && cass !== undefined) {
        setInterval(sendassImage, 60000);
    }
    if (chkitsune !== null && chkitsune !== undefined) {
        setInterval(sendhkitsuneImage, 60000);
    }
    if (chmidriff !== null && chmidriff !== undefined) {
        setInterval(sendhmidriffImage, 60000);
    }
    if (chneko !== null && chneko !== undefined) {
        setInterval(sendhnekoImage, 60000);
    }
    if (cyaoi !== null && cyaoi !== undefined) {
        setInterval(sendyaoiImage, 60000);
    }
});

async function send4kImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=4k');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(c4k);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});
          
        channel.send({ embeds: [embed] });
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendpussyImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=pussy');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(cpussy);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendanalImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=anal');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(canal);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendassImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=ass');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(cass);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendboobsImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=boobs');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(cboobs);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendpgifImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=pgif');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(cpgif);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send({ embeds: [embed]});
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendfeetImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=feet');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(cfeet);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhentaiImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hentai');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(chentai);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}


async function sendhassImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hass');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(chass);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhkitsuneImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hkitsune');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(chkitsune);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhmidriffImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hmidriff');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(chmidriff);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendhnekoImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=hneko');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(chneko);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}

async function sendyaoiImage() {
  try {
    const response = await axios.get('https://nekobot.xyz/api/image?type=yaoi');
    const imageUrl = response.data.message;

    const channel = client.channels.cache.get(cyaoi);

    if (channel) {
      const server = client.guilds.cache.get(servidor);

      if (server) {
        const embed = new EmbedBuilder()
          .setColor('#ff0000')
          .setImage(imageUrl)
          .setAuthor({ name: server.name, iconURL: server.iconURL()});

        channel.send(embed);
      } else {
        console.log('Servidor não encontrado.');
      }
    } else {
      console.log('Canal não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a imagem da API:', error);
  }
}
