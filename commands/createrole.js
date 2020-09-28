const Discord = require('discord.js');
const db = require('quick.db')
const { yes , no , warn , think , loading} = require('../configbot//emojis.json')
exports.run = async (client, msg, args) => {
    if (!msg.member.hasPermission("MANAGE_ROLES","ADMINISTRATOR")) return msg.channel.send(`**${msg.author.tag} you dont have enough perms**. Permission required: \`MANAGE_ROLES\` or \`ADMINISTRATOR\``);
    const mentionedRole = msg.mentions.roles.first();
    if(!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.channel.send("Sorry but i don't have enough perms to do that command. Please verify my roles.")
    if(!args[1]) return msg.channel.send("**Something is wrong** Correct format : `deleterole <name>`")
    if(!mentionedRole) return msg.channel.send("I couldn't find that role.")
    if(mentionedRole.position >= msg.member.roles.highest.position && msg.author.id !== msg.guild.owner.id){
        return msg.channel.send("That role is higher than mine . I can't delete it.")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle(`Role deleted ${msg.guild.name}`)
    .setDescription(`${mentionedRole} was deleted succesful on ${msg.guild.name}. ${yes} `)
    .setColor('#97db98')
    .setTimestamp()
    msg.channel.send(embed)
    let chx = db.get(`modlog_${msg.guild.id}`, channel.id)
  
    if(chx === null) {
      return;
    }
    const embed1 = new Discord.MessageEmbed()
    .setAuthor(`${msg.author.tag} - ${msg.author.id}`,msg.author.displayAvatarURL({ dynamic: true}))
    .setTitle(`Logs ${msg.guild.name}`)
    .setDescription(`Role deleted \nChannel where the command was used : ${msg.channel}\n Used by ${msg.author.tag}(Id: ${msg.author.tag})`)
    .setColor("#ff6600")
    .setTimestamp()
    bot.channels.cache.get(chx).send(embed1)
    mentionedRole.delete().catch(error => msg.channel.send("From some error i can't delete that role ."))
    return undefined
}
exports.help = {
	name:"deleterole",
	usage: "<prefix>createrole <color> <name>",
}