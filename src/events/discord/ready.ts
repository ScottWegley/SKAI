import { Client } from "discord.js";
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "../../utils/ColorfulConsole";

/** Notifies when the Discord bot is online. */
export default (client: Client): void => {
    client.once("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        makeSuccess(`DISCORD | ${client.user.username} is online.`);
    });
}