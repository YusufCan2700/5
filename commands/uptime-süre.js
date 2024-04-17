const {EmbedBuilder} = require("discord.js");
const moment = require("moment");
    require("moment-duration-format");
    const os = require("os");
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: | Yetersiz Yetki !`);
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addFields({ name: 'Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: 'Ping', value: `${client.ws.ping}`, inline: true})

    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["uptime","nekadarsüredir","Uptime","UPTİME"]
};
exports.help = {
  name: "uptime"
};