///////////////////////////
// Aayu5h and Sahil
// https://discord.gg/uepgJzsf6n
// https://spicydevs.me/
///////////////////////////

const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          text-align: center;
          padding: 100px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
    </head>
    <body>
      <h1>Node.js Uptime Keep Alive</h1>
      <p>This is a keep-alive endpoint for your Node.js application.</p>
      <p>To ensure your application stays online 24/7, join our <a href="https://discord.gg/uepgJzsf6n">Discord server</a> and run the command:</p>
      <pre>/uptime add</pre>
      <p>Copy and paste the link of your host into our uptime monitoring app:</p>
    </body>
    </html>
  `);
});

function keepAlive() {
  server.listen(3000, async () => {
   await console.log("Server Online ✅!!");
  });
}

module.exports = keepAlive;

///////////////////////////
// Aayu5h and Sahil
// https://discord.gg/uepgJzsf6n
// https://spicydevs.me/
///////////////////////////
