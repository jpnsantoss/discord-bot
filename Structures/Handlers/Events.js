const { Events } = require("../Validation/EventNames");

module.exports = async (client, PG, asciiTable) => {
    const Table = new asciiTable("Eventos");

    (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
        const event = require(file);

        if(!Events.includes(event.name) || !event.name) {
            const L = file.split("/");
            await Table.addRow(`${event.name || "EM FALTA"}`, `⛔ O nome ou é inválido ou está em falta: ${L[6] + `/` + L[7]}`);
            return;
        }

        if(event.once) {
            client.once(event.name, (...args) => event.execute(...args, client))
        } else {
            client.on(event.name, (...args) => event.execute(...args, client))
        }

        await Table.addRow(event.name, "✔ SUCESSO")
    })

    console.log(Table.toString());
}