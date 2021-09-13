const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "invite",
  aliases: ["getbot"],
  execute: async(client, message, args, data, db) => {
try {
const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Useless Bot", "[Invite Useless bot here](https://bit.ly/3BPBb09)")
  .addField("Super Music Bot", '[Invite Super Music Bot here](https://bit.ly/3tj2mNM)')
  .addField("Discord", `[Join to Official Discord](https://discord.gg/cPDV44qakZ)`)
  .setFooter("Bot created by ExSkull")
  .setImage(`https://media.discordapp.net/attachments/776782742058696724/884261614608601129/PicsArt_09-06-09.19.46.gif`)
  .setTimestamp()
message.author.send({embed})

message.channel.send({embed: {
            color: 3447003,
            description: "Check a DM message!"
        }})
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
}
}
}
module.exports.help = {
    name: "invite",
    description: "Sends a bot invite",
    usage: "invite",
    type: "General"  
}