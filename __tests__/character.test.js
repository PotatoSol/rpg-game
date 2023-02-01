// test 1('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });
import {Character, PlayerCharacter, MonsterCharacter} from "../src/js/character";'./../src/js/character.js';
describe('Character', () => {
});
test('Declare a new character object', () => {
    const myChar = new Character(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13]);
    expect(myChar.level).toEqual(1);
    expect(myChar.race).toEqual('human');
    expect(myChar.job).toEqual('wizard');
    expect(myChar.equipped).toEqual(['bronze sword']);
    expect(myChar.attributes).toEqual([1,1]);
    expect(myChar.stats).toEqual([10, 11, 12, 13]);
});
test('Level up!', () => {
    const myChar = new Character(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13]);
    myChar.addLevel(1);
    expect(myChar.level).toEqual(2);
});
test('addStats', () => {
    const myChar = new Character(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13]);
    myChar.addStats([1,2,3,4]);
    expect(myChar.stats).toEqual([11, 13, 15, 17]);
});

describe('PlayerCharacter', () => {
});
test('Declare the player\'s character', () => {
    const myPlayerChar = new PlayerCharacter(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13], 'john', ['apple']);
    expect(myPlayerChar.name).toEqual('john');
    expect(myPlayerChar.inventory).toEqual(['apple']);
    expect(myPlayerChar.level).toEqual(1);
    expect(myPlayerChar.race).toEqual('human');
    expect(myPlayerChar.job).toEqual('wizard');
    expect(myPlayerChar.equipped).toEqual(['bronze sword']);
    expect(myPlayerChar.attributes).toEqual([1,1]);
    expect(myPlayerChar.stats).toEqual([10, 11, 12, 13]);
});

describe('MonsterCharacter', () => {
});
test('Declare a Monster character', () => {
    const aMonsterChar = new MonsterCharacter(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13], 6, ['horn']);
    expect(aMonsterChar.hostility).toEqual(6);
    expect(aMonsterChar.loot).toEqual(['horn']);
    expect(aMonsterChar.level).toEqual(1);
    expect(aMonsterChar.race).toEqual('human');
    expect(aMonsterChar.job).toEqual('wizard');
    expect(aMonsterChar.equipped).toEqual(['bronze sword']);
    expect(aMonsterChar.attributes).toEqual([1,1]);
    expect(aMonsterChar.stats).toEqual([10, 11, 12, 13]);
});

