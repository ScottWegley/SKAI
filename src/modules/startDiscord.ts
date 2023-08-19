import { Client } from "discord.js";
import 'dotenv/config';
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "../utils/ColorfulConsole";
import ready from "../events/discord/ready";


const DiscordBot = new Client({
    intents: []
});

/**
 * The startup routine for SKAI.  Currently logs in the Discord bot.
 */
export default (): void => {
    
    makeLog("Starting Discord Bot");

    DiscordBot.login(process.env.DISCORD_TOKEN);

    /* Register discord events. */
    ready(DiscordBot);
}

