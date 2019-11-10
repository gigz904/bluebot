const Discord = require("discord.js");

module.exports.run = async (message, args, bot, config) => {

    var the_server;
    
    if(!args[0]) the_server = message.guild;

    if(args[0]){
        the_server = bot.guilds.get(args[0]);
        if(!the_server) the_server = message.guild;
    }
    

    var nom = the_server.name;
    var afk_channel = (the_server.afkChannel) ? the_server.afkChannel.name : 'Pas de salon AFK';
    var nb_membres = the_server.memberCount;
    var emojis = the_server.emojis;
    var verification_level = the_server.verificationLevel;
    var region = the_server.region;
    var proprio = the_server.owner;
    var avatar = the_server.iconURL;
    var nb_roles = the_server.roles.size;
    var id = the_server.id;
    var nb_channels = the_server.channels.size;
    var embed_value = the_server.embedEnabled;
    var created_date = printDate(the_server.createdAt);
    var botCount = 0;
    var online = 0;
    var streamer = 0;
    var dnd = 0;
    var offline = 0;
    var afk = 0;
    var pjeu = 0;
    the_server.members.forEach(member => {
        if(member.user.bot) botCount++;
        if(member.presence.status === "dnd") dnd++;
        if(member.presence.status === "idle") afk++;
        if(member.presence.status === "offline") offline++;
        if(member.presence.status === "streamer") streamer++;
        if(member.presence.status === "online") online++;
        if(member.presence.game) pjeu++
    });


    if(region === "eu-central"){
    region = 'Europe Central';
    }
    if(region === "eu-west"){
    region = 'Europe de l\'Ouest';
    }
    if(region === "brazil"){
    region = 'Brésil';
    }
    if(region === "hongkong"){
    region = 'Hongkong';
    }
    if(region === "japan"){
    region = 'Japon';
    }
    if(region === "russia"){
    region = 'Russie';
    }
    if(region === "singapore"){
    region = 'Singapour';
    }
    if(region === "southafrica"){
    region = 'Sud de l\'Afrique';
    }
    if(region === "sydney"){
    region = 'Syndey';
    }
    if(region === "us-east"){
    region = 'Amérique d\'Est';
    }
    if(region === "us-south"){
    region = 'Amérique du Sud';
    }
    if(region === "us-central"){
    region = 'Amérique Central';
    }
    if(region === "us-west"){
    region = 'Amérique de l\'Ouest';
    }

    let embed = new Discord.RichEmbed()
    .setAuthor('Informations sur ' + nom)
    .setThumbnail(avatar)
    .setColor(config.embed.color)
    .addField('ID', id, true)
    .addField('Bots', botCount, true)
    .addField('Niveau de sécurité', verification_level, true)
    .addField('Channel AFK', afk_channel, true)
    .addField('Crée le', created_date, true)
    .addField('Région', region, true)
    .addField('Fondateur', proprio, true)
    .addField('Rôles', nb_roles, true)
    .addField('Membres', 'Total : **' + nb_membres + '**\nEn ligne : **' + online + '**\nNe pas déranger : **' + dnd + '**\nAFK : **' + afk + '**\nDéconnecté : **' + offline + '**', true)
    .addField('Salons', nb_channels, true)
    .setFooter(config.embed.footer, avatar)

    message.channel.send(embed);



    function printDate(pdate, displayh){
        var monthNames = [
            "janvier", "février", "mars",
            "avril", "mai", "juin", "juillet",
            "août", "septembre", "octobre",
            "novembre", "décembre"
        ];

        var day = pdate.getDate();
        var monthIndex = pdate.getMonth();
        var year = pdate.getFullYear();
        var hour = pdate.getHours();
        var minute = pdate.getMinutes();

        var thedate;
        if(displayh){
            thedate = day + ' ' + monthNames[monthIndex] + ' ' + year + " à " + hour + "h" + minute;
        }
        if(!displayh){
            thedate = day + ' ' + monthNames[monthIndex] + ' ' + year
        }

        return thedate;
    }
}

module.exports.help = {
    name:"serverinfo",
    desc:"Affiche des informations sur le serveur !",
    usage:"serverinfo [@membre]",
    group:"utils",
    examples:"$serverinfo"
}

module.exports.settings = {
    permissions:"false",
    disabled:"false",
    owner:"false"
}