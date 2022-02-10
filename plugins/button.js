const MyPnky = require("../events");
const { getBuffer } = require('../config');
const { MessageType, Mimetype } = require("@adiwajshing/baileys");

/* Copyright (C) 2020 Yusuf Usta.
WhatsAsena - Yusuf Usta
*/
//By denis "if don't delete the name because I m sad" 🙂

MyPnky.addCommand(

    { pattern: 'button ?(.*)', fromMe: true, desc: "Forward replied msg." },
    async (message, match) => {
     let [cap1,cap2,cap3,cap4,cap5] = match.split(';')
     const buttons = [
  {buttonId: 'id1', buttonText: {displayText: cap3}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: cap4}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: cap5}, type: 1},
]

const buttonMessage = {
    contentText: cap1,
    footerText: cap2,
    buttons: buttons,
    headerType: 1
}
return await message.sendMessage(buttonMessage, {}, MessageType.buttonsMessage)
}
);
