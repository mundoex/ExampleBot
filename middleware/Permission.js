const discord=require("discord.js");
/**
 * 
 * @param {discord.Message} msg 
 * @param {*} client 
 * @param {*} params 
 * @param {*} next 
 */
//Middleware function that checks if the user has the role shinobi
//Middleware similar to express
function isShinobi(msg,client,params,next) {
    const mem=msg.guild.member(msg.author);
    var isShinobi=false
    mem.roles.forEach(role=>{
        if(role.name==="Shinobi"){
            isShinobi=true;
        }
    });
    if(isShinobi){
        next();
    }else{
        msg.channel.send("Ninjas Only gets slapped for trying");
    }
}

module.exports.isShinobi=isShinobi;