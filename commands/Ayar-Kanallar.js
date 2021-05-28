const Discord = require("discord.js")
const { Database } = require("ark.db")
const kanaldb = new Database('/Settings/kanallar.json')
const conf = require('../Settings/config.json')
const emoji = require('../Settings/emoji.json')

module.exports = {
    name : "ayar-kanal",
    help : "ayar-kanal",
    aliases : ["ayar-kanallar"],

run : async(client,message,args) => {
    const embed = new Discord.MessageEmbed().setColor(conf.Color).setFooter(conf.Footer).setAuthor(message.member.displayName , message.author.avatarURL({ dynamic : true , size: 2048}))

    if(![conf.OwnerRoles].some(rol => message.member.roles.cache.get(rol))) {

    if(args[0] == "RegisterChannel") {
        let channel = message.guild.channels.cache.get(args.splice(1)[0]) || message.mentions.channels.first();
        if(!channel) return message.channel.send(embed.setDescription(`Bir kanal belirtmeyi unuttun.`)).then(x => x.delete({ timeout: 5000}))
        await kanaldb.set(`RegisterChannel`, channel.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`RegisterChannel\` Aşağıdaki Gibi Tanımlanmıştır.

${channel}`))
    }
    if(args[0] == "RulesChannel") {
        let channel = message.guild.channels.cache.get(args.splice(1)[0]) || message.mentions.channels.first();
        if(!channel) return message.channel.send(embed.setDescription(`Bir kanal belirtmeyi unuttun.`)).then(x => x.delete({ timeout: 5000}))
        await kanaldb.set(`RulesChannel`, channel.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`RulesChannel\` Aşağıdaki Gibi Tanımlanmıştır.

${channel}`))
    }
    if(args[0] == "RegisterLogChannel") {
        let channel = message.guild.channels.cache.get(args.splice(1)[0]) || message.mentions.channels.first();
        if(!channel) return message.channel.send(embed.setDescription(`Bir kanal belirtmeyi unuttun.`)).then(x => x.delete({ timeout: 5000}))
        await kanaldb.set(`RegisterLogChannel`, channel.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`RegisterLogChannel\` Aşağıdaki Gibi Tanımlanmıştır.

${channel}`))
    }
    if(args[0] == "GeneralChat") {
        let channel = message.guild.channels.cache.get(args.splice(1)[0]) || message.mentions.channels.first();
        if(!channel) return message.channel.send(embed.setDescription(`Bir kanal belirtmeyi unuttun.`)).then(x => x.delete({ timeout: 5000}))
        await kanaldb.set(`GeneralChat`, channel.id);
        message.channel.send(embed.setDescription(`
${client.emojiler.yildiz} \`GeneralChat\` Aşağıdaki Gibi Tanımlanmıştır.

${channel}`))
    }
    } else {return message.react(emoji.CarpiID)}
}}