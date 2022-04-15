function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Null Bot;;;FN:Putra Ganteng\nORG:Putra Ganteng;\nTEL;type=CELL;type=VOICE;waid=6289504575881:+62 895-0457-5881\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6289504575881', 'Hyzer', m)
m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
