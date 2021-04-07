class Berserker extends Character {
	name = 'Draven';
	hp = 8;
	dmg = 4;
	mana = 0;

	rage = () => {
		if (this.dealDamage(0, victim)) {
			this.dmg += 1;
			this.takeDamage(1);
		}
	}
}
