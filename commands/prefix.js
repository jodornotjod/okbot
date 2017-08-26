exports.run = (client, message, args) => {
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    lib.prefix = newPrefix;
  
    fs.writeFile("./lib/config.json", JSON.stringify(lib), (err) => console.error);
  }