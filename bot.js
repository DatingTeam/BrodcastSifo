const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>'
const ms = require("ms");
const ownerID = '391665977949028363'


client.on("ready", async () => {
    console.log(`${client.user.username} is now online...`);
    client.user.setActivity(`A simple broadcast bot`, "http://twitch.tv/S-F")
});



client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**This command is only for stuff team**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('Sorry, but you dont have permisson : **ADMINISTRATOR**' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "PrinceBot";//By Codes , ' ّEpicEdiTeDّ#4968
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**Sorry, But you should type a message**');message.channel.send(`**Are u sure Sending This \nMessage :** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ |   The message has been sended to ${message.guild.members.size} member**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor('RANDOM')
.setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
🚗Server : ***${message.guild.name}***

🗿Sender : ***${message.author.username}***

📲Message : ***${args}***
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)           
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Brodcast cancled :x:.**`).then(m => m.delete(5000));
})
})
}
});




client.login(process.env.BOT_TOKEN);
