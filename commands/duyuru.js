const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: | Yetersiz Yetki !`);
let neran = message.mentions.channels.first();
if (!neran) return message.reply("**:x: | Bir Kanal Etiketlemen Gerek!**");


let neranaçıklama = args.slice(1).join(" ");
if (!neranaçıklama) return message.reply("**:warning: | Ne Duyurusu Yapılacak Yazman Gerek!**");


let neranembed = new Discord.EmbedBuilder()
.setTitle("Klasik Lojistik")
.setColor(Discord.Colors.DarkRed)
.setDescription(`${neranaçıklama}`)
.setFooter({ text:'Klasik Lojistik', iconURL: client.user.displayAvatarURL({dynamic: true})})
.setThumbnail(message.guild.iconURL())

neran.send({embeds: [neranembed]})



}

exports.conf = {
aliases: []
}

exports.help = {
name: "duyuru"
}