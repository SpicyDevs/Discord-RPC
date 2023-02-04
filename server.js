///////////////////////////
// Sahil Khan and Aayu5h
// discord.gg/YttTcsttGw/
// https://s4h1l.ml/youtube/
// https://spicydevs.me/
///////////////////////////

const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`NOW GO TO ANY UPTIME APP and paste this link`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

///////////////////////////
// Sahil Khan and Aayu5h
// discord.gg/YttTcsttGw/
// https://s4h1l.ml/youtube/
// https://spicydevs.me/
///////////////////////////