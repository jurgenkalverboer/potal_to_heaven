import {cardCollection} from "./models/cardCollection.js"

const guild_names = document.getElementById("guild_names");

guild_names.append("henk");

const hero_name = document.getElementById("hero_names");

cardCollection.getHeros().forEach(hero => {
    hero_name.append(hero.name);
});



