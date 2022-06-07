const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const discordModals = require("discord-modals");
discordModals(client);

const { Token } = require("./config.json");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const asciiTable = require("ascii-table");

client.commands = new Collection();
client.buttons = new Collection();

["Events", "Commands", "Buttons"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, asciiTable);
});

client.login(Token);