import { Client, Message } from "discord.js";
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "../utils/ColorfulConsole";
import 'dotenv/config';
import receiveText from "../modules/receiveText";
import * as fs from "fs";
import path from "path";

var contacts: any;
var msgChannels: any;
var gcChannels: any;

export default (client: Client): void => {
    try {
        /* Loads and stores our local records */
        contacts = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/contacts.json"),'utf-8'));
        msgChannels = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/messageChannels.json"),'utf-8'));
        gcChannels = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data/groupchatChannels.json"),'utf-8'));
        /* The above records are for the receiving text module. */
    } catch (error) {
        makeError("An error occurred while trying to load local data.");
        console.log(error);
    }
    client.on('messageCreate', (msg) => {
        determineMsgRoutine(msg);
    });
}

async function determineMsgRoutine(msg: Message): Promise<void> {
    /* If the message is in the text dump channel & the message is from the iPhone Webhook, activate the text receiving routine. */
    if(msg.channelId == process.env.DISCORD_TEXT_DUMP_CHANNEL_ID && msg.author.id == process.env.SCOTTS_IPHONE_USER_ID){
        return receiveText(msg,contacts,msgChannels,gcChannels);
    }
}