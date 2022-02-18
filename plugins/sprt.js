const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'project', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "*Garfield bot project was coded by Tharindu Liyanage                            Special thanks                                 🏆@Bailays                                     🏆@afnanpalikkal                               🏆@yusufunta                                  🏆@Farhan                                     🏆@hasindu                                    🏆@Lasindunethsara*";
r_text[1] = "*Garfield bot project was coded by Tharindu Liyanage                            Special thanks                                 🏆@Bailays                                     🏆@afnanpalikkal                               🏆@yusufunta                                  🏆@Farhan                                     🏆@hasindu                                    🏆@Lasindunethsara*";
var i = Math.floor(2*Math.random())

await message.sendMessage(r_text[i]);

}));
