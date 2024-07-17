const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login('process.env.token');

client.once('ready', () => {
    console.log('Bot ONLINE');
});

client.on('messageCreate', (message) => {
    if (message.content === '!youtube') {
        message.channel.send('Iscriviti al mio canale: https://www.youtube.com/@Cerottino');
    }

    if (message.content === '!embed') {
        const embed = new EmbedBuilder()
            .setTitle('Link Discord')
            .setDescription(`https://discord.gg/TaRNkcPP5W`)
            .setThumbnail('https://cdn.discordapp.com/attachments/1053046164414529677/1217576628931268689/logonuovopb.png?ex=66982f99&is=6696de19&hm=39684290e74e5cb6d1acc798c9f0966285748658fa185d0bf1c78190483155bd&');

        message.channel.send({ embeds: [embed] });
    }
});



