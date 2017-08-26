exports.run = (client, message, args) => {
    if(!args || args.size < 1) return message.channel.send("what command do i reload lol");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`command ${args[0]} has been reloaded`);
  };