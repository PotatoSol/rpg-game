/* Character = [
    job: [Warrior, Mage, Archer, Rogue] 
    race: [Human, Elf, Goblin, Orc]
    attributes: [Health, Mana]
    stats: [Strength, Intelligence, Dexterity, Luck]
    level: [1-100]
    equipped: [main hand, off hand, head, chest, legs, feet]
    inventory: [quick slots (0-9), total (99)]
*/
export default class Character{
    constructor(level, race, job, equipped, attributes, stats, inventory){
        this.level = level;
        this.race = race;
        this.job = job;
        this.equipped = equipped;
        this.attributes = attributes;
        this.stats = stats;
        this.inventory = inventory;
    }
}

