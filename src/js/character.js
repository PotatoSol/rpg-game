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
}

export class PlayerCharacter extends Character{
    constructor(level, race, job, equipped, attributes, stats,name, inventory){
        super(level, race, job, equipped, attributes, stats);
        this.name = name;
        this.inventory = inventory;
    }
}
/*
export class MonsterCharacter extends Character{
    super(level, race, job, equipped, attributes, stats, inventory);
    */
