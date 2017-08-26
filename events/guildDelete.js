exports.run = (client) => {
	console.log(`removed from ${guild.name} (id: ${guild.id})`);
    client.user.setGame(`on ${client.guilds.size} servers`);
}