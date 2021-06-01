/*

HAI NAMAKU NAYLA
YAH DISINI AKU SEBAGAI PEMULA 
MAU MENCOBA MEMBUAT BOT SENDIRI
YANG PASTINYA PASTI BANYAK YG
BAKAL COPY PASTE/NYOLONG CASE
OKE TERIMA KASIH

*/
// [❗] THX TO JGN DIHAPUS/DIGANTI
// [❗] NAMA AUTHOR "NAYLA" JGN DI GANTI
// [❗] JANGAN DI PERJUAL BELIKAN
// [❗] PERATURAN DI LnaylaR? GW BERHENTI UPDATE

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		processTicksAndRejections,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const yts = require( 'yt-search')
const crypto = require('crypto') 
const axios = require("axios")
const ms = require('parse-ms')
const imageToBase64 = require('image-to-base64')
const { removeBackgroundFromImageFile } = require('remove.bg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const imgbb = require('imgbb-uploader')  
const ApikeyZailani = 'ZailaniGans'
const lolis = require('lolis.life')
const loli = new lolis()
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))
const { LeysApi, LolHuman, DapApi } = JSON.parse(fs.readFileSync('./src/apikey.json'))
/*OTRO**////
const { codepais } = require('./src/codepais')
const { g } = require('./src/g')
const { persona } = require('./src/persona')
const { destrava } = require('./src/destrava')
const { m2 } = require('./src/m2')
const { idioma } = require('./src/idioma')
const { modapk } = require('./src/modapk')
const { felix } = require('./src/felix')
const { fxxxx } = require('./src/fxxxx')
const { porno } = require('./src/por')
const { termux } = require('./src/termux')
const { ptbr } = require('./mess')
const { ayuda } = require('./src/ayuda')
const { instalar } = require('./src/instalar')
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   

apikey = nayz.apikey
auth0r = nayz.auth0r
replytroli = nayz.replytroli
prefix = setting.prefix
blocked = []
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz
tz = setting.tz 
fx = setting.fx
cr1 = setting.cr1
cr2 = setting.cr
promote = '*Hola Bienvenido🥳*'
numbernye = '0'
demote = '*Jajajajajajaa ya no eres admin🤣*'
leave = '\`\`\`Pedazo De Aborto 🥺👍🏿 Nunca Te Quisimos👋\`\`\`'
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownername = setting.ownername
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
ftake = 'Lord nayla Mengintai•_•',
gopay = setting.gopay
ovo = setting.ovo
btre = 'Sisa Energi:\n[BELOM DETECT]'
baterai = {
    baterai: 0,
    cas: false
}
dana = setting.dana
 battre = 100
// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./nayla/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const botx = JSON.parse(fs.readFileSync('./nayla/botx.json')) 
const imageh = fs.readFileSync('./lib/♡.jpeg')
const { help } = require('./src/help')
const { uploadimg } = require('./lib/uploadimg')
/* ===================================================[ Felixcrack ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                
 	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const nayla = new WAConnection()
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('SUSCRIBETE YT FELIXCRACK'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Conectando...')
        	})
	        nayla.on('open', () => {
	    	success('2', 'Ya me conecte 👌🏻')
         	})
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
        	})
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            nayla.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await nayla.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  = `┏━━━━━━━━━━━━━━━━━
┃          「 *𝗛𝗢𝗟𝗔* 」
┃@${num.split('@')[0]}👋
┃BIENVENIDO AL GRUPO 
┃*${mdata.subject}*
┃Usa ${prefix}fxbot\n┃Para Poder Usar El Bot
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃   「 *_BIENVENIDO_* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️ *Suscríbete*:
┠⊷️*http://bit.ly/2ZUH2jP
┠⊷️ *Grupo Oficial*:
┠⊷️ *http://bit.ly/3hpkba4
┠⊷️ *Escribe ${prefix}fxbot
┃⊷️ *Para Poder Usar El Bot*
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️「 *DESCRIPCIÓN* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
  ${mdata.desc}*
┗━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Adiós : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await nayla.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			
			teks = `𝙉𝙐𝙀𝙑𝙊 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\` 

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await nayla.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙎𝙀 𝙈𝘼𝙏𝙊 𝘼 𝙐𝙉 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Dato : Reciente\`\`\`

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			nayla.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked		
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	const nay1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": fake1} } } 
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const isBanned = ban.includes(sender)
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const itsMe = sender == botNumber ? true : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
            const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
			const isAntibocil = isGroup ? antibocil.includes(from) : false
            const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./src/fx.jpg`)}, "title": ftake, "description": "FzBot", "currencyCode": "USD", "priceAmount1000": "5000000000", "retailerId": "naylaGanz", "productImageCount": 1}, "businessOwnerJid": `12603763944@s.whatsapp.net`}}}
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false			 
			const isPrem = prem.includes(sender) || isOwner				
			const btrai = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": btre, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')} } }
			const isBotx = isGroup ? botx.includes(from) : false
			pushname = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined	
mess = {
                zen: 'Vtnc Zen',
				wait: `⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`,
				waitmusic: `⏳Espera un momento...⏳\n\nTu música se enviará en 2 minutos.\nSi no es así, intente especificar el nombre de la canción.`,
			    waitfig: `⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`,
			    waitgif: `⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`,
			    waitsfw: `⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`,
			    waitpor: `⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`,
                waitimg: `⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`,
				success: '✅Sucesso✅',
				nsfwoff: '「 ❗ 」LA FUNCION DE NSFW NO ESTÁ ACTIVA!',
                levelon: '✅função leveis foi ativada✅',
				leveloff: '❌função leveis foi desativada❌',
				levelnoton: '🚫A função leveis está desativada🚫',
				levelnol: 'Você está level 0... \njá se registrou para começar ganhar XP?',
				erro: {
                    ban: '🛂Você está banido🛂',
					stick: '❌Ocorreu um erro na criação de sticker❌',
					Iv: '❌Link inválido❌'
				},
				only: {
                    zen: 'vtnc Zen',
					group: '「 ❗ 」ESTE COMANDO SOLO SE PUEDE USAR EN GRUPOS',
					ownerG: `El comando solo puede ser utilizado por Felixcrack🕴`,
					lia: 'Só a Lia pode usar😳👌',
					ownerB: `「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI DUEÑO🕴`,
					admin: '「❗」ESTE COMANDO SOLO PUEDE SER USADO POR ADMINS DEL GRUPO.' ,
					Badmin: '「❗」ESTE COMANDO SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN' ,
					registrarB: `Olá ${pushname}\n\nVocê ainda não se registrou...\n\nPara se registrar e poder usar todos os comandos do bot, por favor use:\n\nComando: ${prefix}registrar seu nome|sua idade\nPor exemplo: ${prefix}registrar Italu|17`,
					
					}
			}								            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `LA FUNCION ${command} NO ESTA EN EL MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: nay1})
			}
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }	
            const addEliteUser = (userid, sender, time, serials) => {
	         const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./nayla/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }              
            const nayBulan = ['enero', 'febrero', 'Marzo', 'abril', 'Mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isElite = checkEliteUser(sender)
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','??','🍇','🍒']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu ','Masih lama','3 Bulan ','7 Bulan ','3 Tahun ','4 Bulan ','2 Bulan ','1 Tahun ','1 Bulan ','Coba ulangi']
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: NAYLACHAN\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=62812874133914:+62 812-8741-33914\n`
            + 'END:VCARD' 
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (isCmd && isBanned) {
            reply(ptbr.ban())
            return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mFELIXCRACK BOT1\x1b[1;37m]', time, color(command), 'De', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mFELIXCRACK BOT2\x1b[1;37m]', time, color('Comando'), 'De', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mFELIXCRACK BOT3\x1b[1;37m]', time, color(command), 'De', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mFELIXCRACK BOT4\x1b[1;37m]', time, color('Comando'), 'De', color(pushname), 'in', color(groupName), 'args :', color(args.length))
            const xxx = '```' 
            const fakethumb = (teks, yes) => {
            nayla.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpg'),quoted:nay,caption:yes})
        }
//============================
// AUTHOR FELIXCRACK
//============================ 
menuZ = `╭────────────────────╮  
│  Hola 👋 ${pushname}         
│  ¿𝘾𝙤𝙢𝙤 𝙀𝙨𝙩𝙖𝙨?                                         
╰────────────────────╮
╭────────────────────╯
${tz}Dueño: ${ownername}
${tz}Autor: FELIXCRACK 409
${tz}Mes: ${bulan}
${tz}Grupo: ${groupMetadata.subject}
${tz}Prefijo Del Bot: 「 ${prefix} 」
${tz}Estado: Encendido ✓
${tz}Chat's Totales: ${totalchat.length}
╰────────────────────╮  
╭────────────────────╯
${tz}NO SPAM AL BOT
${tz}NO AÑADIR A GRUPOS
╰────────────────────╮  
╭────────────────────╯
${tz}${prefix}menucreador
${tz}${prefix}grupomenu
${tz}${prefix}makermenu
${tz}${prefix}descargas
${tz}${prefix}soundmenu
${tz}${prefix}pornmenu
${tz}${prefix}internalmenu
${tz}${prefix}checkmenu
${tz}${prefix}wallpapers
${tz}${prefix}m18
${tz}${prefix}tagmenu
${tz}${prefix}gamemenu
${tz}${prefix}randomtext
${tz}${prefix}fastmenu
${tz}${prefix}islammenu
${tz}${prefix}certificado
${tz}${prefix}editfoto
╰────❲ BY ${ownername} ❳─────`
//============================
// THX TO JGN DI HAPU
//============================ 
const info1 = `🐳 = $200
🦈 = $121
🐬 = $104
🐋 = $94
🐟 = $87
🐠 = $79
🦐 = $62
🦑 = $34
🦀 = $17
🐚 = $2
${xxx}NOTE${xxx} : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`

const info2 = `🐔 = $200
🦃 = $121
🐿 = $104
🐐 = $94
🐏 = $87
🐖 = $79
🐑 = $62
🐎 = $34
🐺 = $17
🦩 = $2
${xxx}NOTE${xxx} : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`

const info3 = `🦋 = $200
🕷 = $121
🐝 = $104
🐉 = $94
?? = $87
🦅 = $79
🕊 = $62
🐧 = $34
🐦 = $17
🦇 = $2
${xxx}NOTE${xxx} : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`

const grupomenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳  
${tz}${prefix}hidetag

${tz}${prefix}add
${tz}${prefix}kick
${tz}${prefix}promote
${tz}${prefix}demote
${tz}${prefix}antilink
${tz}${prefix}welcome
${tz}${prefix}hidetag10
${tz}${prefix}group
${tz}${prefix}antigay
${tz}${prefix}antibocil
${tz}${prefix}antiwibu
${tz}${prefix}antijawa
${tz}${prefix}setout
${tz}${prefix}setwelcome
${tz}${prefix}setthumb
${tz}${prefix}katajago
${tz}${prefix}linkgc
${tz}${prefix}tagall
${tz}${prefix}delete
╰──❲ BY ${ownername} ❳`

const makermenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}tahta
${tz}${prefix}neon2
${tz}${prefix}wall
${tz}${prefix}wolf
${tz}${prefix}tfire
${tz}${prefix}ytgol
${tz}${prefix}ytsilver
${tz}${prefix}t3d
${tz}${prefix}logoa
${tz}${prefix}pornhub
${tz}${prefix}marvel
${tz}${prefix}leavest
${tz}${prefix}phcoment
${tz}${prefix}nulis
${tz}${prefix}neon1
${tz}${prefix}text3d
${tz}${prefix}galaxy
${tz}${prefix}gaming
${tz}${prefix}colors$
${tz}${prefix}kling
${tz}${prefix}barcode
${tz}${prefix}qrcode
${tz}${prefix}8bit
${tz}${prefix}burn
${tz}${prefix}fire
${tz}${prefix}google
${tz}${prefix}battle
${tz}${prefix}block
${tz}${prefix}candy
${tz}${prefix}potter
${tz}${prefix}silk
${tz}${prefix}water
${tz}${prefix}pubg
${tz}${prefix}neon
${tz}${prefix}coffe1
${tz}${prefix}coffe
${tz}${prefix}tiktok
${tz}${prefix}shadow
${tz}${prefix}romance
${tz}${prefix}glass
${tz}${prefix}naruto
${tz}${prefix}mug1
${tz}${prefix}love
${tz}${prefix}mug
${tz}${prefix}neon1
${tz}${prefix}smoke
${tz}${prefix}rainbow
${tz}${prefix}nulis1
${tz}${prefix}nulis2
${tz}${prefix}nulis3
${tz}${prefix}nulis4
${tz}${prefix}nulis5
${tz}${prefix}nulis6
${tz}${prefix}video1
${tz}${prefix}video2
${tz}${prefix}video3
${tz}${prefix}video4
${tz}${prefix}video5
${tz}${prefix}video6
╰──❲ BY ${ownername} ❳`

const descargas = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}tiktokmusic 
${tz}${prefix}tiktoknowm 
${tz}${prefix}igfoto 
${tz}${prefix}igvideo 
${tz}${prefix}ytsearch
${tz}${prefix}ytmp3
${tz}${prefix}ytmp4
${tz}${prefix}play 
${tz}${prefix}brainly
╰──❲ BY ${ownername} ❳`

const soundmenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}sound1
${tz}${prefix}sound2
${tz}${prefix}sound3
${tz}${prefix}sound4
${tz}${prefix}sound5
${tz}${prefix}sound6
${tz}${prefix}sound7
${tz}${prefix}sound8
${tz}${prefix}sound9
${tz}${prefix}sound10
${tz}${prefix}sound11
${tz}${prefix}sound12
${tz}${prefix}sound13
${tz}${prefix}sound14
${tz}${prefix}sound15
${tz}${prefix}sound16
${tz}${prefix}sound17
${tz}${prefix}sound18
${tz}${prefix}sound19
${tz}${prefix}sound20
${tz}${prefix}sound21
${tz}${prefix}sound22
${tz}${prefix}sound23
${tz}${prefix}sound24
${tz}${prefix}sound25
╰──❲ BY ${ownername} ❳`

const pornmenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}indo1 
${tz}${prefix}indo2 
${tz}${prefix}indo3 
${tz}${prefix}indo4 
${tz}${prefix}indo5 
${tz}${prefix}indo6 
${tz}${prefix}indo7 
${tz}${prefix}indo8 
${tz}${prefix}indo9
${tz}${prefix}indo19 
${tz}${prefix}indo20 
${tz}${prefix}indo21 
${tz}${prefix}indo22 
${tz}${prefix}indo23 
${tz}${prefix}indo24 
${tz}${prefix}indo25
╰──❲ BY ${ownername} ❳`

const internalmenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}chatlist
${tz}${prefix}addsticker
${tz}${prefix}addvn
${tz}${prefix}getvn
${tz}${prefix}getsticker
${tz}${prefix}liststicker
${tz}${prefix}listvn
${tz}${prefix}addimage
${tz}${prefix}getimage
${tz}${prefix}imagelist
${tz}${prefix}addvideo
${tz}${prefix}getvideo
${tz}${prefix}listvideo
╰──❲ BY ${ownername} ❳`

const wallpapers = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}cyberspace
${tz}${prefix}tecnologia
${tz}${prefix}hacker
${tz}${prefix}muslin
${tz}${prefix}montañas
╰──❲ BY ${ownername} ❳`

const m18 = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}holo
${tz}${prefix}solo
${tz}${prefix}ero
${tz}${prefix}spank
${tz}${prefix}erofeet
${tz}${prefix}feet
${tz}${prefix}holoero
${tz}${prefix}classic
${tz}${prefix}cum
${tz}${prefix}eroyuri
${tz}${prefix}eron
${tz}${prefix}pwankg
${tz}${prefix}anal
${tz}${prefix}lewdkemo
${tz}${prefix}lewd
${tz}${prefix}solog
${tz}${prefix}lewdk
${tz}${prefix}hentai
${tz}${prefix}blowjob
${tz}${prefix}hololewd
${tz}${prefix}trap
${tz}${prefix}les
${tz}${prefix}smallboobs
${tz}${prefix}futanari
${tz}${prefix}femdem
${tz}${prefix}feed
${tz}${prefix}erok
${tz}${prefix}feetg
${tz}${prefix}erokemo
${tz}${prefix}boobs
${tz}${prefix}nsfwloli
${tz}${prefix}pussy
${tz}${prefix}tits 1, 2, 3... 9
╰──❲ BY ${ownername} ❳`

const checkmenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}randomship
${tz}${prefix}gayme
${tz}${prefix}gay
${tz}${prefix}goblokcek
${tz}${prefix}begocek
${tz}${prefix}pintercek
${tz}${prefix}jagocek
${tz}${prefix}nolepcek
${tz}${prefix}babicek
${tz}${prefix}bebancek
${tz}${prefix}baikcek
${tz}${prefix}jahatcek
${tz}${prefix}anjingcek
${tz}${prefix}haramcek
${tz}${prefix}kontolcek
${tz}${prefix}pakboycek
${tz}${prefix}pakgirlcek
${tz}${prefix}sangecek
${tz}${prefix}bapercek
╰──❲ BY ${ownername} ❳`

const tagmenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}ganteng
${tz}${prefix}cantik
${tz}${prefix}jelek
${tz}${prefix}goblok
${tz}${prefix}bego
${tz}${prefix}pinter
${tz}${prefix}jago
${tz}${prefix}babi
${tz}${prefix}beban
${tz}${prefix}baik
${tz}${prefix}jahat
${tz}${prefix}anjing
${tz}${prefix}monyet
${tz}${prefix}haram
${tz}${prefix}kontol
${tz}${prefix}pakboy
${tz}${prefix}pakgirl
${tz}${prefix}sadboy
${tz}${prefix}sadgirl
${tz}${prefix}wibu
${tz}${prefix}nolep
${tz}${prefix}hebat
╰──❲ BY ${ownername} ❳`

const gamemenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}slot
${tz}${prefix}simi
${tz}${prefix}jumlah
${tz}${prefix}reverse
${tz}${prefix}tebakgambar
${tz}${prefix}nickff
${tz}${prefix}kapankah
${tz}${prefix}apakah
${tz}${prefix}ramalnomer 
${tz}${prefix}ramalcinta 
${tz}${prefix}jodohbali 
${tz}${prefix}ramalnikah 
${tz}${prefix}taksirmimpi 
${tz}${prefix}suit                   
${tz}${prefix}boomtext
${tz}${prefix}holoh
${tz}${prefix}heleh
${tz}${prefix}huluh
${tz}${prefix}hilih
${tz}${prefix}halah 
${tz}${prefix}kapital
${tz}${prefix}textfont
${tz}${prefix}tebak
${tz}${prefix}oxo
${tz}${prefix}pesan
${tz}${prefix}tebakkimia
${tz}${prefix}tebaklirik
${tz}${prefix}tebakin1
${tz}${prefix}tebakin2
╰──❲ BY ${ownername} ❳`

const randomtext = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}quotes2
${tz}${prefix}quotes1
${tz}${prefix}kusonime
${tz}${prefix}renungan
${tz}${prefix}samehadaku
${tz}${prefix}infonomer
${tz}${prefix}jadwaltv
${tz}${prefix}tvjadwal
${tz}${prefix}fml
${tz}${prefix}cinta
${tz}${prefix}resepmasakan
${tz}${prefix}cersex
${tz}${prefix}cerpen
${tz}${prefix}jadwalsholat
${tz}${prefix}pantun
${tz}${prefix}cuaca
${tz}${prefix}namaninja
${tz}${prefix}fake
${tz}${prefix}spamcall
${tz}${prefix}spamemail
${tz}${prefix}quotes
${tz}${prefix}quotesnime
${tz}${prefix}kbbilazimedia
${tz}${prefix}covid
${tz}${prefix}wikiid
${tz}${prefix}wikien
${tz}${prefix}covidid
${tz}${prefix}kbbi
${tz}${prefix}infogempa
${tz}${prefix}randomquran
${tz}${prefix}kisanabi
${tz}${prefix}artinama
${tz}${prefix}artimimpi
${tz}${prefix}artijadian
${tz}${prefix}chord
${tz}${prefix}lirik
╰──❲ BY ${ownername} ❳`

const fastmenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}fb
${tz}${prefix}tts
${tz}${prefix}steam
${tz}${prefix}stalktwit
${tz}${prefix}stalkgithub 
${tz}${prefix}randomhusbu
${tz}${prefix}pinterest
${tz}${prefix}randomwaifu
${tz}${prefix}randomwaifu1
${tz}${prefix}stalkig
${tz}${prefix}estetikpic
${tz}${prefix}memeindo
${tz}${prefix}darkjokes
${tz}${prefix}urlshort
${tz}${prefix}shortener
${tz}${prefix}fox
${tz}${prefix}dog
${tz}${prefix}cat
${tz}${prefix}panda
${tz}${prefix}panda1
${tz}${prefix}bird
${tz}${prefix}koala
${tz}${prefix}meme  
${tz}${prefix}asupan
${tz}${prefix}asupan1
${tz}${prefix}asupan2
${tz}${prefix}ngakak
${tz}${prefix}pin 
${tz}${prefix}foto 
${tz}${prefix}bts
${tz}${prefix}exo
${tz}${prefix}blackpink
${tz}${prefix}attp
${tz}${prefix}manga1
${tz}${prefix}character
${tz}${prefix}ttp4
${tz}${prefix}ttp3
${tz}${prefix}ttp2
${tz}${prefix}ttp1
${tz}${prefix}sticker
${tz}${prefix}stickergif
${tz}${prefix}bug
╰──❲ BY ${ownername} ❳`

const certificado = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}ffserti 
${tz}${prefix}ffserti2
${tz}${prefix}ffserti3
${tz}${prefix}ffserti4
${tz}${prefix}ffserti5
${tz}${prefix}pubgserti
${tz}${prefix}pubgserti2
${tz}${prefix}pubgserti3
${tz}${prefix}pubgserti4
${tz}${prefix}pubgserti5
${tz}${prefix}mlserti
${tz}${prefix}mlserti2
${tz}${prefix}mlserti3
${tz}${prefix}mlserti4
${tz}${prefix}mlserti5
╰──❲ BY ${ownername} ❳`

const menucreador = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}dellprem 
${tz}${prefix}addprem
${tz}${prefix}clearall
${tz}${prefix}bc
${tz}${prefix}owner
${tz}${prefix}author
${tz}${prefix}bugtroli
${tz}${prefix}setout
${tz}${prefix}setwelcome
${tz}${prefix}settz
${tz}${prefix}setthum
${tz}${prefix}setpp
${tz}${prefix}setprefix
${tz}${prefix}setreply
╰──❲ BY ${ownername} ❳`

const editfoto = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}pistolacruzada 
${tz}${prefix}quemar
${tz}${prefix}lapiz
${tz}${prefix}playadenoche
${tz}${prefix}disfraz
${tz}${prefix}facebookpage
${tz}${prefix}gtav
${tz}${prefix}detecciondeedad
${tz}${prefix}removebg
${tz}${prefix}deteccionderostro
${tz}${prefix}wanted
╰──❲ BY ${ownername} ❳`

const islammenu = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}asmaulhusna 
${tz}${prefix}ayatkursi
${tz}${prefix}bacaansholat
${tz}${prefix}doaharian
${tz}${prefix}kisahnabi
${tz}${prefix}niatsholat
${tz}${prefix}tahlil
${tz}${prefix}wirid
╰──❲ BY ${ownername} ❳`

const menuespecial = `╭──❲ 𝗙𝗫 𝗕𝗢𝗧 ❳
${tz}${prefix}randomwibu
${tz}${prefix}phkomen
${tz}${prefix}semoji
${tz}${prefix}jadian
${tz}${prefix}citacita
${tz}${prefix}laut
${tz}${prefix}darat
${tz}${prefix}udara
${tz}${prefix}fakta
${tz}${prefix}gcard
${tz}${prefix}ssweb
${tz}${prefix}katailham
${tz}${prefix}randomwibu
╰──❲ BY ${ownername} ❳`

const menufx = `╭────────────────╮  
│         🇫 🇽  🇧 🇴 🇹                                                        
╰────────────────╮
╭────────────────╯
${tz}Dueño: ${ownername}
${tz}Autor: FELIXCRACK 409
${tz}Mes: ${bulan}
${tz}Grupo: ${groupMetadata.subject}
${tz}Prefijo Del Bot: 「 ${prefix} 」
${tz}Estado: Encendido ✓
${tz}Chat's Totales: ${totalchat.length}
╰────────────────╮  
╭────────────────╯
${tz}NO SPAM AL BOT
${tz}NO AÑADIR A GRUPOS
╰────────────────╮  
╭────────────────╯
├─ ${tz} ${prefix}grupomenu
├─ ${tz} ${prefix}ownermenu
├─ ${tz} ${prefix}islammenu
├─ ${tz} ${prefix}downloadmenu
├─ ${tz} ${prefix}matematikamenu
├─ ${tz} ${prefix}soundmenu
├─ ${tz} ${prefix}nsfwmenu
├─ ${tz} ${prefix}makermenu
├─ ${tz} ${prefix}stalkermenu
├─ ${tz} ${prefix}imageeditmenu
├─ ${tz} ${prefix}sertificadomenu
├─ ${tz} ${prefix}informationmenu
├─ ${tz} ${prefix}stickermenu
├─ ${tz} ${prefix}funmenu
├─ ${tz} ${prefix}mediamenu
├─ ${tz} ${prefix}spammenu
├─ ${tz} ${prefix}filmmenu
├─ ${tz} ${prefix}toolsmenu
├─ ${tz} ${prefix}animemenu
├─ ${tz} ${prefix}searchingmenu
└─ ${tz} ${prefix}paismenu
me perdu jdjsususua
└─ ❏ BY ${ownername}`

const prem1 = `Lo Siento No Eres Premium Para Poder Usar La Funcion ${xxx}${command}${xxx} Debes Ser Premium, Contacte Al Propietario.`
    
const nayzelite = `╭════════════════════⊷
┃✜╿➻ *NO ESTAS VERIFICADO* ]─
┃✜╿➻ Estado: No verificado ❌
┃✜╿➻ Nombre: ${pushname}
┃✜╿➻ Suscríbete
┃✜╿➻ https://cutt.ly/abXGT0K
┃✜╿➻ Escribe ${prefix}fxbot
┃✜╰──────────────────
╰════════════════════⊷`

const elitenay = `╭════════════════════⊷ 
┃✜╭─[ *VERIFICACIÓN* ]───
┃✜╿➻ Estado: Verificado ✔️
┃✜╿➻ Nombre: ${pushname}
┃✜╿➻ Escribe: ${prefix}menu
┃✜╿➻ Info Del Dot? ${prefix}info
┃✜╿➻ Dueño? ${prefix}owner
┃✜╿➻ Otro? ${prefix}other
┃✜╿➻ Escribe ${prefix}felix para mas información
┃✜╰──────────────────
╰════════════════════⊷`
			
//simi infinito creado por Samu330
            
            const simih = async (text) => {
	        try {
            const sami = await fetchJson(`https://api.simsimi.net/v1/?text=${text}&lang=es`, {method: 'GET'})
	        const samu = (`${sami.success}`)
		    return `${samu}`
	        } catch {
		    return 'Simi no reconoce tu idioma, acaso es alienigena?:0'
		
	}
}
        
			       switch (command) {
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
/*			        
			        
			        
			        MAU NYOLOMG CASE YA OM?? 
			        SETIDAKNYA ADD NAMA GW LAH
			        DI THX TO BOT KLEAN "NAYLA"
			        GK MAU?? OKE TERIMAKASIH			       			        
			        			       			        			       			        			       			        			        
			        
			        
//		 NUEVAS FUNCIONES***/
case 'minion':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(7)				  
				anu = await getBuffer(`https://api.xteam.xyz/textpro/minion3d?text=${F}&APIKEY=10b9f9398549cb23`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break

//MENU NSFW
case 'fakefake':
            if (args.length == 0) return reply(from, `Uso :\n${prefix}fakefake frase a etiquetar|respuesta`, FakeTextt)
            var fakefake = body.slice(9)
            var usuario1 = fakefake.split("|")[0];
            var usuario2 = fakefake.split("|")[1];
            nayla.sendMessage(from, usuario2, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from }: {}) }, message: { conversation: `${usuario1}`}}})
            break
case 'loli2':
				if (!isNsfw) return reply(mess.nsfwoff)
				reply(naylachan)
				fx = await getBuffer(`https://lolhuman.herokuapp.com/api/random/loli?apikey=oniichan`)
				nayla.sendMessage(from, fx, image, {quoted: nay})
				break
case 'neko':
				if (!isNsfw) return reply(mess.nsfwoff)
				reply(naylachan)
				fx = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=oniichan`)
				nayla.sendMessage(from, fx, image, {quoted: nay})
				break
case 'waifu':
				if (!isNsfw) return reply(mess.nsfwoff)
				reply(naylachan)
				fx = await getBuffer(`https://lolhuman.herokuapp.com/api/random/waifu?apikey=oniichan`)
				nayla.sendMessage(from, fx, image, {quoted: nay})
				break
case 'nsfwneko':
				if (!isNsfw) return reply(mess.nsfwoff)
				reply(naylachan)
				fx = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/neko?apikey=oniichan`)
				nayla.sendMessage(from, fx, image, {quoted: nay})
				break
case 'nsfwwaifu':
				if (!isNsfw) return reply(mess.nsfwoff)
				reply(naylachan)
				fx = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/waifu?apikey=oniichan`)
				nayla.sendMessage(from, fx, image, {quoted: nay})
				break
case 'nsfwloli':
				if (!isNsfw) return reply(mess.nsfwoff)
				reply(naylachan)
				fx = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/loli?apikey=oniichan`)
				nayla.sendMessage(from, fx, image, {quoted: nay})
				break

case 'togif':
if (!isElite) return reply(nayzelite)
reply(naylachan)
                                        if (!isQuotedSticker) return reply('Responde a un sticker')
                                        reply(mess.wait)
                                        if (nay.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await nayla.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`https://lolhuman.herokuapp.com/api/convert/towebp?apikey=oniichan&img=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        nayla.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: '𝔊𝕆∂-ƒ🅴𝕷𝕴𝑋', quoted: nay})
                                }
                                break
				case 'simi':
					if (args.length < 1) return reply('Y el texto we?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://api.simsimi.net/v1/?text=${text}&lang=es=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi no reconoce tu idioma, acaso es alienigena?:0')
					reply(anu)
					break
case 'joingc':
					
					if (!isOwner) return  reply(ptbr.ownerB())
codeInvite = body.slice(32)
response = await nayla.acceptInvite(codeInvite)
reply('Done!!!')
console.log(response)
break

case 'say':
case 'escribe':
                                        teks = body.slice(5)
                                        if (args.length < 1) return reply('donde esta el texto?')
                                        saying = teks
                                        nayla.sendMessage(from, saying, text)
                                        break
				case 'tovideo':
				if (!isElite) return reply(nayzelite)
				reply(naylachan)
					if (!isQuotedSticker) return reply('Etiqueta un gif')
					reply(naylachan)
					anumedia = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await nayla.downloadAndSaveMediaMessage(anumedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						nayla.sendMessage(from, buffers, video, { quoted: nay, caption: 'DONE...' })
						fs.unlinkSync(ran)
					})
					break
case 'wallpapersearch':
if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/wallpaper?apikey=oniichan&query=${query}`)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break
case 'wallpapersearch2':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/wallpaper2?apikey=oniichan&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break  
case 'gimage':
if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
reply(naylachan)
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/gimage?apikey=oniichan&query=${query}`)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break

case 'loli': 
if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
reply(naylachan)
                    reply(naylachan)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/gimage?apikey=oniichan&query=Loli HD 4k`)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break
case 'stickersearch':
if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
reply(naylachan)
					if (args.length < 1) return reply(ind.wrongf())
					reply(naylachan)
					query = args.join(" ")
					nayla = await getBuffer(`https://lolhuman.herokuapp.com/api/stickerwa?apikey=oniichan&query=${query}`)
					nayla.sendMessage(from, nayla, sticker, {quoted: nay})
					
					break  
					case 'hentai': 
					if (!isElite) return reply(nayzelite)
					if (!isPrem) return reply(prem1)
                    reply(naylachan)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/gimage?apikey=oniichan&query=hentai hd`)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break
case 'ban':
if (!isElite) return reply(nayzelite)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(ptbr.ownerB())
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return 
mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isElite) return reply(nayzelite)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(ptbr.ownerB())
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return 
mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
break
case 'ghost':
if (!isElite) return reply(nayzelite)
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nayla.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} })
						fs.unlinkSync(ran)
					    })
				       break
case 'fast':
if (!isElite) return reply(nayzelite)
reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nayla.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay})
						fs.unlinkSync(ran)
					})
					break
case 'bass':                 
if (!isElite) return reply(nayzelite)
reply(naylachan)
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nayla.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay})
						fs.unlinkSync(ran)
					})
				break
case 'tomp3':
if (!isElite) return reply(nayzelite)
reply(naylachan)
                	nayla.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ Responde el video ❌')
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Error al convertir video a mp3 ❌')
						buffer = fs.readFileSync(ran)
						nayla.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: nay})
						fs.unlinkSync(ran)
					})
					break
case 'spotify':
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/spotify?apikey=oniichan&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: nay })
                    break
case 'spotifysearch':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Control NCS`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/xnxxsearch?apikey=beta&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
case 'ytmp4':  
                     if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('¿Y el link we?')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalido Weon 😑🔪')
                    reply(naylachan)   
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=10b9f9398549cb23`)
					
					anu1 = `DESCARGADOR MP4 BY FELIXCRACK\n\n`
                    anu1 += `✨ Titulo: ${anu.judul}\n`
                    anu1 += `⚖️Tamaño: ${anu.size}\n`                    
					anu2 = await getBuffer(anu.thumbnail)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu3, video, { mimetype: 'video/mp4', duration :-999999999999999999, quoted: nay })
					break                  
case 'ttp':
if (!isElite) return reply(nayzelite)
if (isBanned) return reply('Você está banido')
reply(naylachan)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo 👀: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=oniichan&text=${txt}`)
                    nayla.sendMessage(from, buffer, sticker, { quoted: nay })
                    break
case 'ttp2':
if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
reply(naylachan)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo 👀: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp2?apikey=oniichan&text=${txt}`)
                    nayla.sendMessage(from, buffer, sticker, { quoted: nay })
                    break
                  case 'ttp3':
                  if (!isElite) return reply(nayzelite)
                  if (!isPrem) return reply(prem1)
                  reply(naylachan)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo 👀: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=oniichan&text=${txt}`)
                    nayla.sendMessage(from, buffer, sticker, { quoted: nay })
                    break
				case 'ttp4':
				if (!isElite) return reply(nayzelite)
				if (!isPrem) return reply(prem1)
				reply(naylachan)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo 👀: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp4?apikey=oniichan&text=${txt}`)
                    nayla.sendMessage(from, buffer, sticker, { quoted: nay })
                    break
case 'attp2':
if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
reply(naylachan)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo 👀: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=oniichan&text=${txt}`)
                    nayla.sendMessage(from, buffer, sticker, { quoted: nay })
                    break   
                    case 'amongus':
                    if (!isElite) return reply(nayzelite)
                    if (!isPrem) return reply(prem1)
                    reply(naylachan)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo 👀: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/amongus?apikey=oniichan&text=${txt}`)
                    nayla.sendMessage(from, buffer, sticker, { quoted: nay })
                    break
case 'xnxxsearch':
if (!isElite) return reply(nayzelite)
if (!isNsfw) return reply(mess.nsfwoff)
                    if (!isPrem) return reply(prem1)
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} Japanese`)
                    reply(naylachan)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=oniichan&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'play3':
                reply(naylachan)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=FELIXCRACKAPI409`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canción encontrada!!!*\nTítulo : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                nayla.sendMessage(from, buffer, image, {quoted: nay, caption: infomp3})
                nayla.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', duration :-999999999999999999, filename: `${anu.title}.mp3`, quoted: nay})
                break
case 'play':
if (!isPrem) return reply(prem1)
if (!isElite) return reply(nayzelite)                    
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Control NCS`)
                    reply(naylachan)                  
                    query = args.join(" ")
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/ytplay?apikey=oniichan&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Titulo: ${get_info.title}\n`
                    ini_txt += `🕵🏻‍♀️️Publicador: ${get_info.uploader}\n`
                    ini_txt += `🕐Duracion: ${get_info.duration}\n`
                    ini_txt += `👀Vistas: ${get_info.view}\n`
                    ini_txt += `👍🏻Like: ${get_info.like}\n`
                    ini_txt += `👎🏻Dislike: ${get_info.dislike}\n`
                    ini_txt += `📋Descripcion:\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    nayla.sendMessage(from, buffer, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999999, filename: `${get_info.title}.mp3`, quoted: nay })
                    break
case 'play2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Control NCS`)
                    reply ('Espera ⌛ Tu musica se enviara en unos segundos!!')
                    query = args.join(" ")
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/ytplay2?apikey=oniichan&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: nay })
                    get_video = await getBuffer(get_result.video)
                    nayla.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: nay })
                    break
case 'ytplay':
if (!isPrem) return reply(prem1)
if (!isElite) return reply(nayzelite)
reply(naylachan)
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} sempai.mp4`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=oniichan&query={query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `📋 Título: ${get_info.title}\n`
                    ini_txt += `🤓Publicador: ${get_info.uploader}\n`
                    ini_txt += `⌛Duration: ${get_info.duration}\n`
                    ini_txt += `👀Vistas: ${get_info.view}\n`
                    ini_txt += `👍🏻Likes: ${get_info.like}\n`
                    ini_txt += `👎🏻Dislikes: ${get_info.dislike}\n`
                    ini_txt += `📜Descripción:\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: nay})
                    break
case 'googlesearch':
                    if (!isPrem) return reply(prem1)
if (!isElite) return reply(nayzelite)
reply(naylachan)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=oniichan&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `👀 Titulo: ${x.title}\n`
                        ini_txt += `📎 Enlace: ${x.link}\n`
                        ini_txt += `📋 Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'tourl':
if (!isElite) return reply(nayzelite)
var imgbb = require('imgbb-uploader')
if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
reply('En Proceso ⌛')
owgi = await nayla.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break
case 'greenbush':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(9)				  
				anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto1/greenbush?apikey=oniichan&text=${F}`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break
case 'matrix':
					if (!isElite) return reply(nayzelite)	
					gh = `${body.slice(8)}`
					confus = gh.split("/")[0];				
					if (args.length < 1) return reply('Donde esta el texto?')	
					reply(naylachan)
		            buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=FELIXCRACKAPI409&text=${confus}`)
		            nayla.sendMessage(from, buffer, image, {quoted: nay})
					break
    
                   case 'flower':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://xinzbot-api.herokuapp.com/api/textmaker/alam?text=Zhirrr&theme=flower&apikey=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'horror':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(7)				  
				anu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/horrorblood?apikey=oniichan&text=${F}`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break
                   case '3dglow':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(8)				  
				anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/3dglowing?text=${F}`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break
					case 'gradientavatar':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(15)				  
				anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/gradientavatar?text=${F}`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break
case 'icecold':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(8)				  
				anu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/icecold?apikey=oniichan&text=${F}`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break
                   
                   case 'toxic':
				if (!isElite) return reply(nayzelite)
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(naylachan)
				F = body.slice(6)				  
				anu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/toxic?apikey=oniichan&text=${F}`)
				nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
				break
                   
                   case 'stars':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(9)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/stars?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'fur':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(4)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/fur?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'cake':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/birthdaycake?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'wall3d':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/striking3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'melon':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/watermelon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'gold':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/multimaterial?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'metal':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/metalicglow?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   
                   case 'croma':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/crispchrome?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'flama':
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/flaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'telesticker':
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/telestick?apikey=eb35fd0f45ff356a91194eab&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'bneon':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'dropwater':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 

case 'quotemaker':
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					var bg = gh.split("|")[2];
					const pref = `Uso: \n.}quotemaker teks | marca d'água | tema\n\nEx :\n${prefix}quotemaker esto es un ejemplo | bicit | aleatório`
					if (args.length < 1) return reply(pref)
					reply(naylachan)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nayla.sendMessage(from, buffer, image, {caption: '𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇', quoted: nay})
					brea
case 'buendia':
if (!isElite) return reply(nayzelite)		
			        tuh = fs.readFileSync(`./src/buendia.jpg`)
                    teks = `Buenos Dias ❤️🌝`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'instalar':
case 'install':
case 'git':
case 'tuto':
if (!isElite) return reply(nayzelite)		
			        tuh = fs.readFileSync(`./src/botimg.jpg`)
                    teks = `╭────────────────╮\n├━⊱ DUEÑO: ${ownername}\n├━⊱ AUTOR: FELIXCRACK\n╰────────────────╮\n╭────────────────╯\n╰────────────────╮ \nCÓMO INSTALAR ESTE BOT\n╭────────────────╯\n╰────────────────╮\n╭────────────────╯\n├━⊱ pkg install wget\n├━⊱ pkg install nodejs\n├━⊱ pkg install imagemagick\n├━⊱ pkg install git\n├━⊱ git clone https://github.com/Fxmods/FELIXCRACK-BOT-FX-69\n├━⊱ bash install.sh\n├━⊱ npm start\n╰────────────────╯`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'buenasnoches':
if (!isElite) return reply(nayzelite)		
			        tuh = fs.readFileSync(`./src/noche.jpg`)
                    teks = `Buenas Noches ❤️🌚`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'canal':
			        tuh = fs.readFileSync(`./src/feli.png`)
                    teks = `Canal De Felixcrack 409\nLink: https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA\n SUSCRÍBETE ES GRATIS!! ❤️`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'zonavip':
if (!isPrem) return reply(prem1)
			        tuh = fs.readFileSync(`./src/vale.jpg`)
                    teks = `TeAmo:3\nOption1=\nOption2=\nOption3=\nBb, Foshamos?👉🏻👈🏻\n`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'belle1':
if (!isPrem) return reply(prem1)
if (!isElite) return reply(nayzelite)		
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '👀️'})
					break
case 'vip1':
if (!isPrem) return reply(prem1)
if (!isElite) return reply(nayzelite)		
					buffer = await getBuffer(`https://i.ibb.co/9bqx9kW/21b39461b2e1.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '👀️'})
					break
case 'vip2':
if (!isPrem) return reply(prem1)
if (!isElite) return reply(nayzelite)		
					buffer = await getBuffer(`https://i.ibb.co/rdcNX79/899b14ef6141.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '👀️'})
					break
case 'nopor':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0UmT8RigE3Hbr80gmigjb2AdnPJklcQ3A&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/11/novinha-petuda-fotos-4.jpg`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWoYHFA_SDgUip6MtvimWRdub_lshAn5Edg&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvLmbqW9LeOCpXiGxgu3By4eQEmJM2Xp26Q&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnhmpQD1C1Dp7I2_kpi13gAsuoudOPPraog&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/prima-novinha-pelada-6.jpg`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-5.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Un Aperitivo'})
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '😏'})
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Uy 🥵'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-6.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '🥴'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-7.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '😏'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-8.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Riko 🥵😏'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-10.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '🥵😏😏'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-16.jpg`)
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Mas?'})
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Ten😏'})
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Jejeje'})
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '🥵'})
					nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Khe'})
					break
case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            nayla.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => nayla.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => nayla.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => nayla.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => nayla.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break

case 'profile':
if (!isElite) return reply(nayzelite)		
				if (nay.message.extendedTextMessage != undefined){
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await nayla.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					nayla.sendMessage(from, thumb, MessageType.image)
				{quoted : nay}}
				break
case 'mute':
                nayla.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
case 'contag':
if (!isElite) return reply(nayzelite)		
if (!isGroupAdmins) return reply(mess.only.admin)
nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `Grupo ${groupName}`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await nayla.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG: Hola Joto;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${nayla.user.jid.split('@')[0]}:${nayla.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				nayla.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: nay, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
				        break

case 'ping':
			        tuh = fs.readFileSync(`./src/images.jpeg`)
                    teks = `Weee Ayuda Me Tienen Secuestrado, No Soy Un Bot!! 😭`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'ranklindo':
          if (!isElite) return reply(nayzelite)  
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/lindo.jpg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯────────────────❮●\n😳𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙻??𝚗𝚍𝚘𝚜😘\n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          nayla.sendMessage(from, tuh, MessageType.image, { quoted: nay, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
case 'rankgay':
          if (!isElite) return reply(nayzelite)  
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/gay.jpeg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `●❯────────────────❮●\n🏳️‍🌈𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙶𝚊𝚢🏳️‍🌈\n@${F11.jid.split('@')[0]} \n🏳️‍🌈\n@${G22.jid.split('@')[0]}\n🏳️‍🌈\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          nayla.sendMessage(from, tuh, MessageType.image, { quoted: nay, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
                
case 'infogrupo':  
if (!isElite) return reply(nayzelite)		
if (!isGroup) return reply(mess.only.group)
                    nayla.updatePresence(from, Presence.composing)
                    perfilg = await nayla.getProfilePicture(from)
                    enlacegc = await nayla.groupInviteCode (from)
                    if (!isElite) return reply(nayzelite)	
		  	  	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `Grupo ${groupName}`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
					ppUrl = await nayla.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		        	nayla.sendMessage(from, buffer, image, {quoted: nay, caption: `┏━━━━━━━━━━━━━━━━━\n┠⊷️Grupo: \n┠⊷️${groupName}\n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Miembros: ${groupMembers.length}\n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Admins: ${groupAdmins.length} \n┏━━━━━━━━━━━━━━━━━\n┠⊷️Usuarios Online: \n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Link: https://chat.whatsapp.com/${enlacegc}\n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Desc: ${groupMetadata.desc}\n┗━━━━━━━━━━━━━━━━━`})
		    		break

case 'in':  
                    if (!isElite) return reply(nayzelite)	
		  	  	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `Info:`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
		        	teks = `Weeey Ayiuda No Soy Un Bot Me Tienen Secuestrado:(\n`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
case 'letra': 
if (!isElite) return reply(nayzelite)		   
           
                		reply(naylachan)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Letra de la canción '+teks+' es :\n\n'+anu.result.lirik)
					
					break 
case 'ytsearch':
if (!isElite) return reply(nayzelite)		
reply(naylachan)
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await nayla.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Título: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Duración: ' + video.timestamp + '\n'
		            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '────✪ FX ┃ ᴮᴼᵀ ✪────'
		    		await fakethumb(tbuff,ytresult)
					break

case 'int':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
nayla.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply(ptbr.erro)
}
break

case 'reiniciar':
if (!isElite) return reply(nayzelite)		
if (!isOwner) return reply(mess.only.ownerB)
                   npm = `npm start`
                   reply('Reiniciando en unos segundos...')       
	               exec(npm, (err, stdout) => {
		           if(err) return nayla.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       nayla.sendMessage(from, stdout, text, {quoted: mek})
} 
                   })
                  break
case 'update':
if (!isElite) return reply(nayzelite)		
if (!isOwner) return reply(mess.only.ownerB)
                   npm = `npm start`
                   reply('Me Estoy Actualizando, ESPERA...')       
	               exec(npm, (err, stdout) => {
		           if(err) return nayla.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       nayla.sendMessage(from, stdout, text, {quoted: nay})
} 
                   })
                  break
case 'tagall2':
                case 'marcar2':
                if (!isElite) return reply(nayzelite)		
				nayla.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `༆ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					nayla.sendMessage(from, '𝙈𝙚𝙣𝙘𝙞𝙤𝙣 𝘿𝙚 𝙏𝙤𝙙𝙤𝙨'+teks+'â• âž¥', text, {quoted: nay})
					break
                case 'tagall3':
                case 'marcar3':
                if (!isElite) return reply(nayzelite)		
				nayla.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					nayla.sendMessage(from, '𝙼𝙴𝙽𝙲𝙸𝙾𝙽 𝙳𝙴 𝚃𝙾𝙳𝙾𝚂'+teks+'', text, {detectLinks: false, quoted: nay})
					break
                        case 'tagall4':
                        case 'marcar4':
                        if (!isElite) return reply(nayzelite)		
				nayla.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `༄ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					nayla.sendMessage(from, '𝙈𝙚𝙣𝙘𝙞𝙤𝙣 𝘿𝙚 𝙏𝙤𝙙𝙤𝙨'+teks+'✔︎', text, {quoted: nay})
					break
                case 'tagall5':
                case 'marcar5':
                if (!isElite) return reply(nayzelite)		
				nayla.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('𝑴𝑬𝑵𝑪𝑰𝑶𝑵 𝑫𝑬 𝑻𝑶𝑫𝑶𝑺'+teks+'')
					break

case 'ytmp3':
		             if (!isElite) return reply(nayzelite)
if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('¿Y el link we?')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalido Weon 😑🔪')
                    reply(naylachan)   
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=10b9f9398549cb23`)
					anu1 = `DESCARGADOR DE AUDIO DE YT BY FELIXCRACK\n\n`
                    anu1 += `✨ Titulo: ${anu.judul}\n`
                    anu1 += `⚖️ Tamaño: ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', duration :-999999999999999999, quoted: nay })
					break
                    
case 'stctag':
case 'stickertag':
case 'stag':
if (!isElite) return reply(nayzelite)		
			if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isQuotedSticker) return reply('Y el stiker?')
                                        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await nayla.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await nayla.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        nayla.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
					if (!isElite) return reply(nayzelite)		
					if (!isGroupAdmins) return reply(mess.only.admin)
                    if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: lol
                        filePath = await nayla.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await nayla.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: nay
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        nayla.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
case 'cuenta':
if (!isElite) return reply(nayzelite)		
con = ["+","×","÷","-"]
ty = con[Math.floor(Math.random() * con.length)]
number1 = `${Math.floor(Math.random() * 100)}`
number2 = `${Math.floor(Math.random() * 100)}`
conta = `Cuanto es ${number1} ${ty} ${number2}?`
reply(conta)
break
case 'dado':
if (!isElite) return reply(nayzelite)		
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
nayla.sendMessage(from, dador, sticker, {quoted: nay})
break

                      
case 'ak47':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ak47`, {method: 'get'})
					reply(naylachan)
					var n = JSON.parse(JSON.stringify(anu));
					var nime12k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime12k)
					nayla.sendMessage(from, pok, image, { quoted: nay })
					break
case 'T-34':
					
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime5k =  n[Math.floor(ath.random() * n.length)];
					pok = await getBuffer(nime5k)
					nayla.sendMessage(from, pok, image, { quoted: nay })
					break
					case 'YAK-3':
					
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-3`, {method: 'get'})
					reply(naylachan)
					var n = JSON.parse(JSON.stringify(anu));
					var nime15k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime15k)
					nayla.sendMessage(from, pok, image, { quoted: nay })
					break
					case 'YAK-9':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-9`, {method: 'get'})
					reply(naylachan)
					var n = JSON.parse(JSON.stringify(anu));
					var nime14k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime14k)
					nayla.sendMessage(from, pok, image, { quoted: nay })
					break
					case 'LA-7':
					
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LA-7`, {method: 'get'})
					reply(naylachan)
					var n = JSON.parse(JSON.stringify(anu));
					var nime13k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime13k)
					nayla.sendMessage(from, pok, image, { quoted: nay })
					break
case 'leave':
if (!isElite) return reply(nayzelite)		
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					nayla.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					nayla.updatePresence(from, Presence.composing) 
					nayla.sendMessage(from, 'Adios Jotos🥱', text) // ur cods
					}, 0)
                     break
case 'juancarlosesgei':   
                reply(naylachan)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?q=${play}&apikey=FELIXCRACKAPI409`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MÃºsica encontrada!!!*\nTitulo : ${result.title}\nFonte : ${result.source}\nTamanho : ${result.size}\n\n*Estou Baixando Sua MÃºsica, Enquanto Isso Me Segue No Insta @tiago.lveðŸ˜´*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                nayla.sendMessage(from, buffer, image, {quoted: nay, caption: infomp3})
                nayla.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: nay})
                
                break
case 'glow':
               //Update By Mzailani & Adi Official
               
               tahtaq = `${body.slice(5)}`
                    if (args.length < 1) return reply('Y el texto?')
                    if (args.length > 10) return reply('Maximo 10 letras')
                    reply(naylachan)
                    anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/metallic?text=${tahtaq}&theme=glow&apikey=${ApikeyZailani}`, {method: 'get'})
                    buffer = await getBuffer(anu.result.url)
                    nayla.sendMessage(from, buffer, image, { quoted: mek, caption: `𝑩𝒀 𝑷𝑨𝑻𝑶 𝑻𝜩𝑨𝑴`})
                    

             break


case 'firetexto':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
case 'ffire':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/epep?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                   break 
                   
 case 'rayos':  
 case 'thunder':
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break    
                   case 'sandia':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   
                   
case 'test':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://naylabot-api.herokuapp.com/api/textmaker/alam?text=Zhirrr&theme=flower&apikey=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 ??𝑂𝑇`, quoted: nay1})
                   break

case 'clone':
					  if (!isOwner) return reply(mess.only.ownerB)
					  if (args.length < 1) return reply('Tag target')
					  if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag cvk')
					  mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid[0]
					  let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					  try {
						  pp = await nayla.getProfilePicture(id)
						  buffer = await getBuffer(pp)
						  nayla.updateProfilePicture(botNumber, buffer)
						  mentions(`La foto de perfil se actualizó correctamente usando la foto de perfil @${id.split('@')[0]}`, [jid], true)
					  } catch (e) {
						  reply('Error')
					  }
					  break



case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores facheros del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Solo En Grupos`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(nayla.chats.get(ido).presences), nayla.user.jid]
                nayla.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: nay1,
                    contextInfo: { mentionedJid: online }
                })
                break


case 'runt':
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " dias, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
break
case 'setwelcome':
					if (!isOwner) return reply(`Quien verga eres puto pendejo de mierda hijo de puta chinga toda tu puta madre malparido `) 
	    	       
					if (args.length < 1) return reply('*¿Dónde está el texto??*')
                    nayla.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					nayla.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : nay1})
				break 

case 'random':

             		var group3 = await nayla.groupMetadata(from)
        				var member3 = group3['participants']
        				var mem3 = []
        				member3.map( async adm => {
	        			mem3.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				        let randomv = mem3[Math.floor(Math.random() * mem3.length)]
        				console.log(randomv)
        				nayla.sendMessage(from, `╔✯〘 Te han seleccionado! 〙✯═ \n\n @${randomv.split('@')[0]}\n\n═✯〘 Para: ${body.slice(8)} 〙✯═`, text, {quoted : nay, contextInfo: {mentionedJid : [randomv], "forwardingScore": 999, "isForwarded": true}})
        				break
case 'gay':
	if (!isGroup) return reply(mess.only.group)
	
	if (args.length < 1) return nayla.sendMessage(from, 'Escribe el nombre', text, {
  quoted: mek
	})
	teks = body.slice(13)
	nayla.updatePresence(from, Presence.composing)
	data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
	hasil = `*Gay Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*\n*${data.desc}*`
	reply(hasil)
	
	break
		case 'reglas':
			        tuh = fs.readFileSync(`./src/fx.jpg`)
                    nehh = `* REGLAS DEL BOT *

1. NO LLAME POR AL BOT!!
2. NO HAGA SPAM BOT
4. NO USARLO POR PRIVADO
5. NO AÑADIR A GRUPOS


SI INCUMPLES ... SERÁ BLOQUEADO + PROHIBIDO!!`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: nehh, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'notif':
  if (!isElite) return reply(nayzelite)	
					if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
teks = `╔═══════════════════
╠═══「 NOTIFICACION 」═══
╠══ Dada Por @${sender.split("@")[0]}
╠══ Mensaje: 
║${body.slice(7)}*
╠══ Grupo: 
╠══ ${groupMetadata.subject}
╚════════════════════`
group = await nayla.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: nay1
}
await nayla.sendMessage(from, options, text)
break
case 'kicktime':
					  if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					nayla.sendMessage(from, '🖕🏻 Otra cosa Juan Carlos Es GAY', text)
					}, 8000)
					setTimeout( () => {
					reply('🥵')
					}, 7000)
					setTimeout( () => {
					nayla.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					nayla.sendMessage(from, `Huy pronto sacare a este JOTO @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					nayla.sendMessage(from, 'Adios Joto', text)
					}, 2500)
					setTimeout( () => {
					reply('Huy, Que bien, esto lo voy a disfrutar como no tienes idea')
					}, 0)
					break

case 'playstore':
                    if (!isElite) return reply(nayzelite)	
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksApi}&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break


case 'nickff2': 
  if (!isElite) return reply(nayzelite)	
					nayla.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nombre* : ${i}\n=================\n`
					}
					reply(teks.trim())
					break
case 'bitly':
                   if (!isElite) return reply(nayzelite)	
				nayla.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				
				break
		case 'cuttly':	
                   if (!isElite) return reply(nayzelite)	
				nayla.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nProducción : ${data.result.Short}`
				reply(hasil)
				
				break
case 'opentime':
  if (!isElite) return reply(nayzelite)	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
				if (args[1]=="seg") {var timer = args[0]+"000"
				} else if (args[1]=="min") {var timer = args[0]+"0000"
				} else if (args[1]=="horas") {var timer = args[0]+"00000"
				} else {return reply("*SELECCIONE:*\nsegundos\nminutos\nhoras")}
				setTimeout( () => {
			    nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
				reply("Se Acabó El Tiempo, El Grupo Se Abrira")
				}, timer)
				break
case 'closetime':
  if (!isElite) return reply(nayzelite)	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
				if (args[1]=="seg") {var timer = args[0]+"000"
				} else if (args[1]=="min") {var timer = args[0]+"0000"
				} else if (args[1]=="horas") {var timer = args[0]+"00000"
				} else {return reply("*SELECCIONE:*\nsegundos\nminutos\nhoras")}
				setTimeout( () => {
			    nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
				reply("Se Acabó El Tiempo, El Grupo Se Cerrara")
				}, timer)
				break


case 'botgay':
  if (!isElite) return reply(nayzelite)	
reply('Calla mongolo de mrd')
break
case 'bothdp':
  if (!isElite) return reply(nayzelite)	
reply('Calla puto joto')
break
case 'bot':
  if (!isElite) return reply(nayzelite)	
reply('Me Hablas A Mi?🥺')
break
case 'botlindo':
  if (!isElite) return reply(nayzelite)	
reply('👉🏻👈🏻')
break

case 'yo':
	  if (!isElite) return reply(nayzelite)	
	try {
  ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@c.us`)
	} catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `‣ *Nombre* : ${pushname}
	‣ *Número* : ${sender.split("@")[0]}
	‣ *Link* : wa.me/${sender.split("@")[0]}`
	its = await getBuffer (ppimg)
	nayla.sendMessage(from, its, image, {
  quoted: nay, caption: teks
	})
	
	break
case 'rate':
				  if (!isElite) return reply(nayzelite)	
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					nayla.sendMessage(from, 'Pregunta: *'+rate+'*\n\nPorcentaje : '+ te+'%', text, { quoted: nay })
					
					break
				case 'verdad':
                  if (!isElite) return reply(nayzelite)	
                const trut =['¿Alguna vez te ha gustado alguien? ¿Cuánto tiempo?','Si es posible o si quieres, en gc / fuera de gc, ¿con quién te harás amigo? (Puede ser diferente / del mismo tipo)','¿Cuál es tu mayor miedo?','¿Alguna vez te ha gustado alguien y has sentido a esa persona como tú también?','Cual es el nombre de la exnovia de tu amigo que una vez te gustó en secreto?','¿Alguna vez ha robado el dinero de su madre o su padre? ¿La razón?','que te hace feliz cuando estas triste','¿Alguna vez amor no correspondido? si alguna vez con quien? ¿cómo se siente brou?','¿Alguna vez ha tenido una aventura con alguien?','Cual es tu mayor miedo?','quién es la persona que tiene más influencia en tu vida?','algo orgulloso de lo que obtuviste este año','quién es la persona que puede hacerte sentir incómodo','¿Quién es la persona que alguna vez te hizo sentir incómodo?','(para los musulmanes) ¿nunca has rezado en todo el día?','¿Quién está más cerca de su tipo de pareja ideal aquí?','¿Con quién te gusta jugar?','¿Alguna vez has rechazado a alguien? ¿la razón por la cual?','Menciona eventos que te hacen daño y que aún recuerdas','¿Qué logros has obtenido este año?','¿Cuál fue tu peor hábito en la escuela?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/DCBBV5M/4dc153aa3fe7.jpg`)
					nayla.sendMessage(from, truteh, image, { caption: '*Pregunta*\n\n'+ ttrth, quoted: nay })
					
					
					
				case 'reto':
				  if (!isElite) return reply(nayzelite)	
				const dare =['Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌??','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌??','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈??🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈??🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack ??👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈??🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈??🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Envía un mensaje a tu ex diciéndole "Aún me gustas','enamoramiento telefónico / novia ahora y ss al jugador','Papanicolaou a un miembro del grupo','Dile "ERES TAN HERMOSA NO AMIGOS" a los chicos','ss llamadas recientes de whatsapp','suelta el emoji "🦄 ??" cada vez que escribes en hola durante 1 día','envía una nota de voz que diga ¿puedo llamarte bebé?','suelte la cita de la canción / cita, luego etiquete al miembro apropiado para esa cita','manda foto en calzones','Escribe en ingles por un dia','Cambia tu nombre a "Soy gay" durante 5 horaschatea para contactar con el pedido según el% de batería, sigues diciéndole "tengo suerte de tenerte','Publica en tu estado, soy gay','Dile a tu ex "te amo vuelve conmigo"','Manda una nota de voz haciendo gemidos','Dile a alguien de tu sexo opuesto que lo amas','Dile al siguiente que mande mensaje que lo amas','Manda fotos de tu crush','Borra tu whatsapp','Toma foto de cara y mandala','envía tu foto con una leyenda, soy un niño adoptado','Manda un audio gritando','Sal afuera de tu casa y grita','Cambia tu nombre a 3cm por un dia','Finge ser un bot durante 2 horas']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/DCBBV5M/4dc153aa3fe7.jpg`)
					nayla.sendMessage(from, tod, image, { quoted: nay, caption: '*Reto*\n\n'+ der })
					
					break
case 'trumpsay' :
  if (!isElite) return reply(nayzelite)	
			 const ses = body.slice(10)
			 	if (args.length < 1) return reply(`Usa el comando correctamente ${prefix}trumpsay texto, Ejemplo  ${prefix}trumpsay simp bot`)
         
					reply(naylachan)
			 sayso = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${ses}`)
			 stufff = await getBuffer(sayso.message)
			 nayla.sendMessage(from, stufff, image, {quoted : nay, caption : "By FX-BOT"})
	                  
	                  break

       case 'join':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`Ejemplo ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE YT RIMURUBOTZ`} } } })                    
                   reply('BOT AKAN SEGERA MASUK...')                     
					break   
				case 'codepais':
					nayla.sendMessage(from, codepais(prefix, sender), text, { quoted: nay })
					break
case 'persona':
					nayla.sendMessage(from, persona(prefix, sender), text, { quoted: nay })
					break
case 'g':
					nayla.sendMessage(from, g(prefix, sender), text, { quoted: nay })
					break
case 'felix':
					nayla.sendMessage(from, felix(prefix, sender), text, { quoted: nay })
					break
case 'idioma':
					nayla.sendMessage(from, idioma(prefix, sender), text, { quoted: nay })
					break
case 'modapk':
					nayla.sendMessage(from, modapk(prefix, sender), text, { quoted: nay })
					break
case 'termux':
					nayla.sendMessage(from, termux(prefix, sender), text, { quoted: nay })
					break
case 'destrava':
					nayla.sendMessage(from, destrava(prefix, sender), text, { quoted: nay })
					break
case 'm2':
					nayla.sendMessage(from, m2(prefix, sender), text, { quoted: nay })
					break
case 'porno':
					nayla.sendMessage(from, porno(prefix, sender), text, { quoted: nay })
					break
case 'ayuda':
					nayla.sendMessage(from, ayuda(prefix, sender), text, { quoted: nay })
					break

    case 'info':
			        const timestamp = speed();             
                    const latensi = speed() - timestamp
                    nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `╾╼╾╼╾╼╾✪ FX ┃ ᴮᴼᵀ ✪╾╼╾╼╾╼╾╼`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
			        uptime = process.uptime()
			        me = nayla.user 
			        teks = `╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        teks += `│‣Nombre Del Bot: ${me.name}\n`
			        teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        teks += `│‣Nombre Del Dueño: ${ownername}\n`
			        teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        teks += `│‣Autor: Felixcrack 499\n`
			        teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        teks += `│‣Número Del Bot: \n`
                    teks += `│‣${nayla.user.jid}\n`
			        teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        teks += `│‣Suscribete: \n`
                    teks += `│‣https://cutt.ly/6bCcxbX*\n`
			        teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        teks += `│‣Velocidad: ${latensi.toFixed(4)} _Segundos_\n`
			        teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Prefijo: 「 ${prefix} 」\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Chats Totales: ${totalchat.length}\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Usuarios Bloqueados: ${blocked.length}\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Version De Whatsapp* : ${nayla.user.phone.wa_version}\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Tiempo activo*: ${kyun(uptime)}\n`
                    teks += `│‣D = Segundos\n`
                    teks += `│‣M = Minutos\n`
                    teks += `│‣J = Horas\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Tu Eres: ${pushname}\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Verificado: ✓\n`
                    teks += `├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
                    teks += `│‣Baterai :* ${baterai.baterai}%\n`
                    teks += `╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n`
			        nayla.sendMessage(from, teks, MessageType.text, selepbot)
			        break

					case 'fxbot': 				
                    case 'verify':
                    case 'daftar':
                   case 'registrar':
case 'regitrame':
					const serialUser = createSerial(20)
					veri = sender
					if (isGroup) {
					addEliteUser(sender, pushname, time, serialUser)
					try {					 
					} catch {						 
					}
				   	reply(elitenay)
					console.log(color(`FXBOT !!!! ${pushname} NUEVO USUÁRIO UWU`, 'yellow'))
					} else {
					addEliteUser(sender, pushname, time, serialUser)
					try {						 
					} catch {						  
			    	}
			     	reply(elitenay)
		         	console.log(color(`HORE !!!! ${pushname} BARU SAJA MENJADI KAUM ELITE DI BOT INI`, 'yellow'))
				    }
				    break						       	 			            			         
                  	
        	         case 'menu': 
			case '?':
			case 'help':
			    	if (!isElite) return reply(nayzelite)	
                    reply(menuZ)
                    const SS1 = fs.readFileSync('sound/chann.mp3')
                    nayla.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    break
                    case 'fastmenu':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(fastmenu)                                                         
                    break                    
                    case 'editfoto':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(editfoto) 
                    break                                                                                           
                    case 'menucreador':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(menucreador)                                    
                    break
                    case 'menuespecial':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(menuespecial)
                    break                    
                    case 'certificado':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(certificado) 
                    break                                   
                    case 'randomtext':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(randomtext)  
                    break                                  
                    case 'gamemenu':                      
                    if (!isElite) return reply(nayzelite)	 
                    reply(gamemenu)  
                    break 
                    case 'tagmenu':                      
                    if (!isElite) return reply(nayzelite)	                                 
                    reply(tagmenu) 
                    break
                    case 'wallpapers':     
                    case 'wall':                 
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(wallpapers) 
                    break
                    case 'menu+18':     
                    case 'm18':                 
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(m18) 
                    break
                    case 'checkmenu':                      
                    if (!isElite) return reply(nayzelite)	                                   
                    reply(checkmenu) 
                    break
                    case 'internalmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(internalmenu) 
                    break 
                    case 'pornmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(pornmenu)  
                    break
                    case 'soundmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(soundmenu)  
                    break
                    case 'descargas':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(descargas)
                    break
                    case 'makermenu':                      
                    if (!isElite) return reply(nayzelite)	                                                        	
                    reply(makermenu)  
                    break    
                    case 'grupomenu':                      
                    if (!isElite) return reply(nayzelite)	                              
                    reply(grupomenu)
                    break    
                    case 'islammenu':                      
                    if (!isElite) return reply(nayzelite)	                              
                    reply(islammenu)                                    
                    break
                    case 'donasi':  
                    if (!isElite) return reply(nayzelite)	                      	
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `➻ *PULSA* : ${pulsa}\n`
                    donasi1 += `➻ *GOPAY* : ${gopay}\n`
                    donasi1 += `➻ *OVO* : ${ovo}\n`
                    donasi1 += `➻ *DANA* : ${dana}\n`
                    reply(donasi1)
                    break

case 'semoji': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=oniichan`)
                    nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay})
                    break      
case 'narutologo2':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(13)
                   reply(naylachan)
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖????𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break        
                    
                     
				    

                    case 'stalktwit':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(naylachan) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NOMBRE* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USUARIO* : ${anu.result.username}\n`
                    anu2 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu2 += `➻ *SIGUIENDO* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PÚBLICO* : ${anu.result.verified}\n`
                    anu2 += `➻ *LISTA* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVORITO* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
                    case 'stalkgithub':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NOMBRE* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USUARIO* : ${anu.result.fullname}\n`
                    anu2 += `➻ *EMPRESA* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCALIZACIÓN* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *CONTRATABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFÍA* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PÚBLICO 1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu2 += `➻ *SIGUIENDO* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *ACTUALIZAR* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
                    case 'steam':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *Nombre* : ${anu.result.name}\n`
                    anu1 += `➻ *Usuário* : ${anu.result.username}\n`
                    anu1 += `➻ *País* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    nayla.sendMessage(from, anu1, text,{quoted: nay1})
                    break 
                    case 'fb':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *TÍTULO* : ${anu.result.judul}\n`
                    nayla.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: nay1})
                    break 
                    case 'igfoto':                      	  
                    if (!isElite) return reply(nayzelite)	
		            
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.image_text)
                    nayla.sendMessage(from, anu3, image, {quoted: nay1})
                    break
                    case 'igvideo':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.video)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay1})
                    break                          
                    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
                    case 'reverse':                     	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('Y el texto?') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break    
                    case 'contpalabra':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('Y el texto?') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break       
                    case 'hilih':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('Y el texto?') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ RANDOM CEK ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'gayme':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `Este es el porcentaje de gay de ${pushname} 🏳️‍🌈\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':  
                    if (!isElite) return reply(nayzelite)	                      	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':                      	  
                    if (!isElite) return reply(nayzelite)		
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😘`
                    reply(N)
                    break                   
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
                    case 'spamemail':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN EMAIL&NOMER&PESAN') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
                    case 'spamcall':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
                    case 'quotes':                      	  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    case 'fakta':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                  
                    case 'gcard':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                                                                                                                                                                                                                                                        
                    case 'tebakgambar':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, image,{caption: 'JAWAB BRO... WAKTU 60  Segundo', quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    
                    case 'quotesnime':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                   case 'lazimedia':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break  
                   case 'wikien':
					if (args.length < 1) return reply('masukan kata kunci')
					tels = body.slice(8)		
					anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=indonesia`, {method: 'get'})
					reply(anu.result)
					break		
                   case 'covidid':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':  
                   if (!isElite) return reply(nayzelite)		                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break
                   case 'randomquran':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break                    
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case '8bit':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} kamu&aku*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy2/arcade8bit?apikey=oniichan&text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'google':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} kamu & aku & dia*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'fire':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'burn':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'battle':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐??𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'mug':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                    case 'love':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                   break 
                   case 'mug1':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                   break 
                   case 'narutoba':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                   break 
                   case 'glass':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙??𝑥𝑐??𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                   break 
                   case 'romance':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                   break 
                   
                   case 'shadow':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵??𝑇`, quoted: nay1})
                   break 
                   case 'tiktok':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'coffe':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break  
                   case 'coffe1':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `??𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'neon':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break  
                   case 'pubg':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟??𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'water':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'silk':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟??𝑐𝑘 𝐵??𝑇`, quoted: nay1})
                   break
                   case 'potter':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'candy':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break                     
                   case 'block':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    case 'artinama':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN tnaylal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case 'kusonime':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan':  
                   if (!isElite) return reply(nayzelite)		 
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
                   case 'samehadaku':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
                   case 'neon1':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break  
                   case 'text3d':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break                   
                   case 'galaxy':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'gaming':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'colors':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙??𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'kling':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖??𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'infonomer':  
                   if (!isElite) return reply(nayzelite)		
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
                   case 'jadwaltv':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
                   case 'tvjadwal':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'fml':  
                   if (!isElite) return reply(nayzelite)		 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
                   case 'cinta':  
                   if (!isElite) return reply(nayzelite)		 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
                   case 'twich':  
                   if (!isElite) return reply(nayzelite)		 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                   
                   case 'fake':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
                   case 'pin':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} https://link*`)
                   reply(naylachan)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵??𝑇`, quoted: nay1})
                   break
                   case 'qrcode':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'resepmasakan':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
                   case 'barcode':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹??𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'cersex':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
                   case 'tongue':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'pantun':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'cuaca':  
                   if (!isElite) return reply(nayzelite)		 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
                   case 'namaninja':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NOMBRE* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
                   case 'stalkig':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
                   case 'quran':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'memeindo':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'darkjokes':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'nickff': 
					nayla.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nombre* : ${i}\n=================\n`
					}
					reply(teks.trim())
					break
                   case 'tahta':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'neon2':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break                    
                   case 'wall':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break   
                   case 'wolf':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `??𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'tfire':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   nayla.sendMessage(from, anu, image, {caption: `𝐹??𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break                
                   case 'ytgold':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹??𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'ytsilver':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐??𝑎𝑐𝑘 𝐵𝑂??`, quoted: nay1})
                   break
                   case 't3d':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'logoa':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `??𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 ??𝑂𝑇`, quoted: nay1})
                   break
                   case 'pornhub':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'marvel':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'leavest':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break                    
                   case 'phcoment':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'nulis':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'shortener':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(naylachan)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(naylachan)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *UNO* : ${anu.result_1}\n`
                   anu1 += `➻ *DOS* : ${anu.result_2}\n`
                   anu1 += `➻ *TRES* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   case 'fox':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥??𝑟𝑎??𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   
                   case 'dog':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'cat':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'panda':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'panda1':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'bird':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥??𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'koala':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'meme':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `n𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
                   case 'indo1':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'indo2':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'indo3':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'indo4':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'indo5':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'indo6':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'indo7':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'indo8':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'indo9':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
				   case 'indo10':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'indo11':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'indo12':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'indo13':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'indo14':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'indo15':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'indo16':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'indo17':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'indo18':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'indo19':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'indo20':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'indo21':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'indo22':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'indo23':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'indo24':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
				   case 'indo25':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isElite) return reply(nayzelite)	
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
				   case 'randomship':
				   if (!isElite) return reply(nayzelite)	
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `●❯────────────────❮●\n*La pareja del dia \n@${C11.jid.split('@')[0]} \n❤️\n@${C22.jid.split('@')[0]}\n●❯────────────────❮●`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
				   case 'kapankah':  
                    if (!isElite) return reply(nayzelite)	
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
		           case 'apakah':  
                    if (!isElite) return reply(nayzelite)	
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break
				   case 'slot':  
                   if (!isElite) return reply(nayzelite)	    				    				    
				   slot = `===================\n` 
				   slot += `║ ${slot11} ║ ${slot22} ║ ${slot33}\n`
				   slot += `║ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
				   slot += `║ ${slot77} ║ ${slot88} ║ ${slot99}	\n`				   
				   slot += `===================\n`
				   nayla.sendMessage(from, slot, text, {quoted: nay})
				   break				  
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                                                                                                                                                                                                                                                                                                                                                          
                   case 'wallteknologi':  
                   case 'cyberspace':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/cyberspace?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'tecnologia':  
                   case 'walpegunungan':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/teknologi?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'hacker':  
                   case 'walmuslim':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/programming?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   
                   case 'muslin':  
                   case 'walcyber':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/muslim?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
case 'wallhd':  
                   case 'wallpaperhd':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/wallpaper_hd?q=aesthetic`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'montañas':  
                   case 'walhacker':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/pegunungan?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝐹𝑒𝑙𝑖??𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'quotes1':  
                    if (!isElite) return reply(nayzelite)	
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/randomquote/muslim?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'quotes2':  
                   if (!isElite) return reply(nayzelite)	
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/quotes/kanye?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'wallpaper':   
                   case 'walpaper':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/random/wallpaper?apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'imo':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(5)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/lmo?text=${F}&theme=bintang&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'scary':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=scary-njir&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'metal':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=metal-epek&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟??𝑐?? 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'metal1':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=metal-wolf&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'daun':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(6)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=daun-kaki&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case '3dwhite':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(9)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/neon9?text=${F}&theme=3dwhite&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'robot':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/maker/special/transformer?text=${F}&apikey=alpin11`)
                   anu1 = await getBuffer(anu.result.results)
                   nayla.sendMessage(from, anu1, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   case 'caklontong':  
                    if (!isElite) return reply(nayzelite)	
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/kuis/caklontong?apikey=alpin1`)                 
                   anu1 = `➻ *SOAL* : ${anu.result.soal}\nJAWAB CUYY WAKTU 60  Segundo`
                   anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}\n`
                   anu2 += `➻ *DESK* : ${anu.result.deskripsi}`
                   setTimeout( () => {
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   }, 1)
                   setTimeout( () => {
                   costum('50  Segundo ', text, tescuk, cr)
                   }, 10000)                                                                                                                                   
                   setTimeout( () => {
                   costum('40  Segundo ', text, tescuk, cr)
                   }, 20000)    
                   setTimeout( () => {
                   costum('30  Segundo ', text, tescuk, cr)
                   }, 30000)    
                   setTimeout( () => {
                   costum('20  Segundo ', text, tescuk, cr)
                   }, 40000)                                       
                   setTimeout( () => {
                   costum('10  Segundo ', text, tescuk, cr)
                   }, 50000)                                                                                                                                                     
                   setTimeout( () => {
                   nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                   }, 60000)                                                                          
                   break               
                                                                                                                                                        
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
                   case 'ssweb':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} https://google.com*`)                  
                   reply(naylachan)
                   anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ssweb?apikey=oniichan&url=${body.slice(7)}/api&device=phone`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break
                   
                   case 'smoke':  
                    if (!isElite) return reply(nayzelite)	
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/smoketext?apikey=FELIXCRACKAPI409&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break 
                   case 'rainbow':  
                    if (!isElite) return reply(nayzelite)	
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
                    case 'toimg':  
                    if (!isElite) return reply(nayzelite)	 
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: '𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':  
			    	case 'more':  
                    if (!isElite) return reply(nayzelite)	
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':  
		         	case 'cekchat':  
                    if (!isElite) return reply(nayzelite)	
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `Numero De Chats:`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}  
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	                case 'addsticker':  
                    if (!isElite) return reply(nayzelite)	          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		        	case 'addvn':  
                    if (!isElite) return reply(nayzelite)	
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
		         	case 'getvn':  
                    if (!isElite) return reply(nayzelite)	
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
			        case 'getsticker':  
		        	case 'gets':  
                    if (!isElite) return reply(nayzelite)	
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':  
                    if (!isElite) return reply(nayzelite)	
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
		        	case 'listvn':  
	         		case 'vnlist':  
                    if (!isElite) return reply(nayzelite)	
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		        	case 'addimage':  
                    if (!isElite) return reply(nayzelite)	
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
		        	case 'getimage':  
                    case 'getimg':  
                    if (!isElite) return reply(nayzelite)	
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		        	case 'imagelist':  
                    if (!isElite) return reply(nayzelite)	
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		        	case 'addvideo':  
                    if (!isElite) return reply(nayzelite)	
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
			        case 'getvideo':  
                    if (!isElite) return reply(nayzelite)	
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
		           	case 'listvideo':  
	           		case 'videolist':  
                    if (!isElite) return reply(nayzelite)	
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
                    case 'setprefix':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
					case 'setreply':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
					case 'setpp':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
			        case 'setthum':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef1.png', delb)
		            reply('Sukses')
			        break 
					case 'setwelcome':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
					case 'setout':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
					case 'settz':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
                    tz = args[0]
                    reply(`Change tz To ${tz} SUCCESS!`)					 
					break 
                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':  
         case 'creador':
                    if (!isElite) return reply(nayzelite)	
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Este es el número de mi dueño, no molestar con mamadas al menos q sean de verdad okno nah jaja, pero no jodas mucho o te manda a la vrg',MessageType.text, { quoted: nay} )				
					break    
				    case 'stiker':  
				    case 'stickergif':  
				    case 'stikergif':  
				    case 'sticker':
				    case 'sgif':  
				    case 'figu':
				    case 's':  				 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(naylachan)
					})
					.on('end', function () {
					console.log('SUSCRIBETE A FELIXCRACK 409')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(naylachan)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('SUSCRIBETE A FELIXCRACK 409')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Etiqueta una imagen o un video con ${prefix}sticker De mientras se crea el sticker ve a seguirme a YouTube`)
					}
					break
                    case 'bc':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namebot} BROADCAST* \n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${namebot} BROADCAST* ]\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.?`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break						 	 
                    case 'linkgc':  
                    if (!isElite) return reply(nayzelite)	
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(`「❗」ESTE COMANDO SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
				    case 'tagall':
                if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = nay.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Mensaje:* ${body.slice(8)}\n*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ FX ┃ ᴮᴼᵀ ✪───────* ', members_id, true)
					break
				    case 'delete':  
				case 'del':  
				    case 'd':  	
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isElite) return reply(nayzelite)	
				    
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`「❗」ESTE COMANDO SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Etiqueta al que quieres eliminar!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`SE ELIMINARÁ A @${mentioned[0].split('@')[0]} 🥵`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
					case 'hidetag':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
			    	case 'add':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`「❗」ESTE COMANDO SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN`)
					if (args.length < 1) return reply('A quien quieres añadir?')
					if (args[0].startsWith('08')) return reply('Utiliza el código de país')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('No se pudo agregar el destino, tal vez porque es privado')
					}  
					break 
				     
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                    case 'bug':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`Ejemplo ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[REPORTE DE ERROR]*\nRemitente ${pushname} \nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                   reply('Se a entregado el informe del error, Informes falsos causaran bloqueo.')                     
					break   
					case 'chat':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`Ejemplo ${prefix}chat halo min apa kabar`)
                    const cet1 = body.slice(6)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Lo siento, texto demasiado largo, máximo 300 texto', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ CHAT DE USUARIO ]*\nRemitente ${pushname} \nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    // INI SILAHKAN UBAH DI SETTINGS 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*ADA YANG CHAT NIHH*`} } } })                                    
                    reply(`PESAN ANDA SUDAH MASUK`)
                    break
                    case 'asupan':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 = `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
                    case 'asupan1':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'asupan2':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'ngakak':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
                    case 'nulis1':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(naylachan)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `n𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                    break
                    case 'nulis2':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break 
                    case 'nulis3':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `??𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break 
                    case 'nulis4':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break 
                    case 'nulis6':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break                     
                    case 'video1':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break
                    case 'video2':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break
                    case 'video3':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐??𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break
                    case 'video4':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay1}) 
                    break
                    case 'video5':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐?? 𝐵𝑂𝑇`, quoted: nay1}) 
                    break
                    case 'video6':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝐹𝑒𝑙𝑖𝑥??𝑟??𝑐?? 𝐵𝑂𝑇`, quoted: nay1}) 
                    break                     
                    
  /* ===================================================[ Felixcrack ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    if (!isElite) return reply(nayzelite)	
                    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
                    case 'foto': case 'pinterest':              
				    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
                    case 'ramalnomer':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'ramalcinta':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TnaylaL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TnaylaL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'ramaljodoh':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TnaylaL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'jodohbali':  
                    if (!isElite) return reply(nayzelite)	
			 	    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TnaylaL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'ramalnikah':  
                    if (!isElite) return reply(nayzelite)	
			 	    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TnaylaL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TnaylaL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
                    case 'taksirmimpi':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'suit':  
                    if (!isElite) return reply(nayzelite)	
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakangka':  
                    if (!isElite) return reply(nayzelite)	
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakbendera':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60  Segundo`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break     
                    case 'kata':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ Felixcrack ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'sound1':  
                    if (!isElite) return reply(nayzelite)	
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
                    case 'sound3':  
                    if (!isElite) return reply(nayzelite)	
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
                    case 'sound4':  
                    if (!isElite) return reply(nayzelite)	
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    nayla.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
                    case 'sound5':  
                    if (!isElite) return reply(nayzelite)	
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
                    case 'sound6':  
                    if (!isElite) return reply(nayzelite)	
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound7':  
                    if (!isElite) return reply(nayzelite)	
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound8':  
                    if (!isElite) return reply(nayzelite)	
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound9':  
                    if (!isElite) return reply(nayzelite)	
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound10':  
                    if (!isElite) return reply(nayzelite)	
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound11':  
                    if (!isElite) return reply(nayzelite)	
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'soundtes':  
                    if (!isElite) return reply(nayzelite)	
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound13':  
                    if (!isElite) return reply(nayzelite)	
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound14':  
                    if (!isElite) return reply(nayzelite)	
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound15':  
                    if (!isElite) return reply(nayzelite)	
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound16':  
                    if (!isElite) return reply(nayzelite)	
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound17':  
                    if (!isElite) return reply(nayzelite)	
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound18':  
                    if (!isElite) return reply(nayzelite)	
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound19':  
                    if (!isElite) return reply(nayzelite)	
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound20':  
                    if (!isElite) return reply(nayzelite)	
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound21':  
                    if (!isElite) return reply(nayzelite)	
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound22':  
                    if (!isElite) return reply(nayzelite)	
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound23':  
                    if (!isElite) return reply(nayzelite)	
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
                    case 'sound24':  
                    if (!isElite) return reply(nayzelite)	
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
                    case 'sound25':  
                    if (!isElite) return reply(nayzelite)	
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    nayla.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break                  
                     
     
                      
                    
                                                                                                                           
/* ===================================================[ Felixcrack ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
                           
                     case 'katailham':  
                     if (!isElite) return reply(nayzelite)	
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `➻ *KATA ILHAM* : ${anu.result}`
                     reply(anu1)
                     break
                     case 'citacita':  
                     if (!isElite) return reply(nayzelite)	
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                     break
                     case 'blackpink':  
                     if (!isElite) return reply(nayzelite)	
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                     break
                     case 'exo':  
                     if (!isElite) return reply(nayzelite)	
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                     break
                     case 'bts':  
                     if (!isElite) return reply(nayzelite)	
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                     break
                     
                     case 'textfont':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'kapital':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
                     case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'boomtext':  
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     
                     
                                                                                                                          
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                   	case 'welcome':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*Ya estaba activo 🙄* !!!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[❗] SE ACTIVO LA FUNCIÓN DE: WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SE DESACTIVO: WELCOME')
					} else {
					reply(`......`)
					}
					break  
					case 'nsfw':
				if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`「 ❗ 」La Funcion De Nsfw Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó con éxito la función NSFW en este grupo`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Nsfw En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
                    case 'antilink':
                    if (!isElite) return reply(nayzelite)
                    if (!isGroup) return reply(mess.only.group)	 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo 🙄')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito✔️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break
					case 'botx':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Ya estaba activo 🙄* !!!')
					botx.push(from)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] ACTIVATED BOTX*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] SE DESACTIVO:  BOTX*')
					} else {
					reply(`[❗] 1 Para activar/ 0 Para desactivar`)
					}
					break
                    case 'antitag':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('1 para activar, 0 para desactivar')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('Ya estaba activo 🙄!')
					nayXix.push(from)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] ACTIVADO ANTI TAG*')
					} else if (Number(args[0]) === 0) {
					nayXix.splice(from, 1)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] Desactivado ANTI TAG*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antigay':  
					case 'antikuaker':
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Ya estaba activo 🙄* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] SE DESACTIVO:  ANTIGAY')
					} else {
					reply(`[❗] 1 Para activar/ 0 Para desactivar`)
					}
					break
					case 'antibocil':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Ya estaba activo 🙄* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] SE DESACTIVO:  ANTIBOCIL*')
					} else {
					reply(`[❗] 1 Para activar/ 0 Para desactivar`)
					}
					break
					case 'antiwibu':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Ya estaba activo 🙄* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] SE DESACTIVO:  ANTIWIBU*')
					} else {
					reply(`[❗] 1 Para activar/ 0 Para desactivar`)
					}
					break

					case 'antijawa':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Ya estaba activo 🙄* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] SE DESACTIVO:  ANTIJAWA*')
					} else {
					reply(`[❗] 1 Para activar/ 0 Para desactivar`)
					}
					break
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE nayla ]==============================================================*/                    	 
        					
					case 'tebak':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break 
                    case 'udara':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`PILIH ARAH/CARA Ejemplo\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
                    case 'darat':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`PILIH ARAH/CARA Ejemplo\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
                    case 'laut':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`PILIH ARAH/CARA Ejemplo\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
                    
                    case 'info1':  
                    if (!isElite) return reply(nayzelite)	
                    reply(info1)
                    break
                    case 'info2':  
                    if (!isElite) return reply(nayzelite)	
                    reply(info2)
                    break
                    case 'info3':  
                    if (!isElite) return reply(nayzelite)	
                    reply(info3)
                    break
                    case 'character':  
                    if (!isElite) return reply(nayzelite)	 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break
                    case 'manga1':  
                    if (!isElite) return reply(nayzelite)	 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `➻ Id : ${anu.id}\n`
                    anu2 += `➻ Id MAL : ${anu.idMal}\n`
                    anu2 += `➻ Title : ${anu.title.romaji}\n`
                    anu2 += `➻ English : ${anu.title.english}\n`
                    anu2 += `➻ Native : ${anu.title.native}\n`
                    anu2 += `➻ Format : ${anu.format}\n`
                    anu2 += `➻ Chapters : ${anu.chapters}\n`
                    anu2 += `➻ Volume : ${anu.volumes}\n`
                    anu2 += `➻ Status : ${anu.status}\n`
                    anu2 += `➻ Source : ${anu.source}\n`
                    anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `➻ Score : ${anu.averageScore}%\n`
                    anu2 += `➻ Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break        
case 'attp':

				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Ejemplo ${prefix}attp nayla Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				nayla.sendMessage(from, attp2, sticker, {quoted: nay})
				break             
                    case 'tiktoknowm':  
                    if (!isElite) return reply(nayzelite)	 
		            if (!isPrem) return reply(prem1)
                    reply(naylachan)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    nayla.sendMessage(from, ini_buffer, video, { quoted: nay1})
                    break
                    case 'tiktokmusic':  
                    if (!isElite) return reply(nayzelite)	 
		            if (!isPrem) return reply(prem1)
                    reply(naylachan) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay1})
                    break
                    case 'telesticker':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    case 'nhentai':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                    
                    case 'phkomen':  
                    if (!isElite) return reply(nayzelite)	 
		            if (!isPrem) return reply(prem1)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break                     
                    case 'katajago':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} cantik`)
                    anu = await fetchJson(`https://api-self.herokuapp.com/api/jagokata?kata=${args[0]}`)
                    anu1 = `➻ *KATA* : ${anu.result}`
                    reply(anu1)
                    break                     
                    
                   
                    case 'test':  
                    if (!isElite) return reply(nayzelite)	
                    reply(`oke`)
                    break
                    case 'addprem':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Órdenes recibidas, se le dará un usuario premium.`)
					break				
					case 'dellprem':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isOwner) return reply(`「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Se elimino de la lista de Premium a wa.me/${delp} `)
					break
					case 'group':  
					case 'grupo':
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`NO ERES ADMIN JAJAJAJ`)
					if (!isBotGroupAdmins) return reply(`LU ADMIN?`)
					if (args[0] === 'abrir') {
					    reply(`*GRUPO ABIERTO CON ÉXITO ✓*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`*GRUPO CERRADO CON ÉXITO✓*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
					
					case 'hidetag10':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
					case 'hidetag20':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 case 'hidetag30':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    					
					 
					
					 
					case 'ffserti':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti2':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti3':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti4':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti5':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break			
					case 'mlserti':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti2':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti3':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti4':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti5':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(11)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti2':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti3':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)					 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti4':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti5':  
                    if (!isElite) return reply(nayzelite)	 										 				 
				    if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
				    reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'tololserti':
					if (!isElite) return reply(nayzelite)	 										 				 
				    if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
				    F = body.slice(12)
				    reply(naylachan)
				    to = await getBuffer(`https://evilblackteam.nasiwebhost.com/serti1/img.php?nama=${F}`)
				    nayla.sendMessage(from, to, image, {caption: '𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇', quoted:nay1})
				    break
					
					
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
					case 'wanted':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan) 
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	               	} else {
	           	    reply(`ENVIAR FOTOS CON TEXTO ${command}`)
	              	}
	               	break
	               	case 'deteccionderostro':  
                    if (!isElite) return reply(nayzelite)		 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	              	reply(naylachan)
		            owgi = await nayla.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	nayla.sendMessage(from, hehe, image, {quoted:nay1})
		            } else {
		            reply(`ENVIAR FOTOS CON TEXTO ${command}`)
	              	}
	                break
	            	case 'removebg':  
                    if (!isElite) return reply(nayzelite)		 
                   	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}&img=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
	                reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                	}
	                break	 
	                case 'detecciondeedad':  
                    if (!isElite) return reply(nayzelite)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                nayla.sendMessage(from, gender, text, {quoted:nay1})
                 	} else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                	}
	                break
                	case 'gtav':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
	                }
	                break
                 	case 'facebookpage':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                  	}
	                break
	                case 'disfraz':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
	                }
                	break
                	case 'playadenoche':  
                    if (!isElite) return reply(nayzelite)		 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted: nay1})
                 	} else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                  	}
                	break
	                case 'lapiz':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                 	} else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                 	}
                 	break 
	                case 'quemar':  
                    if (!isElite) return reply(nayzelite)		 
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
                 	 reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted:nay1})
                  	} else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                 	}
                	break
                	case 'pistolacruzada':  
                    if (!isElite) return reply(nayzelite)		 
                	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
                  	reply(`ENVIAR FOTOS CON TEXTO ${command}`)
                  	}
                	break
	 
					 case 'demote':
			      case 'dm' : 
			if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('La etiqueta de destino que desea que no sea un administrador.!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recibidos, ya no eres adm :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nayla.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Comando recibido, quitando adm a: : @${mentioned[0].split('@')[0]} 🥵`, mentioned, true)
						nayla.groupDemoteAdmin(from, mentioned)
					}
					break
				    case 'promote':
				    case 'pm':
				    
				if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos aceptados, te conviertes en administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nayla.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						nayla.groupMakeAdmin(from, mentioned)
					}
					break 
                    case 'oxo':                    
                    if (!isElite) return reply(nayzelite)
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
                    case 'gtts':
		case 'tts':
                if (!isElite) return reply(nayzelite)
				if (args.length < 1) return nayla.sendMessage(from, '¡Y el código de idioma??!', text, {quoted: nay})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nayla.sendMessage(from, '¿Y el texto?', text, {quoted: nay})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('¿Quieres escribir la biblia o que?')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							nayla.sendMessage(from, buffer, audio, {quoted: nay, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
					case 'pesan':
                    if (!isElite) return reply(nayzelite)
					if (!isGroup) return reply(mess.only.group)
				    if (args.length < 1) return reply(`[❗] EjemploH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					reply('PESAN SUDAH TERKIRIM')
					break
					case 'tebakkimia': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${l0lhuman}`, {method: 'get'})
					kimia = `SOAL TEBAK KIMIA : *${anu.result.nama}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.lambang}`, text, {quoted: nay1}) 
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, kimia, text, {quoted: nay })
					}, 60000) 
					break 
	            	case 'tebaklirik': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${l0lhuman}`, {method: 'get'})
					lirik = `SOAL TEBAK LIRIK : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, lirik, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'tebakin1': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${l0lhuman}`, {method: 'get'})
					te1 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te1, text, {quoted: nay1 }) 
					}, 1) 
					break 
				    case 'tebakin2': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${l0lhuman}`, {method: 'get'})
					te2 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo ', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo ', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo ', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo ', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo ', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te2, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'bugtroli':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isOwner) return reply('「❗」ESTE COMANDO SOLO PUEDE SER USADO POR MI CREADOR.?')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `❮ *MAMPUS KENA TROLI* ❯\n\n${replytroli}`})
					}
					reply('*SUCCESS TROLI* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*[ TROLI GANASSSS!!! ]*\n\n${replytroli}`)
					}
					reply('*SUCCESS TROLI* ')
					}
					break
					case 'asmaulhusna':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/asmaulhusna?APIKEY=${apixteam}`)
					anu1 = `➻ *INDEX* : ${anu.result.index}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *ARAB* : ${anu.result.arabic}\n`
					anu1 += `➻ *ID* : ${anu.result.translation_id}\n`
					anu1 += `➻ *EN* : ${anu.result.translation_en}\n`					
					reply(anu1)
					break
					case 'ayatkursi':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/ayatkursi?APIKEY=${apixteam}`)
					anu1 = `➻ *TAFSIR* : ${anu.result.data.tafsir}\n`
					anu1 += `➻ *TRANSLATION* : ${anu.result.data.translation}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.data.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.data.latin}\n`
					reply(anu1)
					break
					case 'bacaansholat':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/bacaansholat?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.terjemahan}\n`
					reply(anu1)
					break
					case 'doaharian':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/doaharian?APIKEY=${apixteam}`)
					anu1 = `➻ *TITLE* : ${anu.result.title}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TRANSLATION* : ${anu.result.translation}\n` 
					reply(anu1)
					break
					case 'kisahnabi':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/kisahnabi?APIKEY=${apixteam}`)
					anu1 = `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *KELAHIRAN* : ${anu.result.thn_kelahiran}\n`
					anu1 += `➻ *USIA* : ${anu.result.usia}\n`
					anu1 += `➻ *DESCRIPTION* : ${anu.result.description}\n`
					anu1 += `➻ *TMP* : ${anu.result.tmp}\n`
					reply(anu1)
					break
					case 'niatsholat':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/niatsholat?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.terjemahan}\n`
					reply(anu1)
					break
					case 'tahlil':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/tahlil?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.title}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n` 
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.translation}\n`
					reply(anu1)
					break
					case 'wirid':
					if (!isElite) return reply(nayzelite)	 
					anu = await fetchJson(`https://xteam.xyz/religi/wirid?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *TIMES* : ${anu.result.times}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n` 
					anu1 += `➻ *TNC* : ${anu.result.tnc}\n`
					reply(anu1)
					break
					case 'randomwibu': 
					if (!isElite) return reply(nayzelite)	 
					wibuC = ['wibu1','wibu2','wibu3','wibu4','wibu5','wibu6','wibu7','wibu8','wibu8','wibu10','wibu11','wibu12']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`wibu/${wibuF}.webp`)					
                    nayla.sendMessage(from, wibuz, sticker, {quoted: nay1})
                    break
 
                    
                     
                    
                     default:            
                    if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@62812874133914")) return reply("permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 ${sender.split("@")[0]}`)
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
                    
                    
                    
                     
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    
                    
				
				    
				   
                    if (budy.includes("ท้่")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Eres admin, no te sacare por enviar binarios??🏻🤑')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Homosexual detectado ${sender.split("@")[0]}`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("Adiós Aborto")
                    }, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("Hola")
                    }, 0)
				    }
				     
				        if (budy.includes("ᡃ⃟ᡃ⃟ᡃ⃟")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Eres admin, no te sacare por enviar binarios🤙🏻🤑')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gay Detectado ${sender.split("@")[0]}`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("Adios Aborto")
                    }, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("*➰DESTRAVA PANTERA NEGRA➰*▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅     ▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂ ▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂")
					}, 0)
				    }
				    if (budy.includes("feli gei")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Homosexual detectado ${sender.split("@")[0]}`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("Onichan")){
					if (!isGroup) return
					if (!isAntiwibu) return
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Homosexual detectado ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Lo siento: ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("Feli ge")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Lo siento: ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("jodete")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Lo siento: ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("pendejo")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste ??')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Lo siento: ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("puto")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Lo siento: ${sender.split("@")[0]} serás eliminado. `)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }				    
				       
				    if (budy.includes("Yamete")){
				    const F2 = fs.readFileSync('sound/yamete.m4a')
                    nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if (budy.includes(`${numberbot}`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				    if (budy.includes(`${ownerrf}`)){
                    const F3 = fs.readFileSync('menu/tag2.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`njir`)){
                    const F3 = fs.readFileSync('menu/tag4.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Creador`)){
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Este es el número de mi dueño, no molestar con mamadas al menos q sean de verdad okno nah jaja, pero no jodas mucho o te manda a la vrg',MessageType.text, { quoted: nay} )				  
                    }
                    if (budy.includes(`Te amo bot`)){
                    	nayla.sendMessage(from, 'Yo a ti uwu',MessageType.text, { quoted: nay} )				  
                    }
                  
                    if (budy.includes(`Botgime`)){
                    const F3 = fs.readFileSync('sound/gime.mp3')
                    nayla.sendMessage(from, F3, audio, {
                    quoted: nay, ptt : true
	                })
	                }
                    if(budy.match('Jack')){
                    const F3 = fs.readFileSync('sound/jacksito.mp3')
	                nayla.sendMessage(from, F3, audio, {
                    quoted: nay, ptt : true
	                })
	                }
	                if (budy.includes('Bot lindo')){
                    nayla.sendMessage(from, 'Gracias👉🏻👈🏻',MessageType.text, { quoted: nay} )			
                    }	  
                    if (budy.includes(`Puto`)){
                    nayla.sendMessage(from, 'Que quieres puto pendejo de mierda',MessageType.text, { quoted: nay} )				  
                    }
                    if (budy.includes(`Bot`)){
                    const F3 = fs.readFileSync('stickers/no.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }	
                    if (budy.includes(`Gracias`)){
                    	nayla.sendMessage(from, 'De Nada 🤗',MessageType.text, { quoted: nay} )				  
}
               
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    

                    if (body.startsWith(`${prefix}${command}`)) {
                    const SS1 = fs.readFileSync('sound/chann.mp3')
                    nayla.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay2})
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 