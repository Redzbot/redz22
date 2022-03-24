let handler = async m => m.reply(`
HAI Mau script chat onwer
https://chat.whatsapp.com/BYcW7rue6fA8gNdyLPedDe
Makasih udah masuk group 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['script']
handler.tags = ['info']
handler.command = /^scri(pt|sc)$/i

module.exports = handler
