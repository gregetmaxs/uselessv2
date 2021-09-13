const Discord = require("discord.js");
const { Message } = require("discord.js");
const fs = require("fs");

module.exports = async (client, message) => {
    
    client.user.setActivity(`${client.guilds.cache.size} Servers | .help`, { type : "WATCHING" });
   
     /* client.ws.on('INTERACTION_CREATE', async (interaction) => {
   client.slash.commandsrun(interaction, client);
  
    })   */       
             
             
 

   
}