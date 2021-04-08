class Fighter extends Character {
	name = 'Grace';
	hp = 12;
	dmg = 4;
	mana = 40;


	darkVisionAttack = (victim) => {
		if (this.dealDamage (5, victim) && this.mana >= 20) {
			this.mana -= 20; 
			// add next turn he will take a -2 dmg when hit
		}
	}
}

