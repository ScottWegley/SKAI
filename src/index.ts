import { Client } from "discord.js";
import startDiscord from "./modules/startDiscord";
import { makeError, makeWarning, makeLog, makeHeading, makeSuccess } from "./utils/ColorfulConsole";

makeHeading("Loading SKAI");

/*TODO: Fetch Settings Function */

/** Start the various modules of SKAI. */
startDiscord();
