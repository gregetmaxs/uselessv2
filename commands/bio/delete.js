const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-reset",
  aliases: ['del-bio', 'biography-del', 'res-bio', 'reset-bio'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {

   db.delete(`biography_${message.author.id}`)
      const aembed = new Discord.MessageEmbed()
   .setDescription("**Successfull**\n\n **Successfully Deleted Your Bio**")
   
   message.channel.send(aembed);

  }
}