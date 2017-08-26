exports.run = (client, message, args) => {
    sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    sayMessage = sayMessage.replace("@everyone","at everyone");
    sayMessage = sayMessage.replace("@here","at here");    
    message.channel.send(sayMessage);
} 