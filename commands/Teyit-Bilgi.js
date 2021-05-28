const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')
const roller = require("../Settings/roller.json")
const kanallar = require("../Settings/kanallar.json")

const db = require("quick.db")
const kdb = new db.table("kullanıcı") 

module.exports = {
    name : "isimler",
    help : "isimler [kullanıcı]",
    aliases : ["isim-sorgu"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(message.member.roles.cache.has(roller.RegisterHammer) || message.member.hasPermission('ADMINISTRATOR')) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    const data  = kdb.get(`veri.${member.id}`)
    if (!data) {
        message.channel.send(embed.setDescription(`Bu kullanıcının isim geçmişi yok`))
    }

    message.channel.send(embed.setDescription(`
${member} kullanıcısının isim kaydı bulundu.

${data.map((value, index) => `\`${++index}.\` \`${value.İsim}\` [ <@&${value.Cinsiyet}> ] Yetkili : <@${value.Yetkili}> Tarih: \`${value.Tarih}\``).slice(0,30).join('\n')}`))

    
  } else {
      message.delete({timeout: 5000}) 
      return message.react(emoji.CarpiID) 
}
}}