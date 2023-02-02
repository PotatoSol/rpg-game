import {Character, PlayerCharacter, MonsterCharacter} from "../src/js/character.js";
import {Item, Equippable, Loot, EmptyItem} from "../src/js/items.js";

describe('Character', () => {
});
test('Declare a new character object', () => {
    const myChar = new Character(1, 'human', 'wizard', ['bronze sword'], [1, 1], [10, 11, 12, 13]);
    expect(myChar.level).toEqual(1);
    expect(myChar.race).toEqual('human');
    expect(myChar.job).toEqual('wizard');
    expect(myChar.equipped[0]).toEqual('bronze sword');
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
    expect(myPlayerChar.equipped[0]).toEqual('bronze sword');
    expect(myPlayerChar.attributes).toEqual([1,1]);
    expect(myPlayerChar.stats).toEqual([10, 11, 12, 13]);
});
test('Equip an axe', () => {
    var mySword = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
    var myAxe = new Equippable('axe', 10, 'main', 1, 2, 3, 4);
    const myPlayerChar = new PlayerCharacter(1, 'human', 'wizard', [mySword], [1, 1], [10, 11, 12, 13], 'john', [myAxe]);
    expect(myPlayerChar.inventory).toEqual([myAxe]);
    expect(myPlayerChar.equipped[0]).toEqual(mySword);
    myPlayerChar.changeEquipment(myAxe);
    expect(myPlayerChar.inventory).toEqual([mySword]);
    expect(myPlayerChar.equipped[0]).toEqual(myAxe);
});
test('getAdjustedStats', () => {
    var mySword = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
    var myShield = new Equippable('shield', 10, 'off', 5, 6, 7, 8);
    const myPlayerChar = new PlayerCharacter(1, 'human', 'wizard', [mySword, myShield], [1, 1], [10, 11, 12, 13], 'john', []);
    expect(myPlayerChar.getAdjustedStats()).toEqual([16, 19, 22, 25]);
});
test('removeEmptyItemsFromInv', () => {
    let anEmptyItem = new EmptyItem()
    let apple = new Loot('apple', 10);
    const myPlayerChar = new PlayerCharacter(1, 'human', 'wizard', [], [1, 1], [10, 11, 12, 13], 'john', [anEmptyItem, anEmptyItem, anEmptyItem, apple]);
    myPlayerChar.removeEmptyItemsFromInv();
    expect(myPlayerChar.inventory).toEqual([apple]);
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
    expect(aMonsterChar.equipped[0]).toEqual('bronze sword');
    expect(aMonsterChar.attributes).toEqual([1,1]);
    expect(aMonsterChar.stats).toEqual([10, 11, 12, 13]);
});