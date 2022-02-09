/* 
NOIZE PROJECTS  
Licensed under the  GPL-3.0 License;

Coded By Tharindu Liyanage
*/

let DataPack = require('pinky');
let pinky = require('pinky/sources/dc/handler');
let Details = require('pinky/sources/dc/Details');
let Language = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { MessageType, Mimetype} = require('@ravindu01manoj/sew-queen-web');
let { sendMessageDownloader, sendMessageBrodcast, sendMessageAddBrodcast, downloadapkpinky, downloadtwitterpinky} = require('pinky/sources/dc/cmd/dl')
const Lang = Language.dataGet('scrapers');
const translatte = require('translatte');


pinky['IntroduceCMD']({
        pattern: 'mediafire ?(.*)', // Mediafire Download 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'mediafire')
})); 

pinky['IntroduceCMD']({
        pattern: 'insta ?(.*)',  // instagram Download 
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'insta')
})); 

pinky['IntroduceCMD']({
        pattern: 'github ?(.*)',   // About Github Ptofile And Repo
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'github')
})); 


pinky['IntroduceCMD']({
        pattern: 'tiktok ?(.*)',   // Tiktok Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'tiktok')
})); 

pinky['IntroduceCMD']({
        pattern: 'url ?(.*)',     // Image To Url
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'imgurl')
})); 

pinky['IntroduceCMD']({
        pattern: 'covid ?(.*)',   // Covid Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'covid')
})); 

pinky['IntroduceCMD']({
        pattern: 'trt ?(.*)',    // Language Translate
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        if (!QueenSew.reply_message) {
            return await QueenSew.client.sendMessage(QueenSew.jid,Lang.NEED_REPLY,MessageType.text);
        }
        var langa;
        var langb;
        if(input[1].includes(' ')) {
   langa = input[1].split(' ')[0];
   langb = input[1].split(' ')[1];
   } else {
  langa = 'auto';
  langb = Details.LANG
 }
   
   
       let ceviri = await translatte(QueenSew.reply_message.message, {from: langa, to: langb});
        if ('text' in ceviri) {
            return await QueenSew.reply('*▶️ ' + Lang.LANG + ':* ```' + langa + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + langb + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await QueenSew.client.sendMessage(QueenSew.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
})); 

pinky['IntroduceCMD']({
        pattern: 'tts ?(.*)',   // Text To Audio
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'tts')
})); 


pinky['IntroduceCMD']({
        pattern: 'wiki ?(.*)',  // Wikipedia Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'wiki')
})); 

pinky['IntroduceCMD']({
        pattern: 'img ?(.*)',  // Google Image Download With 10+ images
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'imgsend')
})); 

pinky['IntroduceCMD']({
        pattern: 'wallpaper ?(.*)',   // Hd Wallpaper Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'wallpaper')

})); 
pinky['IntroduceCMD']({
        pattern: 'pint ?(.*)',    // Pinterest Download With Search Option 100000000+
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'pint')
})); 

pinky['IntroduceCMD']({
        pattern: 'yts ?(.*)',     // Youtube Search Engine
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'yts')
})); 

pinky['IntroduceCMD']({
        pattern: 'lyric ?(.*)',     // Songs Lirics Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'liric')
})); 

pinky['IntroduceCMD']({
        pattern: 'twitter ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'twitter')
})); 

pinky['IntroduceCMD']({
        pattern: 'gettv ?(.*)', // Twitter Video Download (HD / SD / AUDIO)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await downloadtwitterpinky(QueenSew, input)
               } catch {
                        return
                        }
})); 

pinky['IntroduceCMD']({
        pattern: 'ytv ?(.*)',      // Youtube Video Download  (144p / 240p / 360p / 420p / 720p / mp3)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'ytv')
})); 

pinky['IntroduceCMD']({
        pattern: 'gitclone ?(.*)',    // Github Repo Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'gitclone')
})); 

pinky['IntroduceCMD']({
        pattern: 'igprop ?(.*)',   // Instagram Profile Info
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'igprop')
})); 

pinky['IntroduceCMD']({
        pattern: 'fb ?(.*)',     // Facebook Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'facebook')
})); 

pinky['IntroduceCMD']({
        pattern: 'apk ?(.*)',   // Apksearch with apkmirror site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'apksearch');
})); 

pinky['IntroduceCMD']({
        pattern: 'getapk ?(.*)',   // APK DOWNLOAD APKMIRRIR LINK
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await downloadapkpinky(QueenSew, input);
               } catch {
                       return
                       }
})); 

pinky['IntroduceCMD']({
        pattern: 'playstore ?(.*)',   // Apk Search With Apk Mirrir Site
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'playstoresearch');
})); 
pinky['IntroduceCMD']({
        pattern: 'brodcast ?(.*)',    // Brodcast Without Making List (unlimited user add option)
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
if (input[1] == 'add') {
await sendMessageAddBrodcast(QueenSew, input,'add')
} else if (input[1] == 'close') {
await sendMessageAddBrodcast(QueenSew, input,'removeall')
} else if (input[1] == 'remove') {
await sendMessageAddBrodcast(QueenSew, input,'removeone')
} else {
await sendMessageBrodcast(QueenSew, input)
}
})); 
pinky['IntroduceCMD']({
        pattern: 'sticker ?(.*)',   // Sticker Maker With Packname && Author Name
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'stickerwithpackname');
})); 
pinky['IntroduceCMD']({
        pattern: 'ss ?(.*)',   //Site To Screenshot
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'sitescreenshot');
})); 
pinky['IntroduceCMD']({
        pattern: 'spdf ?(.*)',   //Site To PDF
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'sitepdf');
})); 
pinky['IntroduceCMD']({
        pattern: 'pornhub ?(.*)',   //pronehub video download and search
        fromMe: true, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'pornhubdownload');
})); 
pinky['IntroduceCMD']({
        pattern: 'downimg ?(.*)',   //
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'imagedown');
})); 
pinky['IntroduceCMD']({
        pattern: 'song ?(.*)',   // Youtube Song Download
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'downsong');
})); 
pinky['IntroduceCMD']({
        pattern: 'video ?(.*)',   // Youtube Video Downloader
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'downvideo');
})); 
pinky['IntroduceCMD']({
        pattern: 'ytd ?(.*)',   // helpers
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'dlvid');
})); 
pinky['IntroduceCMD']({
        pattern: 'tikd ?(.*)', //helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'dltik');
})); 
pinky['IntroduceCMD']({
        pattern: 'dfb ?(.*)',   // helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
await sendMessageDownloader(QueenSew, input, 'dlfb');
})); 

pinky['IntroduceCMD']({
        pattern: 'dphub ?(.*)',   // helper
        fromMe: WorkType, 
        dontAdCommandList: true
        }, 
(async (QueenSew, input) => { 
        try {
await sendMessageDownloader(QueenSew, input, 'phubdl');
              }  catch {
                      return
                      }
})); 
