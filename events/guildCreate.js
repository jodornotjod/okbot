exports.run = (client) => {
    console.log(`joined ${guild.name} (id: ${guild.id}) with ${guild.memberCount} members`);
    client.user.setGame(`on ${client.guilds.size} servers`);
}
