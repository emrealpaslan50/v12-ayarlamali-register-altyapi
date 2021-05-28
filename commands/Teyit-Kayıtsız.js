const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')
const roller = require("../Settings/roller.json")
const kanallar = require("../Settings/kanallar.json")

const db = require("quick.db")
const kdb = new db.table("kullanıcı") 

module.exports = {
    name : "kayıtsız",
    help : "kayıtsız [üye]",
    aliases : ["kayıt-sil"],

run : async(client,message,args) => {

    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))

    if(message.member.roles.cache.has(roller.RegisterHammer) || message.member.hasPermission('ADMINISTRATOR')) {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!member || message.mentions.members.size < 1 && isNaN(args[0])) {
message.delete({timeout: 5000})
return message.channel.send(embed.setDescription(`Doğru Kullanım Şekli \`${conf.prefix}kayıtsız @Brita/ID `))
}

if(member.id === message.author.id) {
  message.delete({timeout: 5000}) 
  return message.channel.send(embed.setDescription(`Kendi kendini kayıtsıza atamazsın.`))
}

if(member.roles.highest.position >= message.member.roles.highest.position) {
message.delete({timeout: 5000})
return message.channel.send(embed.setDescription(`Belirlediğin kullanıcı ile ya aynı yetkidesin ya da senden üstte.`))
}

if(member.id === message.author.id) {
  
}

member.roles.set([roller.kayıtsız]).catch()
member.setNickname(`${conf.UnTag} İsim ' Yaş`).catch()
return message.channel.send(embed.setDescription(`${member} kullanıcısı kayıtsıza atıldı.`))
} else {
message.delete({timeout: 5000})
return message.react(emoji.CarpiID)
}
  

}}