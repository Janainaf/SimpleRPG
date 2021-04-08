class Assassin extends Character {
	name = 'Carl';
	hp = 6;
	dmg = 6;
	mana = 20;

	specialAttack = (victim) => {
		if (this.dealDamage (victim, 0) && this.mana >= 20) {
			this.mana -= 20;
			console.log("Just so you know, Carl used his special Attack - Shadow Hit!")

		}
	}
}