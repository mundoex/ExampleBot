function avatar(msg,client,params) {
    msg.reply(msg.author.avatarURL);
}
module.exports.avatar=avatar;