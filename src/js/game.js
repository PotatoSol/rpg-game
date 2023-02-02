//should take in all characters, have checks for if the player is alive, run combat, run loot, chcek map
//this will just be a constructor for a while, not planning on testing this until all other objects and their methods are created
import {Character, PlayerCharacter, MonsterCharacter} from "./character.js";
import {Item, Equippable, Loot, EmptyItem} from "./items.js";

export class Game{
  constructor(){
    this.player;
    this.monsters = [];
  }

  setPlayer(playerCharacter){
    this.player = playerCharacter;
  };

  addMonster(inputMonster){
    this.monsters.push(inputMonster)
  };

  removeMonster(inputMonster){
    let returnMonsters = []
    this.monsters.forEach(ele => {
      if(ele !== inputMonster){
        returnMonsters.push(ele);
      }
    });
    this.monsters = returnMonsters;
  } 
  checkAlive(aCharacter){ //should also mark character for death
    //or maybe check if they're alive after the cmobat then do stuff based off that in there? idk

    if(aCharacter.attributes[0] >= 1){
      return true;
    } 
    return false;
  }

  fight(character1, character2){
    let damage1 = character1.getDamageRoll();
    let damage2 = character2.getDamageRoll();
    character1.attributes[0] -= damage2;
    character2.attributes[0] -= damage1;
  }

  combat(character1, character2){
    //handles everything in combat
    //two characters fight
    //if one dies, exit combat, 
    //  if monster dies, remove it from the array
    //    award exp to player
    //    award loot to player
    //    calculate level up
    //  if player dies
    //    end game
    
  }

  generateRandomName(length){
    let result = '';
    const characters = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vowels = 'AEIOU';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length/2) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      result += vowels.charAt(Math.floor(Math.random() * vowels.length));
      counter += 1;
    }
    return result;
  }

  generateRandomEquip(value, slot, type){
    //generate material
    // bronze, iron, steel, adamantite, rune
    // 0-20, 21-40, 41-60, 61-80, 81-100
    let material = 'wooden';
    let bonus1 = 0;
    let bonus2 = 0;
    let bonus3 = 0;
    let bonus4 = 0;
    if(value >= 0 && value <= 20){
      material = 'bronze';
      bonus1 += Math.floor(Math.random() * (value));
    } else if (value >= 21 && value <= 40){
      material = 'iron';
      bonus1 += Math.floor(Math.random() * (value));
      bonus2 += Math.floor(Math.random() * (value / 2));
    } else if (value >= 41 && value <= 60){
      material = 'steel';
      bonus1 += Math.floor(Math.random() * (value));
      bonus2 += Math.floor(Math.random() * ((value * 2) / 3));
      bonus3 += Math.floor(Math.random() * ((value) / 3));
    } else if (value >= 61 && value <= 80){
      material = 'admantite';
      bonus1 += Math.floor(Math.random() * (value));
      bonus2 += Math.floor(Math.random() * ((value * 2) / 3));
      bonus3 += Math.floor(Math.random() * (value / 3));
      bonus4 += Math.floor(Math.random() * (value / 4));
    } else if (value >= 81 && value <= 100){
      material = 'rune';
      bonus1 += Math.floor(Math.random() * (value * 2));
      bonus2 += Math.floor(Math.random() * (value));
      bonus3 += Math.floor(Math.random() * ((value * 2)/ 3));
      bonus4 += Math.floor(Math.random() * (value / 3));
    }
    
    /* type:
        main: sword, wand, bow, dagger, (hammer)
        off: shield, book, quiver, knife, (idk)
        head: helmet
        chest: chestplate
        leg: legplate
        feet: boots
    */
    
    let myEquip = new Equippable('a wooden club', value, slot, 0, 0, 0, 0);
    switch(type){
      case 'sword': //mains
        myEquip = new Equippable(material + " sword of " + this.generateRandomName(4), value, slot, bonus1 * 2, bonus4, bonus2, bonus3 * 0.5);
        break;
      case 'wand':
        myEquip = new Equippable(material + " wand of " + this.generateRandomName(4), value, slot, bonus4, bonus1 * 2, bonus3 * 0.5, bonus2);
        break;
      case 'bow':
        myEquip = new Equippable(material + " bow of " + this.generateRandomName(4), value, slot, bonus3 * .5, bonus4, bonus1 * 2, bonus2);
        break;
      case 'dagger':
        myEquip = new Equippable(material + " dagger of " + this.generateRandomName(4), value, slot, bonus3 * .5, bonus4, bonus1 * 2, bonus2);
        break;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      case 'shield': //offs
        myEquip = new Equippable(material + " shield of " + this.generateRandomName(4), value, slot, bonus1, bonus4 * .5, bonus2 * .5, bonus3 * 0.25);
        break; 
      case 'book':
        myEquip = new Equippable(material + " book of " + this.generateRandomName(4), value, slot, bonus4 * .5, bonus1 * 1, bonus3 * 0.25, bonus2 * .5);
        break;
      case 'quiver':
        myEquip = new Equippable(material + " quiver of " + this.generateRandomName(4), value, slot, bonus3 * .25, bonus4 * .5, bonus1, bonus2 * .5);
        break;
      case 'knife':
        myEquip = new Equippable(material + " knife of " + this.generateRandomName(4), value, slot, bonus3 * .25, bonus4 * .5, bonus1, bonus2 * .5);
        break;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      case 'helmet':
        myEquip = new Equippable(material + " helmet of " + this.generateRandomName(4), value, slot, bonus2 * .5, bonus4 * .25, bonus1, bonus3 * .25);
        break;
      case 'chestplate':
        myEquip = new Equippable(material + " chestplate of " + this.generateRandomName(4), value, slot, bonus1 * 3, bonus4, bonus2, bonus3 * .5);
        break;
      case 'legplate':
        myEquip = new Equippable(material + " legplate of " + this.generateRandomName(4), value, slot, bonus2, bonus4, bonus1 * 2, bonus3);
        break;
      case 'boots':
        myEquip = new Equippable(material + " boots of " + this.generateRandomName(4), value, slot, bonus3, bonus4 * .25, bonus2, bonus1 * 4);
        break;
    }
    return myEquip;
  }

  generateRandomMonster(level){ 
  //  constructor(level, race, job, equipped, attributes, stats, hostility, loot, id){
  //  potential races - orc, goblin, troll, dwarf, elf
  let randInt = Math.floor(Math.random() * 5);
  let race = 'zombie';
  switch(randInt){
      case 0:
        race = 'orc';
        break;
      case 1:
        race = 'goblin';
        break;
      case 2:
        race = 'troll';
        break;
      case 3: 
        race = 'dwarf';
        break;
      case 4:
        race = 'elf';
        break;
    }
    //  potential jobs - warrior, mage, archer, rogue
    let job = 'berserker';
    randInt = Math.floor(Math.random() * 4);
    switch(randInt){
      case 0: 
        job = 'warrior';
        break;
      case 1:
        job = 'mage';
        break;
      case 2:
        job = 'archer';
        break;
      case 3:
        job = 'rogue';
        break;
    }
    // potential equips - main/off/head/chest/legs/feet
    // bronze, iron, steel, adamantite, rune
    // 0-20, 21-40, 41-60, 61-80, 81-100
    let main = 'hammer';
    switch(job){
      case 'warrior':
        main = 'sword';
        break;
      case 'mage':
        main = 'wand';
        break;
      case 'archer':
        main = 'bow';
        break;
      case 'rogue':
        main = 'dagger';
        break;
    }
    randInt = Math.floor(Math.random() * (level));
    let value = randInt;

  }
}