/* Character = [ Player, monster, 
    class: [Warrior, Mage, Archer, Rogue] 
    race: [Human, Elf, Goblin, Orc]
    attributes: [Health, Mana]
    stats: [Strength, Intelligence, Dexterity, Luck]
    level: [1-100]
    equipped: [main hand, off hand, head, chest, legs, feet]
    inventory: [quick slots (0-9), total (99)]
*/

/* Battle system:
    Strength calculates max hit + health
    Dexterity calculates min hit + # of hits
    Intelligence calculates mana + spell level
    Luck calculates crit chance + crit damage + loot
*/

/* Items:
    Type [Equippable, Useable, Loot]
    Value: [#]

*/

/* Equippable:
    Slot [Main hand, off hand, head, chest, legs, feet]
        Attibutes: [Attack bonus, Defense Bonus, Misc Bonus]
            Main Hand: ++attack +defense
            Off Hand: ++defense +attack
            Head: ++defense +misc
            Chest: +++defense
            Legs: ++defense
            Feet: +defense +misc
*/

/* Game Object: 

*/
