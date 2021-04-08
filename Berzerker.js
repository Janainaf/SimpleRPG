class Berserker extends Character {
	name = 'Draven';
	hp = 8;
	dmg = 4;
	mana = 0;


	specialAttack = (victim) => {
		if (this.dealDamage(victim, 0)) {
			this.dmg += 1;
			this.takeDamage(1);
			console.log("Lightning Attack!")

		}
	}
}
