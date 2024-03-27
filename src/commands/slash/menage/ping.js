module.exports = {
    name: "ping",
    description: "ping",
    type: 1,
    options: [],
    permissions: {},
    run: async (client, interaction) => {

        await interaction.reply({ content: "Pong!" });
        
    },
};