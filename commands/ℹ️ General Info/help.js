const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "help",
  aliases: ['h', 'helppls'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {

    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = ".";
    }
    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];
      var commandnum = [];
      readdirSync("./commands/").forEach((dir, files) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
    
        );

        const cmds = commands.map((command) => {
        
          let file = require(`../../commands/${dir}/${command}`);
          
          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });
 
        let data = new Object();
        let data1 = new Object();
       
        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(", "),
        };

        categories.push(data);

      });

   let commandscount = "150+";

      const embed = new MessageEmbed()
        .setTitle(`📬 Need help? Here are all of my commands:\n Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.`)


        .addField("**BOT CODE INFO**", "`dependencies`, `servers`, `stats`, `uptime`\n\n**GENERAL INFO**\n `servericon`, `serverinfo`, `help`, `invite`, `links`, `ping`, `serverstats`, `vote`, **`privacy`**\n\n**OWNERS**\n`eval`\n\n **Guessing Games** \n `find-words`, `guess-number`, `lovecalc`")


        .addField("**:dolls: AUTOMOD**", "`anti-badwords`,`anti-alt`, `antilink`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `role-all`\n\n**FUN**\n `ascii`, `baka`, `beep`,`calc`, `cattext`, `dice`, `eightball`, `flipcoin`, `fliptext`, `hack`, `iq`, `joke`, `kill`, `messages`, `poke`, `poll`, `ratewaifu`, `rps`, `sneeze`, `waifu`, `zalgo`\n\n **Biography**\n `Profile`,`set-bio`, `bio-reset`, `check-bio`,`set-birthday`, `check-birthday`\n\n **Custom Commands**\n `cc-create`, `cc-delete`, `cc-list`")


        .addField("**:level_slider: LEVELING**", "`rank`\n\n**ECONOMY**\n`addmoney`, `balance`, `beg`, `bet`, `buy`, `daily`, `deposit`, `monthly`, `pay`, `profile`, `roulette`, `weekly`, `withdraw`, `work`\n\n**LOGS**\n`logs-ticket`, `set-logs`, `remove-logs`\n\n**REPORT**\n`suggest`, `bug-report`")



        .addField("**:ticket: TICKET**", "`add`, `close`, `delete`, `new`, `open`, `remove`, `setup`\n\n**:performing_arts:REACTION ROLES**\n`reaction-role`, `reaction-role-remove`\n\n**:video_game: GAMES**\n`chess`,`poker`, `slots`,`tictactoe`\n\n**:frame_photo: IMAGE**\n`3000yr`, `approved`, `batslap`, `beautiful`, `brazzers`, `burn`, `cat`, `challenger`, `cuddle`, `dict`, `distort`, `dog`, `dungeon`, `facechange`, `fire`, `flatearth`, `foxgirl`, `gay`, `hug`, `kiss`, `love`, `magik`, `meme`, `qrcode`, `randomav`, `rip`, `scary`, `slap`, `triggered`, `tickle`,`poke`, `tweet`, `vs`, `wanted`")


        .addField("**MODERATION**", "`announce`, `ban`, `color`, `hide`, `kick`, `lock`, `maintainence`, `nuke`, `prune`, `clear`, `say`, `sendembed`, `serverlock`, `serverunlock`, `set`, `slowmode`, `stealemoji`, `unban`, `unhide`, `unlock`, `vcid`, `voicedeafen`, `voicekick`, `voicemove`, `voicemute`, `voiceundeaf`, `voiceunmute`, `warn`, `warns`\n\n**:robot:CHATBOT**\n`remove-channel`, `set-channel`\n\n**UTILITY**\n`youtube`,`csgo`,`avatar`, `covid`, `animesearch`, `id`, `members`, `roleid`, `github`,`time`, `info`, `weather`,`afk`")


        .setFooter(
          `Requested by ${message.author.tag} | Total ${commandscount} Commands`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands! (Some Commands will show on help And they are working just Command is disabled in detaied help command)`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.help.usage}}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.help.description
            ? command.help.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};