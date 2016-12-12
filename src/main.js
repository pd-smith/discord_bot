import Discord from 'discord.js';
import * as config from '../config/local.json';
import Promise from 'bluebird';
import {handleMessage} from './message-handler.js';

const client = new Discord.Client();

function setListeners() {
    client.on('ready', displayReady);
    client.on('message', (message) => handleMessage(message));
}

function attachClient() {
    setListeners();
    return client.login(config.email, config.password);
}

function displayReady() {
    console.log(`Logged in as ${client.user.username}!`);
}

attachClient();
