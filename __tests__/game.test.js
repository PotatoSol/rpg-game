import {Character, PlayerCharacter, MonsterCharacter} from "../src/js/character.js";
import {Item, Equippable, Loot, EmptyItem} from "../src/js/items.js";
import {Game} from "../src/js/game.js";

describe('Game', () => {
});
test('Declare a new Game object', () => {
    const newGame = new Game();
    const myPlayerChar = new PlayerCharacter(1, 'human', 'mage', [], [1, 1], [10, 11, 12, 13], 'john', []);
    const myMonster = new MonsterCharacter(1, 'orc', 'warrior', [], [1, 1], [10, 11, 12, 13], 6, ['horn']);
    newGame.setPlayer(myPlayerChar);
    expect(newGame.player).toEqual(myPlayerChar);
});
test('Add a monster', () => {
    const newGame = new Game();
    const myPlayerChar = new PlayerCharacter(1, 'human', 'mage', [], [1, 1], [10, 11, 12, 13], 'john', []);
    const myMonster = new MonsterCharacter(1, 'orc', 'warrior', [], [1, 1], [10, 11, 12, 13], 6, ['horn']);
    newGame.setPlayer(myPlayerChar);
    newGame.addMonster(myMonster);
    expect(newGame.monsters).toEqual([myMonster]);
});
test('Remove a monster', () => {
  const newGame = new Game();
  const myPlayerChar = new PlayerCharacter(1, 'human', 'mage', [], [1, 1], [10, 11, 12, 13], 'john', []);
  const myMonster = new MonsterCharacter(1, 'orc', 'warrior', [], [1, 1], [10, 11, 12, 13], 6, ['horn']);
  const myOtherMonsterChar = new MonsterCharacter(1, 'dog', 'warrior', ['bronze sword'], [1, 1], [10, 11, 12, 13], 6, ['horn'])
  newGame.setPlayer(myPlayerChar);
  newGame.addMonster(myMonster);
  newGame.addMonster(myOtherMonsterChar);
  newGame.removeMonster(myMonster);
  expect(newGame.monsters).toEqual([myOtherMonsterChar]);
});
test('Check alive', () => {
  const newGame = new Game();
  const myPlayerChar = new PlayerCharacter(1, 'human', 'mage', [], [1, 1], [10, 11, 12, 13], 'john', []);
  newGame.setPlayer(myPlayerChar);
  expect(newGame.checkAlive(newGame.player)).toEqual(true);
  newGame.player.attributes[0] = 0;
  expect(newGame.checkAlive(newGame.player)).toEqual(false);
});
test('Check Fight', () => {
  const newGame = new Game();
  const myPlayerChar = new PlayerCharacter(1, 'human', 'mage', [], [1, 1], [10, 11, 12, 13], 'john', []);
  const myMonster = new MonsterCharacter(1, 'orc', 'warrior', [], [1, 1], [10, 11, 12, 13], 6, ['horn']);
  newGame.setPlayer(myPlayerChar);
  newGame.addMonster(myMonster);
  let currPlayerHealth = newGame.player.attributes[0];
  let currMonsterHealth = newGame.monsters[0].attributes[0];
  newGame.fight(newGame.player, newGame.monsters[0]);
  expect(newGame.player.attributes[0]).toBeLessThan(currPlayerHealth);
  expect(newGame.monsters[0].attributes[0]).toBeLessThan(currMonsterHealth);
});
test('generateRandomEquip', () => {
  const newGame = new Game();
  let myEquip = newGame.generateRandomEquip(90, 'main', 'sword');
  expect(myEquip.equipSlot).toEqual('main');
});
test('generateRandomName()', () => {
  const newGame = new Game();
  expect(newGame.generateRandomName(4).length).toEqual(4);
});
test('generateRandomMonster()', () => {
  const newGame = new Game();
  const myMonster = newGame.generateRandomMonster(100);
  expect(myMonster).toBeTruthy();
});