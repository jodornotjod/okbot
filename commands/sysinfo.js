exports.run = (client, message) => {
    const sys = require('systeminformation');
    async function cpu() {
        try {
          const data = await si.cpu(manufacturer);
          message.channel.send(data)
        } catch {
          message.channel.send(e)
        }
      }
    }