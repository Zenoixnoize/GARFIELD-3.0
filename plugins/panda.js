/*Coded by NOIZE
*/

const MyPnky = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('menu');
if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {

    MyPnky.addCommand({pattern: 'menu', fromMe: true, desc: 'random anime image'}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/5TcNfYx/logo.jpg"  
