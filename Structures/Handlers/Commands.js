const { Perms } = require("../Validation/Permissions");
const { Client } = require("discord.js");

/**
 * @param {Client} client
 */

module.exports = async (client, PG, asciiTable) => {
    const Table = new asciiTable("Comandos");

    CommandsArray = [];

    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if(!command.name)
        return Table.addRow(file.split("/")[7], "⛔ FALHOU", "Falta o nome.");

        if (!command.context && !command.description) 
        return Table.addRow(command.name, "⛔ FALHOU", "Falta a descrição.");

        if(command.permission) {
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else
            return Table.addRow(command.name, "⛔ FALHOU", "Permissão é inválida.");
        }

        client.commands.set(command.name, command);
        CommandsArray.push(command);

        await Table.addRow(command.name, "✔ SUCESSO");
    })

    console.log(Table.toString());

    // PERMISSION CHECK //

    client.on('ready', async () => {
        const MainGuild = await client.guilds.cache.get("978337565881040977");

        MainGuild.commands.set(CommandsArray);
    });
}