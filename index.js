const {
    Client,
    GatewayIntentBits,
    Events
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

// Quand le bot démarre
client.once(Events.ClientReady, (bot) => {
    console.log(`✅ Connecté en tant que ${bot.user.tag}`);
});

// Si le bot perd la connexion
client.on('disconnect', () => {
    console.log('❌ Déconnecté de Discord');
});

// Nouveau membre
client.on(Events.GuildMemberAdd, async (member) => {
    const channelId = '1513123116375740448';
    const channel = member.guild.channels.cache.get(channelId);

    if (!channel) return;

    const nombreMembres = member.guild.memberCount;

    channel.send(
        `🎉 Bienvenue ${member} sur **${member.guild.name}** !\n\n` +
        `Nous sommes désormais **${nombreMembres}** membres sur le serveur !`
    );
});

// Connexion du bot
client.login(process.env.TOKEN);