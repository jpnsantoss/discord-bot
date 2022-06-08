const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../Structures/config.json");


module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        console.log("O client está agora pronto!");
        client.user.setActivity("na Gaming Zone", { type: "PLAYING" })

        if (!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("O bot está agora conectado à base de dados!");
        }).catch((err) => {
            console.log(err);
        })
    }
}