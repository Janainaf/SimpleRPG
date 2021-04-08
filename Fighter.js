class Fighter extends Character {
	name = 'Grace';
	hp = 12;
	dmg = 4;
	mana = 40;


	specialAttack = (victim) => {
		if (this.dealDamage (victim, 5) && this.mana >= 20) {
		this.mana -= 20; 
		console.log("Just so you know, Grace used her special Attack - Dark Vision Attack!")

		}
	}
}

