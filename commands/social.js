const Discord = require("discord.js");

module.exports.run = async (message, args, bot, config, owner) => {

    var embed = new Discord.RichEmbed()
        .setAuthor('Nos réseaux')
        .setColor(config.embed.color)
        .setFooter(config.embed.footer)
        .addField('Youtube', 'https://www.youtube.com/channel/UCDnCP2_UGlWEMi8wVUdvHgA\nhttps://www.youtube.com/channel/UCuRZqDBVHszoysUiWEZ3lKQ')
        .addField('Twitter', 'https://twitter.com/BluelabsV')

    message.channel.send(embed);
    
}

module.exports.help = {
    name:"social",
    desc:"Affiche les réseaux de BlueLabs !",
    usage:"social",
    group:"utils",
    examples:"$social"
}

module.exports.settings = {
    permissions:"false",
    disabled:"false",
    owner:"false"
}