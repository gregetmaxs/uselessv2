const Discord = require('discord.js');


module.exports = {
	name: 'c-av',
  aliases: ['av-c'],
	execute: async(client, message, args) => {
    if(message.author.id == "398792160453066773"){ 
const embed = new Discord.MessageEmbed().setColor('#FF00FF')
	

		await client.user.setAvatar(args[0])
		message.channel.send(embed.setDescription('You have successfully changed my avatar!'));
    }
	},
};