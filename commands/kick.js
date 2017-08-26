exports.run = (client, message, [mention, ...reason]) => {

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.channel.send("you don't have permission to use this command");

  if (message.mentions.users.size === 0) {
    return message.channel.send("mention a user to kick");

    const kickMember = message.mentions.members.first();
    if (message.guild.me.hasPermission("KICK_MEMBERS")){
        
    kickMember.kick(reason.join(" ")).then(member => {
        message.channel.send(`${member.user.username} was succesfully kicked`);
    });
  }
  }
};