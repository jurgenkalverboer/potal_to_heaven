
import archers from "../guilds/archers/archers.json" with {type: "json"};
import darkSide from "../guilds/darkside/darkside.json" with {type: "json"};
import explorer from "../guilds/explorer/explorer.json" with {type: "json"};
import warriors from "../guilds/warriors/warriors.json" with {type: "json"};
import specials from "../guilds/specials/specials.json" with {type: "json"};
import defenders from "../guilds/defenders/defenders.json" with {type: "json"};
import virus from "../guilds/virus/virus.json" with {type: "json"};
import assasins from "../guilds/assasins/assasins.json" with {type: "json"};

class CardCollection {
    constructor() {
        this.heroesMap = new Map();
        this.guidinfoMap = new Map();
        this.guildNames = [];
    }

    addGuild(guild) {
        this.guildNames.push(guild.name);
        this.heroesMap.set(guild.name,guild.heroes);
        this.guidinfoMap.set(guild.name, guild.info);
    }

    getGuidNames() {
        return this.guildNames;
    }

    getGuildInfo( name) {
        return this.guildNames.get(name);
    }

    getHeroesOfGuild(name) {
        return this.heroesMap.get(name);
    }

    getAllHeroes() {
        let allHeroes = []
        this.heroesMap.forEach(function(values, keys) {
            allHeroes = allHeroes.concat(values);
        });
        return allHeroes;
    }
}

export const cardCollection = new CardCollection();

cardCollection.addGuild(archers);
cardCollection.addGuild(darkSide);
cardCollection.addGuild(explorer);
cardCollection.addGuild(warriors);
cardCollection.addGuild(specials);
cardCollection.addGuild(defenders);
cardCollection.addGuild(virus);
cardCollection.addGuild(assasins);

