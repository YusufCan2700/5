const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, 
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.Reaction, 
    Partials.GuildScheduledEvent,
    Partials.User, 
    Partials.ThreadMember, 
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildBans, 
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions, 
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.DirectMessages, 
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.MessageContent, 
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

/////SA-AS/////
client.on("messageCreate", (message) => {
  let saas = db.fetch(`saas_${message.guild.id}`);
  if (!saas) return;

  if (saas) {
    let selaamlar = message.content.toLowerCase();
    if (
      selaamlar === "sa" ||
      selaamlar === "slm" ||
      selaamlar === "sea" ||
      selaamlar === " selamünaleyküm" ||
      selaamlar === "Selamün Aleyküm" ||
      selaamlar === "selam"
    ) {
      message.channel.send(
        `<@${message.author.id}> Aleykümselam Kardeşim,Hoşgeldin ☺️`
      );
    }
  }
});







client.login(config.Bot.Token)


