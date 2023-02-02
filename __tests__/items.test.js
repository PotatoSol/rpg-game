import {Item, Equippable, Loot, EmptyItem} from "../src/js/items.js";

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
    expect(myEquippable.getBonuses()).toEqual([1, 2, 3, 4]);
});
test('getSlot', () => {
    const myEquippable0 = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
    expect(myEquippable0.getSlot()).toEqual(0);
    const myEquippable1 = new Equippable('shield', 10, 'off', 1, 2, 3, 4);
    expect(myEquippable1.getSlot()).toEqual(1);
    const myEquippable2 = new Equippable('helmet', 10, 'head', 1, 2, 3, 4);
    expect(myEquippable2.getSlot()).toEqual(2);
    const myEquippable3 = new Equippable('chestplate', 10, 'chest', 1, 2, 3, 4);
    expect(myEquippable3.getSlot()).toEqual(3);
    const myEquippable4 = new Equippable('legplate', 10, 'legs', 1, 2, 3, 4);
    expect(myEquippable4.getSlot()).toEqual(4);
    const myEquippable = new Equippable('boots', 10, 'feet', 1, 2, 3, 4);
    expect(myEquippable.getSlot()).toEqual(5);
});
test('getBonuses', () => {
  var mySword = new Equippable('sword', 10, 'main', 1, 2, 3, 4);
  expect(mySword.getBonuses()).toEqual([1, 2, 3, 4]);
});
describe('Loot class', () => {
});
test('Declare loot class', () => {
    const myLoot = new Loot('Gold', 10);
    expect(myLoot.name).toEqual('Gold');
    expect(myLoot.value).toEqual(10);
});

describe('EmptyItem class', () => {
});
test('Declare EmptyItem class', () => {
    const myEmptyItem = new EmptyItem();
    expect(myEmptyItem.name).toEqual('Empty');
    expect(myEmptyItem.value).toEqual(-1);
});