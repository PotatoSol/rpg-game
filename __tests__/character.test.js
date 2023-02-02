// test 1('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });
import {Character, PlayerCharacter, MonsterCharacter} from "../src/js/character";
import {Item, Equippable, Loot} from "../src/js/items";
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
test('addAttributes', () => {
    const myChar = new Character(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13]);
    myChar.addAttributes([1,2]);
    expect(myChar.attributes).toEqual([2, 3]);
});
test('getDamageRoll() with no luck', () => {
    const myChar = new Character(1, 'human', 'rogue', ['bronze sword'], [1, 1], [1, 2, 4, 0]);
    expect(myChar.getDamageRoll()).toBeGreaterThanOrEqual(1);
    expect(myChar.getDamageRoll()).toBeLessThanOrEqual(2);
});
test('getDamageRoll() with 100 luck', () => {
    const myChar = new Character(1, 'human', 'rogue', ['bronze sword'], [1, 1], [3, 2, 12, 100]);
    expect(myChar.getDamageRoll()).toBeGreaterThanOrEqual(7);
    expect(myChar.getDamageRoll()).toBeLessThanOrEqual(15);
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

describe('Item class', () => {
});
test('Declare item classes', () => {
    const myItem = new Item('apple', 5);
    expect(myItem.name).toEqual('apple');
    expect(myItem.value).toEqual(5);
});

describe('Equippable class', () => {
});
test('Declare equippable classes', () => {
    const myEquippable = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
    expect(myEquippable.name).toEqual('sword');
    expect(myEquippable.value).toEqual(10);
    expect(myEquippable.strBonus).toEqual(1);
    expect(myEquippable.intBonus).toEqual(2);
    expect(myEquippable.dexBonus).toEqual(3);
    expect(myEquippable.lckBonus).toEqual(4);
});
test('getBonuses', () => {
    const myEquippable = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
    expect(myEquippable.getBonuses()).toEqual([1, 2, 3, 4])
});
test('getSlot', () => {
    const myEquippable = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
    expect(myEquippable.getSlot()).toEqual(1)
});

describe('Loot class', () => {
});
test('Declare loot class', () => {
    const myLoot = new Loot('Gold', 10);
    expect(myLoot.name).toEqual('Gold');
    expect(myLoot.value).toEqual(10);
});

