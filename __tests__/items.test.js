import {Item, Equippable, Loot} from "../src/js/items";

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
    const myEquippable = new Equippable('boots', 10, 'feet', 1, 2, 3, 4);
    expect(myEquippable.getSlot()).toEqual(4)
});

describe('Loot class', () => {
});
test('Declare loot class', () => {
    const myLoot = new Loot('Gold', 10);
    expect(myLoot.name).toEqual('Gold');
    expect(myLoot.value).toEqual(10);
});