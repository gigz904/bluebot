const Discord = require("discord.js");
module.exports.run = async (message, args, bot, config) => {

    var superagent = require('superagent');

    message.channel.send('Image en cours de chargement...').then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'pgif'}).end((err, response) => {

            var embed_nsfw = new Discord.RichEmbed()
                .setAuthor('NSFW - Porn Gif')
                .setDescription('Requête de '+message.member.displayName)
                .setFooter(config.embed.footer)
                .setImage(response.body.message)
                .setColor(config.embed.color)
            
            m.edit(embed_nsfw);
    
        });
    });
    


}

module.exports.help = {
    name:"porngif",
    desc:"Génère une image NSFW de type `porngif`. Attention, ce type d'image peut choquer et est réservé aux membres de plus de 18 ans.",
    usage:"porngif",
    group:"NSFW",
    examples:"$porngif"
}

module.exports.settings = {
    permissions:"false",
    nsfw:"true",
    disabled:"false",
    owner:"false"
}