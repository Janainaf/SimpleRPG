class Paladin extends Character {
	name = "Ulder";
	hp = 16;
	dmg = 3; 
	mana = 160;


	lightning = (victim) => {
		if (this.dealDamage(4, victim) && this.mana >= 40) {
			this.hp += 5;
			this.mana -= 40;
		}
	}
}