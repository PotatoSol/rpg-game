// test 1('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });
import {Character, PlayerCharacter} from "../src/js/character";'./../src/js/character.js';
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