const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "links",
  aliases: ["getlinks", "support", "link"],
  execute: async(client, message, args, data, db) => {

const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Useless Bot", "[Invite Useless bot here](https://bit.ly/3BPBb09)")
  .addField("Super Music Bot", '[Invite Super Music Bot here](https://bit.ly/3tj2mNM)')
  .addField("Discord", `[Join to Official Discord](https://discord.gg/cPDV44qakZ)`)
  .setFooter("Bot created by ExSkull")
  .setImage(`https://media.discordapp.net/attachments/776782742058696724/884261614608601129/PicsArt_09-06-09.19.46.gif`)
  .setTimestamp()
message.channel.send({embed})


}
  }



module.exports.help = {
    name: "links",
    description: "Sends a Important Linksvof bot",
    usage: "links",
    type: "General"  
}