import { Client, Message } from "discord.js";
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "../utils/ColorfulConsole";
import 'dotenv/config';
import receiveText from "src/modules/receiveText";

export default (client: Client): void => {
    client.on('messageCreate', (msg) => {
        determineMsgRoutine(msg);
    });
}

async function determineMsgRoutine(msg: Message): Promise<void> {
    /* If the message is in the text dump channel & the message is from the iPhone Webhook, activate the text receiving routine. */
    if(msg.channelId == process.env.DISCORD_TEXT_DUMP_CHANNEL_ID && msg.author.id == process.env.SCOTTS_IPHONE_WEBHOOK_ID){
        return receiveText(msg);
    }
}