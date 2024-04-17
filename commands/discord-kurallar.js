const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: | Yetersiz Yetki !`);
  const ping = new Discord.EmbedBuilder()
  .setTitle(`${client.user.username} Discord Kuralları`)
.setDescription(`1-) Din, dil, ırk veya cinsiyet ayrımı içeren söylemler\n 2-) Siyasi ya da dini sohbetler başlatmak ve içinde bulunmak\n 3-) Herhangi bir kimseyi hedef alan hakaretlerde bulunmak\n 4-) Satış ve reklam içerikli paylaşımlar yapmak\n 5-) Flood, Spam, vb. yapmak\n 6-) Kişisel kavgaları Discord sohbet kanallarına taşımak\n 7-) +18 içerikli paylaşımlar yapmak\n 8-) Yazışma kanallarını amacı dışında kullanmak\n 9-) Spoiler odası dışında spoiler içerikli paylaşımlar yapmak\n 10-) Dilencilik yapmak\n 11-) Chat üzerinde küfür etmek (kısaltmalar ve sansür dahil)\n 12-) Sunucu üzerinde sarkıntılık yapmak\n 13-) Türkçe harici dil kullanmak\n 14-) Kurallara uymayan birisi ile tartışmaya girmek\n 15-) Sunucuda mute/ban yiyen bir kişinin sunucuya çıkıp girmesi ya da farklı bir hesapla gelmesi\n 16-) Yetkililerin gereksiz yere taglenmesi\n\n Sunucuya giren herkes kuralları okumuş ve kabul etmiş sayılır.`)
.setColor(Discord.Colors.DarkRed)
.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
 message.channel.send({ embeds: [ping] })
     }

exports.conf = {
  aliases: []
}

exports.help = {
  name: "discord-kurallar"
}