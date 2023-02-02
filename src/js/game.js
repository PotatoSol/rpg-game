//should take in all characters, have checks for if the player is alive, run combat, run loot, chcek map
//this will just be a constructor for a while, not planning on testing this until all other objects and their methods are created
import {Character, PlayerCharacter, MonsterCharacter} from "./character.js";

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

  //untested
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
    character1.attributes[0] - damage2;
    character2.attributes[0] - damage1;
  }
}