const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')
const roller = require("../Settings/roller.json")
const kanallar = require("../Settings/kanallar.json")

const db = require("quick.db")
const kdb = new db.table("kullanıcı") 

module.exports = {
    name : "kadın",
    help : "kadın [üye] [isim] [yaş]",
    aliases : ["kadın","k"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(message.member.roles.cache.has(roller.RegisterHammer) || message.member.hasPermission('ADMINISTRATOR')) {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let isim = args[1];
        let yas = args[2];
        if(!member || !isim || !yas || isNaN(yas)) return message.channel.send(embed.setDescription(`Doğru Kullanım Şekli \`${conf.prefix}kadın @Brita/ID <İsim> <Yaş>`))       
        if(13 >= yas) return message.channel.send(embed.setDescription(`13 yaş ve altını kayıt edemezsin.`))     

        if(member.roles.cache.has(roller.GirlsRoles)) {
            return message.channel.send(embed.setDescription(`Belirlediğin kullanıcı zaten kayıtlı.`))
          }

        let Belirlenenİsim;
        if(!member.user.username.includes(conf.Tag)) Belirlenenİsim = `${conf.UnTag} ${isim.substr(0,1).toUpperCase()+isim.substr(1,isim.length)} ' ${yas}`
        if(member.user.username.includes(conf.Tag)) Belirlenenİsim  = `${conf.Tag} ${isim.substr(0,1).toUpperCase()+isim.substr(1,isim.length)} ' ${yas}`        
    
        await member.roles.remove(roller.UnregRoles)
        await member.setNickname(Belirlenenİsim)
        member.user.username.includes(conf.Tag) && !member.roles.cache.has(roller.CrewRoles) ? 
        await member.roles.add([roller.CrewRoles , roller.GirlsRoles , roller.GirlsRoles2]) : member.roles.add([roller.GirlsRoles , roller.GirlsRoles2])

        db.add(`name.${member.id}`, +1)      
        db.add(`KayıtKadın.${message.author.id}`, +1)
        db.add(`Toplam.${message.author.id}`, +1)

       kdb.push(`veri.${member.id}`, {
            İsim: Belirlenenİsim,
            Cinsiyet: roller.GirlsRoles,
            Tarih: new Date(Date.now()).toTurkishFormatDate(),
            Yetkili: message.author.id
        })

            message.channel.send(embed.setDescription(`
${client.emojiler.tac} ${member} kullanıcısının ismi \`${Belirlenenİsim}\` olarak değişti ve \`Kadın\` olarak sunucuya kayıt oldu.
            `))
            return message.guild.channels.cache.get(kanallar.GeneralChat).send(embed.setDescription(`${member} Aramıza Katıldı Hoşgeldin.`))
        } else {
            message.delete({timeout: 5000}) 
            return message.react(emoji.CarpiID)
}
}}


/*
message.channel.send(embed.setDescription(`
${victim} ( \`${victim.id}\` ) kullanıcısının adı düzenlendi ve \`${this.help.name}\` olarak kaydedildi.

Kullanıcının \`${veri}\` isim kaydı bulundu:
${data.map((value, index) => `\`${value.name}\` (<@&${value.gender}>)`).slice(0, 20).join("\n")}
`))

return message.guild.channels.cache.get(config.chat).send(embed.setDescription(`${victim} ( \`${victim.id}\` ) aramıza <@&${config.erkek}> olarak katıldı. Seninle beraber ${üyesayısı} kişi olduk.`)).then(msg => msg.delete({timeout: 5000}))
} else if(!data) {

db.add(`isim.${victim.id}`, 1)      

kdb.push(`kullanici.${victim.id}.isimler`, {
 name: aisim,
 gender: config.erkek
})

tdb.push(`teyitler.${message.author.id}.uyeler`, {
  uye: victim.id,
  gender: config.erkek
})

db.add(`erkek.${message.author.id}`, 1)
db.add(`toplam.${message.author.id}`, 1)

await victim.roles.remove([config.kayıtsız, config.kayıtsızs])
victim.user.username.includes(config.tag) && !victim.roles.cache.has(config.ekip) ? await victim.roles.add([config.erkek, config.erkeks, config.ekip, config.ekip2]).catch() : await victim.roles.add([config.erkek, config.erkeks]).catch()
await victim.setNickname(aisim).catch()

message.channel.send(embed.setDescription(`
${victim} ( \`${victim.id}\` ) kullanıcısının adı düzenlendi ve \`${this.help.name}\` olarak kaydedildi.
`))

return message.guild.channels.cache.get(config.chat).send(embed.setDescription(`${victim} ( \`${victim.id}\` ) aramıza <@&${config.erkek}> olarak katıldı. Seninle beraber ${üyesayısı} kişi olduk.`)).then(msg => msg.delete({timeout: 5000}))
}
} else {
message.delete({timeout: 5000})
return message.channel.send(hembed.setDescription(`Bu komutu kullanmak için \`${message.guild.roles.cache.find(x => x.id === config.commander).name}\` rolüne sahip olmalısın.`)).then(msg => msg.delete({timeout: 5000}))
}

};
*/