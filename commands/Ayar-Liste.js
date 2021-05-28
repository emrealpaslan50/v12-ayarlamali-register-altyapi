const { Database } = require("ark.db")
const Discord = require("discord.js")
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')

module.exports = {
    name : "ayar-liste",
    help : "ayar-liste",
    aliases : ["ayar-list"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(![conf.OwnerRoles].some(rol => message.member.roles.cache.get(rol))) {

message.channel.send(embed.setDescription(`
${client.emojiler.sagok2} Rol Ayarlamaları;
\`\`\`
CrewRoles
BoysRoles
BoysRoles2
GirlsRoles
GirlsRoles2
UnregRoles
RegisterHammer
\`\`\`
${client.emojiler.sagok2} Kanal Ayarlamaları;
\`\`\`
GeneralChat
RulesChannel
RegisterChannel
RegisterLogChannel
\`\`\`
`))

} else {
    return message.react(emoji.CarpiID)
}
}}