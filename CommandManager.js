var CommandManager=require("discord-bot-express").CommandManager;
const {Arg,Args,Optional}=require("discord-bot-express").CommandBuilder;
const {StartsWith,EndsWith,Includes,Matches,Regex}=require("discord-bot-express").TriggerBuilder;

const eightBall=require("./commands/8ball/8ball");
const triggers=require("./commands/triggers/triggers");
const pickOne=require("./commands/pick-one/pick-one");
CommandManager.setPrefix("Bot ")
CommandManager.setTriggerRate(100);

CommandManager.command("quem tem razao "+Arg("option1")+" ou "+Arg("option2")+" ?",pickOne.pickOne);
CommandManager.command("ball shake "+ Optional("times"), eightBall.shake);
CommandManager.trigger(EndsWith("?"), triggers.question);
CommandManager.trigger(StartsWith("ok"), triggers.okBoomer);
CommandManager.trigger(Includes("nigga"), triggers.nigga);

module.exports=CommandManager;