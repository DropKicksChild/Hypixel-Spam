const mineflayer = require('mineflayer'); 
const cron = require('node-cron'); 
const spawn = require('child_process').spawn 

const credentials = [
  { username: "x", password: "x" }, // logins go here 

]

const ServerName = "X";
const ServerIP = "X";
const bot = []
for (let i = 0; i < credentials.length; ++i) {
  setTimeout(() => {
    createBot(credentials[i], () => {
      if (i === credentials.length) ready()
    })
  }, i * 500)
}

function createBot ({ username, password }, cb) {
  const bot = mineflayer.createBot({
    host: 'play.hypixel.net',
    username,
    password,
    version: "1.8.8"
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

bot.on('spawn', async (username, message) => {
  console.log(` said "${message}"`)
  await sleep(5000);
    if (username === bot.username) return
        for(let i = 0; i < 1000000; i++) {
            bot.chat('/p ') // ign goes here
            await sleep(1);
            bot.chat('/msg   beamed by capoo')
            await sleep(1);
            bot.chat('/p leave')
            }
    }
    
)}


