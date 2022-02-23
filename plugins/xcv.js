/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
re-edited by afnan plk
*/

const MyPnky = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {

    MyPnky.addCommand({pattern: 'panda', fromMe: true, desc: Lang.xcv_DESC}, (async (message, match) => {
        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.xcvMSG }); });
    }));

    MyPnky.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

   MyPnky.addCommand({pattern: 'panda', fromMe: false, desc: Lang.XCV_DESC}, (async (message, match) => {
       
	var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	   
	   	     var r_text = new Array ();    
r_text[0] = "The greatest glory in living lies not in never falling, but in rising every time we fall.\n           -Nelson Mandela";
r_text[1] = "The way to get started is to quit talking and begin doing.\n           -Walt Disney";
r_text[2] = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\n        -Steve Jobs";
r_text[3] = "If life were predictable it would cease to be life, and be without flavor.\n        -Eleanor Roosevelt";
r_text[4] = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\n        -Oprah Winfrey";
r_text[5] = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\n        -James Cameron";
r_text[6] = "Spread love everywhere you go. Let no one ever come to you without leaving happier.\n        -Mother Teresa";
r_text[7] = "When you reach the end of your rope, tie a knot in it and hang on.\n        -Franklin D. Roosevelt";
r_text[8] = "Always remember that you are absolutely unique. Just like everyone else.\n        -Margaret Mead";
r_text[9] = "Don't judge each day by the harvest you reap but by the seeds that you plant.\n        -Robert Louis Stevenson";
r_text[10] = "The future belongs to those who believe in the beauty of their dreams.\n        -Eleanor Roosevelt";
r_text[11] = "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.\n        -Helen Keller";
r_text[12] = "It is during our darkest moments that we must focus to see the light.\n        -Aristotle";
r_text[13] = "Do not go where the path may lead, go instead where there is no path and leave a trail.\n          -Ralph Waldo Emerson";
r_text[14] = "You will face many defeats in life, but never let yourself be defeated.\n        -Maya Angelou";
r_text[15] = "The greatest glory in living lies not in never falling, but in rising every time we fall.\n        -Nelson Mandela";
r_text[16] = "In the end, it's not the years in your life that count. It's the life in your years.\n        -Abraham Lincoln";
r_text[17] = "Never let the fear of striking out keep you from playing the game.\n        -Babe Ruth";
r_text[18] = "Life is either a daring adventure or nothing at all.\n        -Helen Keller";
r_text[19] = "Many of life's failures are people who did not realize how close they were to success when they gave up.\n        -Thomas A. Edison";
r_text[20] = "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.";//created by afnanplk
r_text[21] = "Keep smiling, because life is a beautiful thing and there's so much to smile about.\n           -Marilyn Monroe";
r_text[22] = "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.\n         -Dr. Seuss";
r_text[23] = "Life is made of ever so many partings welded together.\n        -Charles Dickens";
r_text[24] = "Success is not final; failure is not fatal: It is the courage to continue that counts.\n         -Winston S. Churchill";
r_text[25] = "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.\n        -Barack Obama";
r_text[26] = "The only person you are destined to become is the person you decide to be.\n        -Ralph Waldo Emerson";
r_text[27] = "When we strive to become better than we are, everything around us becomes better too.\n       -Paulo Coelho";
r_text[28] = "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.\n       -Rick Warren";
r_text[29] = "You only pass through this life once, you don't come back for an encore.\n       -Elvis Presley";
r_text[30] = "motivate cheyaan aarkum kayyum ath cheyth kaanikkaaana paad.\n       -Pinky";    
var i = Math.floor(31*Math.random())
       
    if (Config.xcvMSG.includes('{pp}')) {
        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.xcvMSG.replace('{pp}', '').replace('{time}', afnplk).replace('{qt}', r_text[i])}); });
	}    
	   else {//codded by Tharindu Liyanage
		   
		   var a_plk = new Array ();

        a_plk[0] = "https://i.ibb.co/P5Wmn9x/Pics-Art-22-02-22-16-36-51-127.png";
        a_plk[1] = "https://i.ibb.co/P5Wmn9x/Pics-Art-22-02-22-16-36-51-127.png";
	 var p = Math.floor(2*Math.random())

        var plk_xcv = await axios.get(`${a_plk[p]}`, { responseType: 'arraybuffer' })
//codded by Tharindu
        await message.client.sendMessage(message.jid, Buffer(plk_xcv.data), MessageType.image, {mimetype: Mimetype.png, caption: '*ｉＰＡＮＤＡ*\n\n *💬.xmedia* \n📃️ get xmedia menu \n\n*💬️.song* \n📃️ To download songs by streaming service \n\n*💬️.tts* \n📃️ Get voice not any language \n☁ .tts good morning \n\n*💬️.attp* \n📃️ Get rainbow effect stickers \n☁ .attp hi \n\n*💬️.yt* \n📃️ Get youtube video links \n☁ .yt levitating \n\n*💬️*.video \n📃️ download youtube videos \n☁ .video <link> \n\n*💬.music* \n📃️ download videos and song \n☁ .music levitating \n\n*💬️.sticker* \n📃️ It converts your replied photo or video to sticker \n\n*💬️.photo* \n📃️ It converts your replied sticker to photo \n\n*💬️.short* \n📃️ Shorten the long link \n\n*💬️ .lyric* \n📃️ iPanda will find the lyrics of the song \n\n*💬️ .sing* \n📃️ sing the song you wrote \n☁ .sing levitating \n\n*💬️ .wiki* \n📃️ search on wikipedia \n☁ .wiki sri lanka \n\n*💬️ .covid* \n📃️ Shows the daily and overall covid table of more than 15 countries \n\n*💬️.whois* \n📃️ Displays metadata data of group or person \n\n*💬️.jid* \n📃️ Giving user's whatsapp chat link \n\n*💬️.news* \n📃️ Get the global news \n\n*💬️.removebg* \n📃️ Removes the background of the photos \n\n*💬️.trt* \n📃️ It translates with Google Translate. You must reply any message \n☁ .trt en si(English to sinhala)\n\n*💬️.isong* \n📃️ download song in apple music \n\n*💬️.trumpsay* \n📃️ text to Trump's tweet (funny) \n\n*💬️.changesay* \n📃️ text to changesay meme \n\n*💬️.tagadmin* \n📃️ tags group admins \n\n*💬️.calc* \n📃️ calculations \n☁ .calc 69×69 \n\n*💬️.voicy* \n📃️ convert to audio to text \n\n*💬️ .img* \n📃️ Searches for related pics on Google (beta test) \n☁ .img car wallpapers \n\n*💬️ .animesay* \n📃️ random anime pics \n\n*💬️.weather* \n📃️ show weather report ☁ .weather rajagiriya \n\n*💬️.sweather* \n📃️ show space weather report \n\n*💬️.movie* \n📃️ Show movie informations \n☁ .movie godzilla \n\n*💬️.number* \n📃️ get number the deployer or developer \n\n*💬️.ss* \n📃️ Takes a screenshot from the page in the given link \n\n*💬️.mp3* \n📃️ Convert video to sound recording \n\n*💬️.dict* \n📃️ Use it as a dictionary \n\n*💬️.owner* \n📃️ show bot details \n\n*💬️.ffmpeg* \n📃️ Applies the desired ffmpeg filter to the video \n\n*💬️.scan* \n📃️ Guess the language of the replied message \n\n*💬️ .currency* \n📃️ show currency info \n\n*💬️ .github* \n📃️ Collects github information from the given username \n☁ .github Zenoixnoize \n\n*💬️ .sysd* \n📃️ show the server properties \n\n*💬️.project* \n📃️ show program contributors \n\n*💬️ .tblend* \n📃️ Applies the selected TBlend effect to videos \n\n*💬️.speedtest* \n📃️ test server speedtest \n\n*💬️ .report* \n📃️ report group memeber \n\n\n\n*𝗜𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 💬* \n📙 You must place a dot(.) at the beginning of the command \n📙 The letters in the command should be lowercase \n\n\n\n*𝗛𝗼𝘄 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁 𝗼𝘄𝗻 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 🐼*\n💬 https://github.com/Zenoixnoize/CREAT-WHATSAPP-BOT/blob/main/README.md \n📙 You can easily and quickly create this for anyone without any programming knowledge\n\n\n\n *𝗶𝗣𝗔𝗡𝗗𝗔 🐼* \n📡 iPanda Bot is a free open source program \n📡 Inspired by Garfield Bot \n📡 This does nothing for your privacy \n📡 You can change it in any way \n📡 Developers do not get any benefit from this. Only self-satisfaction is obtained \n📡 This is updated and developed day by day \n📡 You can also get this from the telegram - https://t.me/ipandx \n📡 You can't get obscene stuff out of this \n\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙈𝙀𝙉𝙏* \n\n📡 𝗩𝗜𝗛𝗔𝗡𝗚𝗔 𝗡𝗘𝗧𝗛𝗠𝗜𝗡𝗔 \n\n📡 𝗧𝗛𝗔𝗥𝗜𝗡𝗗𝗨 𝗟𝗜𝗬𝗔𝗡𝗔𝗚𝗘' })
    }));

    MyPnky.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
    
    MyPnky.addCommand({pattern: 'psysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
}
