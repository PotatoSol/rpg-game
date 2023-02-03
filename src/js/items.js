export class Item{ //equippable, loot, emptyitem
  constructor(name, value){
    this.name = name;
    this.value = value;
    this.itemType = 'item';
  }
}

export class Equippable extends Item{
  constructor(name, value, equipSlot, strBonus, intBonus, dexBonus, lckBonus){
    super(name, value);
    this.equipSlot = equipSlot; //main, off, chest, legs, feet
    this.strBonus = strBonus;
    this.intBonus = intBonus;
    this.dexBonus = dexBonus;
    this.lckBonus = lckBonus;
    this.itemType = 'equippable';
  }

  getBonuses(){
    return [this.strBonus, this.intBonus, this.dexBonus, this.lckBonus];
  }

  getSlot(){
    let returnSlot = -1;
    switch(this.equipSlot){
      case 'main':
        returnSlot = 0;
        break;
      case 'off':
        returnSlot = 1;
        break;
      case 'head':
        returnSlot = 2;
        break;
      case 'chest':
        returnSlot = 3;
        break;
      case 'legs':
        returnSlot = 4;
        break;
      case 'feet':
        returnSlot = 5;
        break;
    }
    return returnSlot;
  }
}

export class Loot extends Item{
  constructor(name, value){
    super(name, value);
    this.itemType = 'loot';
  } 
}

export class EmptyItem extends Item{
  constructor(){
    super();
    this.name = "Empty";
    this.value = -1;
  }
}