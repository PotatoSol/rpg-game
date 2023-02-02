//should take in all characters, have checks for if the player is alive, run combat, run loot, chcek map
//this will just be a constructor for a while, not planning on testing this until all other objects and their methods are created

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


}