const { Client, Message, MessageEmbed, Invite } = require('discord.js');
const fetch = require('node-fetch')


module.exports = {
    name: 'chess',
    aliases: ['chess.io'],
    categories : 'games',
    description: 'Play Chess Game in Discord Voice Channel',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute: async (client, message, args) => {
        const channel = message.member.voice.channel

        if (!channel) return message.channel.send(
            new MessageEmbed()
                .setDescription("You must be connected to a voice channel to use this command.")
                .setColor("#ff0000")
        )

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832012586023256104",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send(
                new MessageEmbed()
                    .setDescription("I was unable to start a yt together session.")
                    .setColor("#ff0000")
            )
          message.channel.send(
          new MessageEmbed()
            .setAuthor("Chess Game", "https://cdn.discordapp.com/emojis/886803130996629534.png?v=1")
            .setColor("#FF0000")
            .setDescription(`
Using **Chess Game** you can play chess with your friends in a Voice Channel. Click __**Join Chess Game**__ to join in!

__**[Join Chess Game](https://discord.com/invite/${invite.code})**__

⚠ **Note:** This only works in Desktop`))
        })
    }
}