const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: | Yetersiz Yetki !`);

  const ping = new Discord.EmbedBuilder()
.setDescription(`Gecikme sürem ${client.ws.ping} ms`)
.setColor(Discord.Colors.DarkRed)
 message.channel.send({ embeds: [ping] })
     }

exports.conf = {
  aliases: []
}

exports.help = {
  name: "ping"
}