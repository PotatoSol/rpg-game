/* Character = [
    job: [Warrior, Mage, Archer, Rogue] 
    race: [Human, Elf, Goblin, Orc]
    attributes: [Health, Mana]
    stats: [Strength, Intelligence, Dexterity, Luck]
    level: [1-100]
    equipped: [main hand, off hand, head, chest, legs, feet]
    inventory: [quick slots (0-9), total (99)]
*/
import {EmptyItem} from "./items.js";

export class Character{
    constructor(level, race, job, equipped, attributes, stats){
        this.level = level;
        this.race = race;
        this.job = job;
        this.equipped = [];
        for(let i = 0; i<5; i++){  //[main, off, head, chest, legs, feet]
            let anEmptyItem = new EmptyItem();
            this.equipped.push(anEmptyItem)
            if(equipped[i]){
                this.equipped[i] = equipped[i]
            }
        }
        this.attributes = attributes;
        this.stats = stats; //[strength, intelligence, dexterity, luck]
    }

    addLevel(levelDelta){
        this.level += levelDelta;
    }

    //going to need empty items to fill the equipment slots
    //untested
    changeEquipment(newEquipment){//not sure how i want to do this yet 
        let slot = newEquipment.getSlot();
        this.equipped[slot] = newEquipment;
        return newEquipment;
    }

    addStats(statChange){ //takes in a 4 element array 
        this.stats.forEach((statEle, index) => {
            let newStat = statEle + statChange[index];
            this.stats[index] = newStat;
        });
    }

    addAttributes(attributeChange){
        this.attributes[0] += attributeChange[0];
        this.attributes[1] += attributeChange[1];
    }

    getAdjustedStats(){
        //returns stats after calculating racial bonuses, and equipment, and temporary stats
        let bonuses = [0, 0, 0, 0];
        this.equipped.forEach(ele => {
            if(ele.itemType == "equippable"){
                for(let i = 0; i<4; i++){
                    bonuses[i] += ele.getBonuses()[i];
                }
            }
        });
        for(let j = 0; j<4; j++){
            bonuses[j] += this.stats[j];
        }
        return bonuses;
    }

    getDamageRoll(){ //based on stats, calculate a damaging hit
        let min = Math.floor(this.getAdjustedStats()[2]/4);
        let max = this.stats[0] + (this.getAdjustedStats()[2] / 4 );
        let roll = Math.floor(Math.random() * (max - min) + (min)); //max = strength, min = dex/4
        let critRoll = Math.floor(Math.random() * (100 - this.getAdjustedStats()[3]) + this.getAdjustedStats()[3]);
        if (critRoll >= 100){
            roll *= 2.5;
        }
        return Math.floor(roll);
    }
}

export class PlayerCharacter extends Character{
    constructor(level, race, job, equipped, attributes, stats, name, inventory){
        super(level, race, job, equipped, attributes, stats);
        this.name = name;
        this.inventory = inventory;
        this.exp = 0;
    }

    changeEquipment(newEquipment){ //untested
        let slot = newEquipment.getSlot();
        //remove newequip from inv
        //put old equip in inv
        let returnInv = []
        let found = false;
        this.inventory.forEach(ele => {
            if(ele.name !== newEquipment.name){
                returnInv.push(ele);
            }else if((ele.name === newEquipment.name) && (found === false)){
                found = true;
            }else{
                returnInv.push(ele);
            }
        });
        returnInv.push(this.equipped[slot]);
        this.inventory = returnInv;
        this.equipped[slot] = newEquipment;
        return newEquipment;
    }

    removeEmptyItemsFromInv(){
        let returnInv = [];
        this.inventory.forEach(ele => {
            if(ele.value !== -1){
                returnInv.push(ele);
            }
        });
        this.inventory = returnInv;
    }
    /*
    calculateExp(){
        //idk
    }
    */
}

export class MonsterCharacter extends Character{
    constructor(level, race, job, equipped, attributes, stats, hostility, loot, id){
        super(level, race, job, equipped, attributes, stats);
        this.hostility = hostility; //-1 for passive characters, 101 for always hostile, if hostility > level, attack, else dont
        this.loot = loot;
    }
}


