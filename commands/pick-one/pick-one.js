//access the options in the params variable
module.exports.pickOne=function pickOne(msg,client,params){
    const options=[params.option1,params.option2];
    let rng=randomBetween(1,2)-1;
    msg.channel.send(options[rng]);
}

function randomBetween(min,max){
    return Math.floor(Math.random() * max) + min;
}