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
});