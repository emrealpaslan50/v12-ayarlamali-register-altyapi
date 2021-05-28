const { Database } = require("ark.db")
const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')

module.exports = {
    name : "ayar-bilgi",
    help : "ayar",
    aliases : ["ayar-info","ayar"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(![conf.OwnerRoles].some(rol => message.member.roles.cache.get(rol))) {

message.channel.send(embed.setDescription(`
Kanalları Ve Rolleri Belirtmek İçin Aşağıda Belirtilen Komutları Kullanınız.

\`\`\`
${conf.prefix}ayar-kanal     Kanalları tanımlarsınız.
${conf.prefix}ayar-rol       Rolleri tanımlarsınız.
${conf.prefix}ayar-liste     Kullanabileceğiniz ayar komutlarını listeler.
${conf.prefix}ayar-kontrol   Hangi ayarların tanımlı olduğuna bakarsınız.
\`\`\`

${client.emojiler.sagok2} **${conf.prefix}ayar-kanal** için kullanabileceğiniz komutlar;
\`\`\`
RegisterChannel , RulesChannel , RegisterLogChannel , GeneralChat
\`\`\`

${client.emojiler.sagok2} **${conf.prefix}ayar-rol** için kullanabileceğiniz komutlar;
\`\`\`
BoysRoles , BoysRoles2 , GirlsRoles , GirlsRoles2 , UnregRoles , RegisterHammer
\`\`\`

`))

} else {
    return message.react(emoji.CarpiID)
}
}}