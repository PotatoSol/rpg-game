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
        this.equipped = equipped;
        this.attributes = attributes;
        this.stats = stats;
    }

    addLevel(levelDelta){
        this.level += levelDelta;
    }

    changeEquipment(newEquipment){//not sure how i want to do this yet
    }

    addStats(statChange){ //takes in a 4 element array 
        this.stats.forEach((statEle, index) => {
            statEle += statChange[index];
        });
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


