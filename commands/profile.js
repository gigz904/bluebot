const Discord = require("discord.js");

module.exports.run = async (message, args, bot, config, owner, membre_data, members_data) => {

    var quickdb = require('quick.db');
    quickdb.init('./bluebot.sqlite');
    var users_data = new quickdb.table('usersdata');

    message.channel.send(message.author+', chargement du profil en cours...');

    var member = message.mentions.members.size > 0 ? message.mentions.members.first() : message.member;
    var data = message.member = member ? membre_data : members_data[0];

    var request = require('request');

    require('request')('https://mee6.xyz/api/plugins/levels/leaderboard/'+message.guild.id, { json: true }, (err, res, body) => {

        body.players.forEach(element => {
            if(element.id === member.id){
                data.xp = element.xp,
                data.niv = element.level
            }
        });

        var profile_embed = new Discord.RichEmbed()
            .setAuthor('Profil de '+message.author.username+' !', message.author.displayAvatarURL)
            .setDescription(data.desc !== 'false' ? data.desc : 'Aucune description enregistrée !')
            .addField('💰 Argent', '**'+data.credits+'** bluecoin(s)', true)
            .addField('🎩 Réputation', '**'+data.rep+'** point(s)', true)
            .addField('👑 Premium', ((data.premium === 'true') ? 'Oui !' : 'Non...'), true)
            .addField('📊 Niveau', '**'+data.niv+'**', true)
            .addField('🔮 Expérience','**'+data.xp+'** xp', true)
            .addField('📅 Enregistré', 'Le '+data.registeredAt, true)
            .setColor(config.embed.color)
            .setFooter(config.embed.footer)

        message.channel.send(profile_embed);

    });

}

module.exports.help = {
    name:"profile",
    desc:"Affiche votre profil !",
    usage:"profile (@membre)",
    group:"économie",
    examples:"$profile"
}

module.exports.settings = {
    permissions:"false",
    disabled:"false",
    owner:"false"
}

