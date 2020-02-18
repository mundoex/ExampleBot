const {Attachment}=require("discord.js");
function attachment(msg,client,params) {
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    msg.channel.send(attachment);
}

module.exports.attachment=attachment;