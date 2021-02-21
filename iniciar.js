const Discord = require('discord.js');
const mineflayer = require('mineflayer');
const chalk = require('chalk')
const client = new Discord.Client();
const config = require("./config.json");

const miles = 18;
const calculateFeet = miles => miles * 5280;

let token = config.token;
let sending = false;
let chatData = [];

let ip = config.ip;
let ver = config.version;
let username = config.username;


let bot = mineflayer.createBot({
	version: ver,
	host: ip,
	username: username,
	loggedIn: true,
	ignoreRepeat: false,
	logErrors: false,
	checkTimeoutInterval: 30*1000
})

client.once('ready', () => {
	console.log(chalk.magenta('============================'))
	console.log(chalk.magenta('Bot, by programador Jaopz#0000'))
	console.log(chalk.green('connected Servidor discord...'));
	console.log(chalk.magenta('============================'))
});

bot.on('login', async () => {
	console.log(chalk.green(`I'm entering the ${ip}`))
})

bot.on('login', function() {
    console.log(chalk.green("connected to the server"));
    bot.chat("/register 990526203");
    bot.chat("/login 990526203");
    //bot.setControlState('forward', true);
});

client.login(token);