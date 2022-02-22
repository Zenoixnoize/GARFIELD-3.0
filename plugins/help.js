/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy 
Instagram: www.instagram.com/kyrie.baran
*/

const MyPnky = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');

// ==================== MAIN DESCRIPTION TEXT ====================
const h_Des = "Yardım menüsünden botu kullanım hakkında bilgi verir."
const h_DedEN = "Gives information about using the bot from the Help menu."
const matchnullEN = "*ｉＰＡＮＤＡ*\n\n *🐼.xmedia* \n💬️ get xmedia menu 🍿\n\n*🐼️.song* \n💬️ To download songs by streaming service 🎼\n\n*🐼️.tts* \n💬️ Get voice not any language 🔊 \n☁ .tts good morning \n\n*🐼️.attp* \n💬️ Get rainbow effect stickers 🏳️‍🌈\n☁ .attp hi \n\n*🐼️.yt* \n💬️ Get youtube video links 📋\n☁ .yt levitating \n\n*🐼️*.video \n💬️ download youtube videos 📽️ \n☁ .video <link> \n\n*🐼.music* \n💬️ download videos and song 🎉 \n☁ .music levitating \n\n*🐼️.sticker* \n💬️ It converts your replied photo or video to sticker 🎲 \n\n*🐼️.photo* \n💬️ It converts your replied sticker to photo ⚽\n\n*🐼️.short* \n💬️ Shorten the long link 💡 \n\n*🐼️ .lyric* \n💬️ iPanda will find the lyrics of the song 📄\n\n*🐼️ .sing* \n💬️ sing the song you wrote 📀\n☁ .sing levitating \n\n*🐼️ .wiki* \n💬️ search on wikipedia 🔍\n☁ .wiki sri lanka \n\n*🐼️ .covid* \n💬️ Shows the daily and overall covid table of more than 15 countries 🕯️\n\n*🐼️.whois* \n💬️ Displays metadata data of group or person 👤 \n\n*🐼️.jid* \n💬️ Giving user's whatsapp chat link 👥 \n\n*🐼️.news* \n💬️ Get the global news 🌎 \n\n*🐼️.removebg* \n💬️ Removes the background of the photos 📊 \n\n*🐼️.trt* \n💬️ It translates with Google Translate. You must reply any message 💬 \n☁ .trt en si(English to sinhala)\n\n*🐼️.isong* \n💬️ download song in apple music 🍎\n\n*🐼️.trumpsay* \n💬️ text to Trump's tweet (funny) 💣 \n\n*🐼️.changesay* \n💬️ text to changesay meme \n\n*🐼️.tagadmin* \n💬️ tags group admins 👤\n\n*🐼️.calc* \n💬️ calculations 🎲 \n☁ .calc 69×69 \n\n*🐼️.voicy* \n💬️ convert to audio to text 🔊 \n\n*🐼️ .img* \n💬️ Searches for related pics on Google 🗺️ (beta test) \n☁ .img car wallpapers \n\n*🐼️ .animesay* \n💬️ random anime pics 🎁 \n\n*🐼️.weather* \n💬️ show weather report 🌞 ☁ .weather rajagiriya \n\n*🐼️.sweather* \n💬️ show space weather report ☄️ \n\n*🐼️.movie* \n💬️ Show movie informations ❄️\n☁ .movie godzilla \n\n*🐼️.number* \n💬️ get number the deployer or developer 📱  \n\n*🐼️.ss* \n💬️ Takes a screenshot from the page in the given link ☁️ \n\n*🐼️.mp3* \n💬️ Convert video to sound recording 🎙️ \n\n*🐼️.dict* \n💬️ Use it as a dictionary 📚 \n\n*🐼️.owner* \n💬️ show bot details 📄\n\n*🐼️.ffmpeg* \n💬️ Applies the desired ffmpeg filter to the video 📽️ \n\n*🐼️.scan* \n💬️ Guess the language of the replied message \n\n*🐼️ .currency* \n💬️ show currency info 💱 \n\n*🐼️ .github* \n💬️ Collects github information from the given username 💻 \n☁ .github Zenoixnoize \n\n*🐼️ .sysd* \n💬️ show the server properties \n\n*🐼️.project* \n💬️ show program contributors 👥 \n\n*🐼️ .tblend* \n💬️ Applies the selected TBlend effect to videos 🌌 \n\n*🐼️.speedtest* \n💬️ test server speedtest ✈️ \n\n*🐼️ .report* \n💬️ report group memeber 🚨\n\n\n\n*𝗜𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 🐼* \n📡 You must place a dot(.) at the beginning of the command \n📡 The letters in the command should be lowercase \n\n\n\n*𝗛𝗼𝘄 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁 𝗼𝘄𝗻 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 🐼*\n🐼 https://github.com/Zenoixnoize/CREAT-WHATSAPP-BOT/blob/main/README.md \n📡 You can easily and quickly create this for anyone without any programming knowledge\n\n\n\n *𝗶𝗣𝗔𝗡𝗗𝗔 🐼* \n🐼 iPanda Bot is a free open source program \n🐼 Inspired by Garfield Bot \n🐼 This does nothing for your privacy \n🐼 You can change it in any way \n🐼 Developers do not get any benefit from this. Only self-satisfaction is obtained \n🐼 This is updated and developed day by day \n🐼 You can also get this from the telegram - https://t.me/ipandx \n🐼 You can't get obscene stuff out of this \n\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙈𝙀𝙉𝙏* \n\n🐼 𝗩𝗜𝗛𝗔𝗡𝗚𝗔 𝗡𝗘𝗧𝗛𝗠𝗜𝗡𝗔 \n\n🐼 𝗧𝗛𝗔𝗥𝗜𝗡𝗗𝗨 𝗟𝗜𝗬𝗔𝗡𝗔𝗚𝗘"
const matchnull = "========== *🆘 Genel Yardım 🆘* ==========\n\n🔹 *.alive:* Botun çalışıp çalışmadığını kontrol eder.\n🔹 *.asena:* Tüm komut listesini gösterir.\n🔹 *.setvar:* Herokuya girmeden config ayarlar.\n\n🔸 Daha fazla yardım için ```.help <yardım almak istediğiniz konu>``` komutunu kullanın.\nÖrnek: ```.help botumu nasıl public yaparım?```\n\n========== *Genel Yardım Bitti* =========="
const notfound = "```Almak istediğiniz yardım bulunamadı!```\n```Lütfen daha açıklayıcı bir şekilde sorunu belirtin.```"
const notfoundEN = "```The help you wanted to get was not found!```\n```Please state the problem in a more descriptive way.```"

// ==================== ALL DESCRİPTİONS ====================
const pubTR = "Botunuzu public yapmak komutları herkese açık yapacaktır. Public yapıldıktan sonra kullanıcı sadece kişisel ve admin komutlarını kullanabilir hale gelir. Onun dışında komutları kullanamaz.\nBotunuzu public yapmak için *.setvar WORK_TYPE:public* komutunu kullanın."
const pubEN = "Making your bot public will make the commands public. After it is made public, the user can only use personal and admin commands. User cannot use commands other than this.\n To make your bot public, type *.setvar WORK_TYPE:public*"
const blTR = "BlockChat botunu belirlediğiniz gruba, kişiye veya birden fazla sohbete kapatır.\nKullanmak için önce sohbete gidip *.jid* yazın. Daha sonra gelen *90xxx-xxx@g.us veya 90xxx@whatsapp.net* yazısını kopyalayın. (@g.us ve @whatsapp.net'i silin!)\nArdından *.setvar BLOCK_CHAT:id && id1,id2...* komutunu kullanın."
const sudoTR = "SUDO, botunuzu seçtiğiniz kullanıcıya tüm yetkileri ile paylaşır. Numara sonuna ,0 koyarsanız gruplarda da aktif hale gelir.\nKullanmak için *.setvar SUDO:90xxxx && 90xx,90xxx [ülke kodu ile, (❌ +90xx • ✅ 90xx)]"

const privTR = "Botunuzu private yapmak komutları sadece size özel yapar. Başkaları kullanamaz.\nBotunuzu private yapmak için *.setvar WORK_TYPE:private* komutunu kullanın."
const privEN = "Making your bot private makes commands private only for you. Anyone cannot use.\nTo make your bot private, type *.setvar WORK_TYPE:private*"
const blEN = "Closes BlockChat bot to group, person or multiple chats you specify.\n To use it, first go to chat and type *.jid* Then copy to incoming code. (Except @g.us or @whatsapp.net!)\nThen use this command *.setvar BLOCK_CHAT:id && id1,id2..*"
const sudoEN = "SUDO, Shares your bot to the user you choose with all its powers.If you put ,0 at the end of the number, the user can also use it in the group.\nTo use, type *.setvar SUDO:90xxxx && 90xx,90xxx [with county code, (❌ +90xx • ✅ 90xx)]*"

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
    
    MyPnky.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_Des}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnull,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) || (match[1].includes('public') && match[1].includes('nedir')) || (match[1].includes('herkese') && match[1].includes('acik') || match[1].includes('açık')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) || (match[1].includes('private') && match[1].includes('nedir')) || (match[1].includes('bana') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                privTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('belirli') && match[1].includes('sohbet')) || (match[1].includes('sohbet') && match[1].includes('kapat')) || (match[1].includes('nasil') && match[1].includes('kapatabilirim')) || (match[1].includes('blockchat') && match[1].includes('nedir')) || (match[1].includes('sohbet') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                blTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('nedir')) || (match[1].includes('SUDO') && match[1].includes('nasil')) || (match[1].includes('botu') && match[1].includes('baskasina')) || (match[1].includes('botu') && match[1].includes('arkadaşıma')) || (match[1].includes('SUDO') && match[1].includes('kullanmak')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoTR,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfound,
                MessageType.text
            );
        }
    }));
}
else {
    
    MyPnky.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_DedEN}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('how')) || (match[1].includes('public') && match[1].includes('set')) || (match[1].includes('public') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('how')) || (match[1].includes('private') && match[1].includes('set')) || (match[1].includes('private') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                privEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('usage')) || (match[1].includes('SUDO') && match[1].includes('what')) || (match[1].includes('how') && match[1].includes('SUDO')) || (match[1].includes('set') && match[1].includes('SUDO')) || (match[1].includes('share') && match[1].includes('bot')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('block') && match[1].includes('chat')) || (match[1].includes('how') && match[1].includes('block')) || (match[1].includes('close') && match[1].includes('bot')) || (match[1].includes('specific') && match[1].includes('chat')) || (match[1].includes('specific') && match[1].includes('set')) ) {
            return await message.client.sendMessage(
                message.jid,
                blEN,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundEN,
                MessageType.text
            );
        }
    }));
}
}