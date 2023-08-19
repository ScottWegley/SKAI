import { Client, Message } from "discord.js";
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "../utils/ColorfulConsole";

/** Parses the message and directs it to the proper channel, creating one if one does not already exists. */
export default(msg: Message): void => {
    let sender = msg.embeds[0].author?.name.replace("Message from"," ").trim();
    let content = msg.embeds[0].title;
    let recipients = msg.embeds[0].fields[0].value;
    let isGroupchat = recipients.indexOf('+') == recipients.lastIndexOf('+');
    makeLog(`Sender is: ${sender}`);
    makeLog(`Title is: ${content}`);
    makeLog(`Recipients are: ${recipients}`);
    makeLog(`Groupchat value: ${isGroupchat}`);
}