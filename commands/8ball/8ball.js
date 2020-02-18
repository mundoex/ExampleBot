const responses = [
    // Yes
    "Well... yeah. It's kinda obvious.",
    "Sure, I guess.",
    "uhm... duh??",
    "How could I ever say no to you? :heart:",
    "Ye.",
    "Very, very likely",
    "I'm betting my life on it",
    "Yup yup",

    // Maybe
    "Maybe. Perhaps. I guess.",
    "Yes. Well, yes *and* no.",
    "No. Well, yes *and* no.",,
    "Just... I mean, if you want to?",
    "I suppose. It's not the first thing that comes to my mind though",
    "I *GUESS*",
    "I don't know, maybe?",
    "It's not *impossible*, it's just not likely.",

    // No
    "NO! NEVER!",
    "Uhm... I don't think so",
    "Yeah, no, definitely not.",
    "Not. A. Chance.",
    "No.",
    "GOD NO",
    "I am certain that is not the case, no.",
    "Oh, no no no no no. Just no.",

    // Unspecified
    "Ehh...",
    "I'm kinda busy here, can't you figure it out yourself?",
    "I don't think I wanna give my opinion on this.",
    "LEAVE ME ALONE REEEEEEE",
    "It Depends™",
    "On times like this, I like to ask myself: what would Jesus say?",
    "Great question. Just wonderful. I love it. Ask me again.",
    "Huh. Never thought of it that way. I'll sleep on it and get back to you tomorrow, 'k?",
];

function shake(msg,client,params) {
    if(params.times){
        for(var i=0;i<params.times;i++){
            let rng=randomBetween(1,responses.length);
            msg.channel.send(responses[rng-1]);
        }
    }else{
        let rng=randomBetween(0,responses.length-1);
        msg.channel.send(responses[rng]);
    }
}

function randomBetween(min,max){
    return Math.floor(Math.random() * max) + min;
}

module.exports.shake=shake;