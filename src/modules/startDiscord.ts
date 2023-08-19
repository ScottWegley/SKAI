import { ActivityType, Client } from "discord.js";
import 'dotenv/config';
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "../utils/ColorfulConsole";
import ready from "../events/ready";
import messageCreate from "../events/messageCreate";


const DiscordBot = new Client({
    presence: {
        "status": "online",
        "activities": [
            { name: "Managing Scott's Life", type: ActivityType.Custom }
        ]
    },
    /* This covers every possible function we could want the Discord bot to have. */
    intents: ["Guilds", "GuildMembers", "GuildModeration", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageTyping", "GuildMessageReactions", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "MessageContent", "GuildScheduledEvents", "AutoModerationConfiguration", "AutoModerationExecution"]
});

/**
 * The startup routine for SKAI.  Currently logs in the Discord bot.
 */
export default (): void => {

    makeLog("Starting Discord Bot");

    DiscordBot.login(process.env.DISCORD_TOKEN);

    /* Register discord events. */
    ready(DiscordBot);
    messageCreate(DiscordBot);
}

