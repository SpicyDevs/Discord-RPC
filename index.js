///////////////////////////
// Sahil Khan and Aayu5h
// discord.gg/YttTcsttGw/
// https://s4h1l.ml/youtube/
// https://spicydevs.me/
///////////////////////////

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1020573995562700844')
    .setType('PLAYING')
    .setURL('https://youtu.be/dQw4w9WgXcQ')
    .setState('Exams 📚')
  
    .setName('SpicyDevs')
    .setDetails('Discord Bot Developer, Web Developer')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/895318544051478558/1071329449271902279/HD-wallpaper-gamer-logo-cool-desing-game-gamer-gamer-logo-gamers-games-lion-logos.jpg')
    .setAssetsLargeText('visit this')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1036718178216185857/1071332748507230248/out._1.jpg')
    .setAssetsSmallText('discord')
    .addButton('Website', 'https://spicydevs.me/')
    .addButton('Discord Server', 'https://discord.gg/SmPXeJZpJhttps:')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)


///////////////////////////
// Sahil Khan and Aayu5
// discord.gg/YttTcsttGw/
// https://s4h1l.ml/youtube/
// https://spicydevs.me/
///////////////////////////