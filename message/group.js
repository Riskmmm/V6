const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (Fan, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await Fan.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await Fan.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(Fan.user.jid)) {
            Fan.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik ${prefix}menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(Fan.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await Fan.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = Fan.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                teks = `Halo Member baru\n${anu_user} \nIntro\n• Nama : \n• Umur :\n• Gender : \n• Asal :\n\n• Semoga Betah `
	            buff = fs.readFileSync(`media/foto/welcome.jpg`) 
                buttons = [{buttonId: `#`,buttonText:{displayText: 'Okey\nGw Mau Ngomong Kalo Gw Itu Gay'},type:1}]
                imageMsg = (await Fan.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${teks}`, footerText: '𝐅𝐚𝐧 𝐗7', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await Fan.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                Fan.relayWAMessage(prep)
}
            if (anu.action == 'remove' && !mem.includes(Fan.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await Fan.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = Fan.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                out = `Byee ${anu_user}`
                buff = fs.readFileSync(`media/foto/out.jpg`) 
                buttons = [{buttonId: `.`,buttonText:{displayText: 'BYE\nSAYANG AKHIRNYA GW, G GAY LAGI🗿'},type:1}]
                imageMsg = (await Fan.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${out}`, footerText: '𝐅𝐚𝐧 𝐗7', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await Fan.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                Fan.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}