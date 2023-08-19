import { Client } from "discord.js";
import 'dotenv/config';
import startup from "./events/startup";


const client = new Client({
    intents: []
});

console.log("SKAI is starting up.");
startup(client);

client.login(process.env.DISCORD_TOKEN);