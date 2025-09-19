// check if all guilds are complete
import * as  assert from 'assert';
import {cardCollection} from "../src/models/cardCollection.js";
import {validate} from 'jsonschema';
import {heroesSchema} from "../src/schema/guildSchema.js";

describe('Heroes', function () {
    // loop over all guilds
    cardCollection.getGuidNames().forEach(guild => {
        describe(guild, function () {
            let heroes = cardCollection.getHeroesOfGuild(guild);

            it('heroes list has correct format', function () {
                let res = validate(heroes, heroesSchema);
                if(!res.valid) {
                    console.log(res);
                }
                assert.equal(res.valid, true);

            });

            it('guild has 10 units', function () {
                assert.equal(heroes.length, 10);
            });

        })
    });
    describe("Unique velocity", function () {
        it('all units have an unique velocity', function () {
            let allHeroes = cardCollection.getAllHeroes();
            allHeroes.sort((a, b) => a.velocity - b.velocity);
            let valid = true;
            for(let i=1; i< allHeroes.length; i++) {
                if (allHeroes[i-1].velocity == allHeroes[i].velocity ) {
                    valid = false;
                    console.error("Same velocity", allHeroes[i-1].name, "and", allHeroes[i].name)
                }
            }
            assert.equal(valid, true);

        });
    });
});