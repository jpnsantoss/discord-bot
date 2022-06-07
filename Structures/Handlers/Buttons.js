module.exports = async (client, PG, asciiTable) => {
    const Table = new asciiTable("Botões");
    const buttonsFolder = await PG(`${process.cwd()}/Buttons/**/*.js`);

    buttonsFolder.map(async (file) => {
        const buttonFile = require(file);
        if(!buttonFile.id) return;

        client.buttons.set(buttonFile.id, buttonFile);
        Table.addRow(buttonFile.id, "✔ SUCESSO");
    });
    console.log(Table.toString());
}