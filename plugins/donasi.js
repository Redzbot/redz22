let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [081807254833]
│ • Telkomsel [081807254833]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Nurutomo
│ • https://saweria.co/ariffb
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi','donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
