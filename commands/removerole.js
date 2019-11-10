const Discord = require("discord.js");

module.exports.run = async (message, args, bot, config, owner) => {

   var role = message.mentions.roles.first();
   if(!role) return message.reply('mentionne un rôle !');

   var member = message.mentions.members.first();
   if(!member) return message.reply('mentionne un membre !');

   member.removeRole(role).then( () => message.reply('rôle enlevé !')).catch(err => message.reply('je ne peux pas gérer cet utilisateur !'));
    
}

module.exports.help = {
    name:"remove",
    desc:"Enlève un rôle au membre mentionné.",
    usage:"remove [@role] [@membre]",
    group:"utils",
    examples:"$remove @Comunauté @Joshdu92"
}

module.exports.settings = {
    permissions:"MANAGE_ROLES",
    disabled:"false",
    owner:"false"
}