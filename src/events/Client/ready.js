const client = require(`${process.cwd()}/index.js`);
const axios = require('axios')

module.exports = {
  name: "ready.js"
};

client.on('ready', async () => {

  client.logger.info(`${client.user.tag} iniciado com sucesso!`, { tags: ['Bot'] });
})

async function BotStatus() {

   client.user.setActivity(`Code feito por Crynew ( Brunno )`, { type: 0 });

  setInterval(() => {


 client.user.setActivity(`Code feito por Crynew ( Brunno )`, { type: 0 });

  }, 30000);

}