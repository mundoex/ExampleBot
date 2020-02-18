const CommandManager=require("./CommandManager");
const secret = require("./secret.json");
const discord = require("discord.js");
const client = new discord.Client();
client.login(secret.token);

client.on("ready",()=>{
    console.log("Online");
});

client.on("message",msg=>CommandManager.handleMessage(msg, client));