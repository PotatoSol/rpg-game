/* Character = [
    job: [Warrior, Mage, Archer, Rogue] 
    race: [Human, Elf, Goblin, Orc]
    attributes: [Health, Mana]
    stats: [Strength, Intelligence, Dexterity, Luck]
    level: [1-100]
    equipped: [main hand, off hand, head, chest, legs, feet]
    inventory: [quick slots (0-9), total (99)]
*/
export class Character{
    constructor(level, race, job, equipped, attributes, stats){
        this.level = level;
        this.race = race;
        this.job = job;
        this.equipped = equipped; //[main hand, off hand, head, chest, legs, feet]
        this.attributes = attributes;
        this.stats = stats; //[strength, intelligence, dexterity, luck]
    }

    addLevel(levelDelta){
        this.level += levelDelta;
    }

    changeEquipment(newEquipment){//not sure how i want to do this yet
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
    }

    getDamageRoll(){ //based on stats, calculate a damaging hit
        let min = Math.floor(this.stats[2]/4);
        let max = this.stats[0] + (this.stats[2] / 4 );
        let roll = Math.floor(Math.random() * (max - min) + (min)); //max = strength, min = dex/4
        let critRoll = Math.floor(Math.random() * (100 - this.stats[3]) + this.stats[3]);
        if (critRoll >= 100){
            roll *= 2.5;
        }
        return roll;
    }
}

export class PlayerCharacter extends Character{
    constructor(level, race, job, equipped, attributes, stats,name, inventory){
        super(level, race, job, equipped, attributes, stats);
        this.name = name;
        this.inventory = inventory;
    }
}

export class MonsterCharacter extends Character{
    constructor(level, race, job, equipped, attributes, stats, hostility, loot){
        super(level, race, job, equipped, attributes, stats);
        this.hostility = hostility; //-1 for passive characters, 101 for always hostile, if hostility > level, attack, else dont
        this.loot = loot;
    }
}


