const fs = require("fs");
const sys = require('systeminformation');
const Discord = require('discord.js');
const client = new Discord.Client();

let lib = JSON.parse(fs.readFileSync("./lib/config.json", "utf8"));

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  let eventFunction = require(`./events/${file}`);
	  let eventName = file.split(".")[0];
	  client.on(eventName, (...args) => eventFunction.run(client, ...args));
	});
	});

  client.on("guildDelete", guild => {
	console.log(`removed from ${guild.name} (id: ${guild.id})`);
	client.user.setGame(`on ${client.guilds.size} servers`);
  });

	const args = message.content.slice(lib.bot_prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

  	try {
	  let commandFile = require(`./commands/${command}.js`);
	  commandFile.run(client, message, args);
	} catch (err) {
	  console.error(err);
	};


client.login('MzM3MzAxMjI3NzY1NDk3ODU2.DFE8Aw.Rfqq3UmCWkz5crFOPrLFV0Za_PY');
