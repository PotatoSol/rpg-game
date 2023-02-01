// test 1('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });
import Character from "../src/js/character";'./../src/js/character.js';
describe('Character', () => {
});
test('Declare a new character object', () => {
    const myChar = new Character(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13], ['apple']);
    expect(myChar.level).toEqual(1);
    expect(myChar.race).toEqual('human');
    expect(myChar.job).toEqual('wizard');
    expect(myChar.equipped).toEqual(['bronze sword']);
    expect(myChar.attributes).toEqual([1,1]);
    expect(myChar.stats).toEqual([10, 11, 12, 13]);
    expect(myChar.inventory).toEqual(['apple']);
    
});