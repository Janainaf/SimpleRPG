class Paladin extends Character {
	name = "Ulder";
	hp = 16;
	dmg = 3; 
	mana = 160;


	lightningAttack = (victim) => {
		if (this.dealDamage(4, victim) && this.mana >= 40) {
			this.hp += 5;
			this.mana -= 40;
		}
	}
}