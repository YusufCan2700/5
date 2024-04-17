const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: | Yetersiz Yetki !`);

  const ping = new Discord.EmbedBuilder()
  .setTitle(`${client.user.username} Ekip Kuralları`)
.setDescription(`1-) Discord'da çevrim içi olunduğu sürece sesli kanala gelmek zorunludur.\n 2-) Toplantı yapılcağı zaman mazeret bildirmeden katılmayanlar uyarı alcaktır.Devamı olursa ekipten uzaklaştırılcaktır.\n 3-) Konvoylara katılımlara özen gösterelim katılım sağlayamayacağınız zaman mazeretler kısmına mazeret bildirmeniz gerekir. Bildirmesseniz uyarı ve sonrasında ekipten uzaklaştırılırsınız.\n 4-) Konvoy esnasında troll sürüş sergilemek yasaktır.Süresiz uzaklaştırmaya sebep olucaktır.\n 5-) Konvoy esnasında araç sollama yapmak yasaktır.\n 6-) Konvoy esnasında önde ki araç ile aranızda 1 tır girecek kadar mesafe bırakınız.\n 7-) Ekibimize girdiğinizde deneme sürücü olarak başlarsınız. Daha sonra konvoy katılım ve sürüşlerinize göre rollerde Şoför ve Usta Şoföre yükselebilceksiniz.\n 8-) Ekibe katıldığınız zaman discord fotoğrafınızı logomuz olarak değiştirmek zorunludur.\n 9-) Truckers MP fotoğrafı da logomuz yapılmak zorunludur.\n 10-) Truckers MP Kullanıcı adınızı değiştirmek zorunludur.\n\n Ekibe katılırsanız kuralları okumuş ve kabul etmiş sayılırsınız.`)
.setColor(Discord.Colors.DarkRed)
.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
 message.channel.send({ embeds: [ping] })
     }

exports.conf = {
  aliases: []
}

exports.help = {
  name: "ekip-kurallar"
}