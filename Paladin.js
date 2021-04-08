class Paladin extends Character {
	name = "Ulder";
	hp = 16;
	dmg = 3; 
	mana = 160;

	specialAttack = (victim) => {
		if (this.dealDamage(victim, 4) && this.mana >= 40) {
			console.log("Just so you know, Ulder used his special Attack - Healing Lighting!")
			this.hp += 5;
			this.mana -= 40;
		}
	}
}