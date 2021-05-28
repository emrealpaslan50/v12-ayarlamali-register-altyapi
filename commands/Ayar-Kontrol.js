const { Database } = require("ark.db")
const roldb = new Database("/Settings/roller.json")
const kanaldb = new Database("/Settings/kanallar.json")
const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')

module.exports = {
    name : "ayar-kontrol",
    help : "ayar-kontrol",
    aliases : ["ayar-denetle"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(![conf.OwnerRoles].some(rol => message.member.roles.cache.get(rol))) {

        //Roller
    const GirlsRoles = roldb.get(`GirlsRoles`)
    const kız = GirlsRoles ? `${message.guild.roles.cache.get(GirlsRoles).name}` :"Ayarlı değil!"

    const BoysRoles = roldb.get(`BoysRoles`)
    const erkek = BoysRoles ? `${message.guild.roles.cache.get(BoysRoles).name}` :"Ayarlı değil!"

    const RegisterHammer = roldb.get(`RegisterHammer`)
    const kayıtcı = RegisterHammer ? `${message.guild.roles.cache.get(RegisterHammer).name}` :"Ayarlı değil!"

    const UnregRoles = roldb.get(`UnregRoles`)
    const kayıtsız = UnregRoles ? `${message.guild.roles.cache.get(UnregRoles).name}` :"Ayarlı değil!"

    const CrewRoles = roldb.get(`CrewRoles`)
    const ekip = CrewRoles ? `${message.guild.roles.cache.get(CrewRoles).name}` :"Ayarlı değil!"

    const BoysRoles2 = roldb.get(`BoysRoles2`)
    const erkek1 = BoysRoles2 ? `${message.guild.roles.cache.get(BoysRoles2).name}` :"Ayarlı değil!"

    const GirlsRoles2 = roldb.get(`GirlsRoles2`)
    const kız1 = GirlsRoles2 ?  `${message.guild.roles.cache.get(GirlsRoles2).name}` :"Ayarlı değil!" 

        //Kanallar

    const GeneralChat = kanaldb.get(`GeneralChat`)
    const genelchat = GeneralChat ? `${message.guild.channels.cache.get(GeneralChat).name}` :"Ayarlı değil!" 

    const RulesChannel = kanaldb.get(`RulesChannel`)
    const kurallar = RulesChannel ? `${message.guild.channels.cache.get(RulesChannel).name}` :"Ayarlı değil!" 

    const RegisterChannel = kanaldb.get(`RegisterChannel`)
    const register = RegisterChannel ? `${message.guild.channels.cache.get(RegisterChannel).name}` :"Ayarlı değil!" 

    const RegisterLogChannel = kanaldb.get(`RegisterLogChannel`)
    const reglog = RegisterLogChannel ? `${message.guild.channels.cache.get(RegisterLogChannel).name}` :"Ayarlı değil!" 


message.channel.send(embed.setDescription(`
Yaptığın ayarlar aşağıda listelenmiştir. Eksik olanları \`${conf.prefix}ayar-kanal ${conf.prefix}ayar-rol\` komutlarıyla tamamlayabilirsin!

${client.emojiler.sagok2} Roller;
\`\`\`
CrewRoles           : ${ekip}
GirlsRoles          : ${kız}
GirlsRoles2         : ${kız1}
BoysRoles           : ${erkek}
BoysRoles2          : ${erkek1}
UnregRoles          : ${kayıtsız}
RegisterHammer      : ${kayıtcı}
\`\`\`

${client.emojiler.sagok2} Kanallar;
\`\`\`
GeneralChat         : ${genelchat}
RulesChannel        : ${kurallar}
RegisterChannel     : ${register}
RegisterLogChannel  : ${reglog}
\`\`\`
`))

} else {
    return message.react(emoji.CarpiID)
}
}}