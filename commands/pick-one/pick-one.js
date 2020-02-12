module.exports.pickOne=function pickOne(msg,client,params){
    let options=[params.option1,params.option2];
    msg.channel.send(options[Math.random()]);
}