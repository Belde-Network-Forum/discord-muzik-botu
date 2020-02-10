const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`🎧 = Yardım Menüsü = 🎧
                    
​
✅${prefix}çal    ➠  Belirtilen müziği oynatmayı sağlar.            
✅${prefix}durdur   ➠  Belirtilen müziği durdurmayı sağlar.           
✅${prefix}geç      ➠  Sıradaki müziğe geçiş yapar.                   
✅${prefix}kuyruk   ➠  Sıradaki müzikleri gösteririr.                 
✅${prefix}ses      ➠  Sesi belirtilen miktar kadar arttırır/azaltır. 
✅${prefix}duraklat ➠  Müziği durkaklatır.                            
✅${prefix}devam    ➠  Müziği devam ettirir.                          
​`);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ys"],
  permLevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Botun yardım komutlarını gösterir.',
  usage: 'yardım'
};