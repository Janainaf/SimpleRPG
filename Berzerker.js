class Berserker extends Character {
	name = 'Draven';
	hp = 8;
	dmg = 4;
	mana = 0;

		// ok, add something like special attack

	rageAttack = () => {
		if (this.dealDamage(0, victim)) {
			this.dmg += 1;
			this.takeDamage(1);
		}
	}
}
