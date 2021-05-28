const Discord = require("discord.js")
const { Database } = require("ark.db")
const roldb = new Database('/Settings/roller.json')
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')

module.exports = {
    name : "ayar-rol",
    help : "ayar-rol",
    aliases : ["ayar-roller"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))
    if(![conf.OwnerRoles].some(rol => message.member.roles.cache.get(rol))) {

        if(args[0] == "UnregRoles") {
            let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
            if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
            await roldb.set(`UnregRoles`,rol.id);
            message.channel.send(embed.setDescription(`
    ${client.emojiler.yildiz} \`UnregRoles\` Aşağıdaki gibi Tanımlanmıştır
    
    ${rol}`))}

    if(args[0] == "GirlsRoles") {
        let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
        if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
        await roldb.set(`GirlsRoles`,rol.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`GirlsRoles\` Aşağıdaki gibi Tanımlanmıştır

${rol}`))}

    if(args[0] == "BoysRoles") {
        let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
        if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
        await roldb.set(`BoysRoles`,rol.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`BoysRoles\` Aşağıdaki gibi Tanımlanmıştır

${rol}`))}

    if(args[0] == "GirlsRoles2") {
        let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
        if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
        await roldb.set(`GirlsRoles2`,rol.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`GirlsRoles2\` Aşağıdaki gibi Tanımlanmıştır

${rol}`))
} 

if(args[0] == "BoysRoles2") {
    let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
    if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
    await roldb.set(`BoysRoles2`,rol.id);
    message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`BoysRoles2\` Aşağıdaki gibi Tanımlanmıştır

${rol}`))
} 
if(args[0] == "RegisterHammer") {
    let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
    if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
    await roldb.set(`RegisterHammer`,rol.id);
    message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`RegisterHammer\` Aşağıdaki gibi Tanımlanmıştır

${rol}`))
} 
    if(args[0] == "CrewRoles") {
        let rol=message.mentions.roles.first()||message.guild.roles.cache.get(args.splice(1)[0])||message.guild.roles.cache.find(r=>r.name===args.splice(1).join(''));
        if(!rol)return message.channel.send(embed.setDescription(`Bir rol belirtmeyi unuttun.`)).then(x=>x.delete({timeout:5000}))
        await roldb.set(`CrewRoles`,rol.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`CrewRoles\` Aşağıdaki gibi Tanımlanmıştır

${rol}`))
            }

} else { return message.react(emoji.CarpiID) }
}}