const answers=["Yes","No","Maybe So","Nah","Yaouh","Just Jump Dont Ask LMAO","Do it Pussy","Lag!","Brain Dead"];

function shake(msg,client,params){
    if(params.times){
        for(var i=0;i<params.times;i++){
           shakeOnce(msg,client,params);
        }
    }else{
        shakeOnce(msg,client,params);
    }
}

function shakeOnce(msg,client,params){
    let rng=randomBetween(0,answers.length-1);
    msg.channel.send(answers[rng]);
}

function randomBetween(min,max){
    return Math.floor(Math.random() * max) + min;
}

module.exports.shake=shake;