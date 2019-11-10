const Discord = require("discord.js");

module.exports.run = async (message, args, bot, config, owner) => {

    message.delete();

    var the_member = message.mentions.members.first();

    if(!the_member)
        return message.reply('mentionne un membre !')

    if(!the_member.kickable)
        return message.channel.send("Une erreur est survenue. Ais-je bien un rôle supérieur à " + the_member + " ?");

    let raison = args.slice(1).join(' ');
    if(!raison) raison = "Pas de raison donnée.";
    raison = raison + ' | Expulsé par ' + message.author.username;

    the_member.kick(raison);

    message.channel.send(the_member.user.username+' a bien été expulsé du serveur !')

    var the_channel = message.guild.channels.get(config.logs_channel);
    
    if(the_channel) return the_channel.send('**'+the_member.user.username + '#'+the_member.user.discriminator+'** expulsé par **'+message.author.username+'#'+message.author.discriminator+'**');

}

module.exports.help = {
    name:"kick",
    desc:"Expulse le membre du serveur !",
    usage:"kick [@membre] [raison]",
    group:"modération",
    examples:"$kick @Joshdu92 Spam"
}

module.exports.settings = {
    permissions:"KICK_MEMBERS",
    disabled:"false",
    owner:"false"
}