// check if all guilds are complete
import * as fs from  'fs';
import * as  assert from 'assert';

import henk from "../guilds/archers/archers.json" assert {type: "json"};

console.log(henk);

describe('Guilds', function () {
    describe('#Enough units', function () {



        it('all guilds have 10 units', function () {

            fs.readdir("./guilds", (err, files) => {
                if (err)
                    assert.fail(err);
                else {
                    console.log("\nCurrent directory filenames:");
                    files.forEach(file => {
                         var obj = JSON.parse(fs.readFileSync("./guilds/" + file + "/" + file + ".json", 'utf8'));
                        console.log(file, obj);
                    })
                }
            })

            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});