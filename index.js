const { AoiClient } = require("aoi.js");
require("dotenv").config();

const bot = new AoiClient({
    token: process.env.DISCORD_TOKEN,
    prefix: "!",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

bot.status({
    name: "!ping | aoi.js",
    type: "PLAYING",
    status: "online",
    time: 12
});

bot.loadCommands("./commands/");

console.log("Discord bot başlatılıyor...");

bot.readyCommand({
    channel: "",
    code: `$log[Bot hazır! $userTag[$clientID] olarak giriş yapıldı.]`
});
