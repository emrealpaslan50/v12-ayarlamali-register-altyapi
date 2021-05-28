const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')
const roller = require("../Settings/roller.json")
const kanallar = require("../Settings/kanallar.json")

const db = require("quick.db")
const kdb = new db.table("kullanıcı") 

module.exports = {
    name : "erkek",
    help : "erkek [üye] [isim] [yaş]",
    aliases : ["erkek","e"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(message.member.roles.cache.has(roller.RegisterHammer) || message.member.hasPermission('ADMINISTRATOR')) {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let isim = args[1];
        let yas = args[2];
        if(!member || !isim || !yas || isNaN(yas)) return message.channel.send(embed.setDescription(`Doğru Kullanım Şekli \`${conf.prefix}kadın @Brita/ID <İsim> <Yaş>`))       
        if(13 >= yas) return message.channel.send(embed.setDescription(`13 yaş ve altını kayıt edemezsin.`))     

        if(member.roles.cache.has(roller.BoysRoles)) {
            return message.channel.send(embed.setDescription(`Belirlediğin kullanıcı zaten kayıtlı.`))
          }

        let Belirlenenİsim;
        if(!member.user.username.includes(conf.Tag)) Belirlenenİsim = `${conf.UnTag} ${isim.substr(0,1).toUpperCase()+isim.substr(1,isim.length)} ' ${yas}`
        if(member.user.username.includes(conf.Tag)) Belirlenenİsim  = `${conf.Tag} ${isim.substr(0,1).toUpperCase()+isim.substr(1,isim.length)} ' ${yas}`        
    
        await member.roles.remove(roller.UnregRoles)
        await member.setNickname(Belirlenenİsim)
        member.user.username.includes(conf.Tag) && !member.roles.cache.has(roller.CrewRoles) ? 
        await member.roles.add([roller.CrewRoles , roller.BoysRoles , roller.BoysRoles2]) : member.roles.add([roller.BoysRoles , roller.BoysRoles2])

        db.add(`name.${member.id}`, 1)      
        db.add(`KayıtKadın.${message.author.id}`, 1)
        db.add(`Toplam.${message.author.id}`, 1)

       kdb.push(`veri.${member.id}`, {
            İsim: Belirlenenİsim,
            Cinsiyet: roller.BoysRoles,
            Tarih: new Date(Date.now()).toTurkishFormatDate(),
            Yetkili: message.author.id
        })

            message.channel.send(embed.setDescription(`
${client.emojiler.tac} ${member} kullanıcısının ismi \`${Belirlenenİsim}\` olarak değişti ve \`Erkek\` olarak sunucuya kayıt oldu.
            `))
return message.guild.channels.cache.get(kanallar.GeneralChat).send(embed.setDescription(`${member} Aramıza Katıldı Hoşgeldin.`))
        } else {
            message.delete({timeout: 5000}) 
            return message.react(emoji.CarpiID)
}
}}
