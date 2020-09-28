const figlet = require('figlet');
const Discord = require('discord.js')
const { yes , no , warn , think } = require('../configbot//emojis.json')
module.exports.run = async (client, msg, args) => {
    console.log(args);
        if(!args[0]) return msg.channel.send(`${warn} Correct format : ?ascii <text>`);
        console.log(msg)
        
        figlet.text(msg, function (err, data){
            if(err){
                console.log(`Something went wrong ${no}`);
                console.dir(err);
            }
            if(data.length > 2000) return msg.channel.send(`An error appeared ${no}`)
            let embed = new Discord.MessageEmbed()
            .setTitle('Ascii text')
            .setDescription('```' + data + '```\n')
            .setColor('RANDOM')
            .setFooter(`requested by ${msg.author.tag}`)
            msg.channel.send(embed)
            //('```' + data + '```\n') in pisda masi
        })
}
module.exports.help = {
    name:"ascii",
    usage: "ascii <text>",
}