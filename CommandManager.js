var CommandManager=require("discord-bot-express").CommandManager;
const {Optional}=require("discord-bot-express").CommandBuilder;
const {StartsWith,EndsWith,Includes,Matches,Regex}=require("discord-bot-express").TriggerBuilder;
const {NotABot}=require("discord-bot-express").BotMiddleware;

const Permissions=require("./middleware/Permission");
const slap=require("./commands/slap/slap").slap;
const eightBall=require("./commands/8ball/8ball");
const pickOne=require("./commands/pick-one/pick-one").pickOne;
const attachment=require("./commands/examples/attachment").attachment;
const avatar=require("./commands/examples/avatar").avatar;
const embed=require("./commands/examples/embed").embed;
const pong=require("./commands/examples/pong").pong;
const triggers=require("./commands/triggers/triggers");
CommandManager.setPrefix("Bot ");
CommandManager.setTriggerRate(100);
CommandManager.use(NotABot);

CommandManager.command("slap :user",Permissions.isShinobi, slap)
.setDescription("Slaps user");

CommandManager.command("who right :option1 or :option2", pickOne)
.setDescription("Selects the person who is right");

CommandManager.command("8ball shake "+ Optional("times"), eightBall.shake)
.setDescription("shakes magic ball");

CommandManager.command("attachment", attachment);
CommandManager.command("avatar", avatar);
CommandManager.command("embed", embed);
CommandManager.command("ping", pong);

CommandManager.trigger(StartsWith("Ok"),triggers.okBoomer);
CommandManager.trigger(EndsWith("?"),triggers.question);
CommandManager.trigger(Includes("meme"),triggers.meme);
module.exports=CommandManager;