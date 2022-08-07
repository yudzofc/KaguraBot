const fs = require('fs')
const chalk = require('chalk')

//---------( APIKEY )---------//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//---------( SETTING )---------//
global.owner = ['6285693650294','6285600380823']
global.premium = ['6285693650294','6285600380823']
global.ownernomer = ['6285693650294','6285600380823']
global.ownername = ['YUDS',' Faisal']
global.botname = 'YUDSBOTz'
global.footer = 'YUDSBOTz'
global.thumb = fs.readFileSync('./image/fake.jpg')
global.veloriy = fs.readFileSync('./image/kagura.mp4')
global.sessionName = 'session'
global.packname = '© YUDSBOTz 🔥: 6285693650294'
global.author = '2022'
global.sp = '⭔'

//---------( INFO )---------//
global.youtube = 'https://chat.whatsapp.com/GnozSnJ1u2dK2KksHWzRsM'
global.ig = 'https://instagram.com/lebihkerendariandy_warholl.093'
global.mygc = 'https://chat.whatsapp.com/GnozSnJ1u2dK2KksHWzRsM'
global.myweb = 'https://bit.ly/profil_wahyu'
global.email = 'wahyudi.my.id@gmail.com'
global.region = 'Mars'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'
global.limitawal = {
premium: "Infinity",
free: 20,
}

//---------( RANDOM IMAGE )---------//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//---------( MESSAGES )---------//
global.mess = {
success: '*Nih bang...*',
admin: '*Kamu bukan admin bambang!*',
botAdmin: '*Bot Bukan Admin Tod!*',
owner: '*Kamu bukan owner ku anj*',
group: '*Coba fitur ini di grup*',
private: '_Cuma buat Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sabar kak..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//---------( PEMBATAS )---------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
