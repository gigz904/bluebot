const Discord = require("discord.js");

module.exports.run = async (message, args, bot, config, owner) => {

    var usr = message.mentions.members.first();
    if(!usr) return message.reply('mentionne un membre !');
    message.channel.send('Suppression des messages en cours...');
    let messages = await message.channel.fetchMessages({limit: 100});
    messages = messages.array().filter(m=>m.author.id === usr.id);
    message.channel.bulkDelete(messages);

}

module.exports.help = {
    name:"clear-all",
    desc:"Supprime les messages d'un membre !",
    usage:"clear-all [@membre]",
    group:"modération",
    examples:"$clear-all @Joshdu92#5698"
}

module.exports.settings = {
    permissions:"MANAGE_MESSAGES",
    disabled:"false",
    owner:"false"
}